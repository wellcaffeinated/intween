import util from '@/util'
import { createSchema, createState } from '@/schema'
import { getTimeFraction, getInterpolatedState } from '@/transition'
import { createFrame } from '@/frame'
import {
  getTransitionsAtTime
  , createTimeline
  , reduceTransitions
  , getStartState
} from '@/timeline'
import EventEmitter from '@/event-emitter'

const DEFAULT_OPTIONS = {
  playbackRate: 1
  , defaultTransitionDuration: 1000
  , meddleTimeout: 2000
  , meddleRelaxDuration: 500
  , meddleRelaxDelay: 1000
}

export default class extends EventEmitter {
  constructor( schema, options ){
    super()

    this.time = 0
    this.framesById = {}
    this.frames = []
    this.timeline = []
    this.paused = false

    this._schema = createSchema( schema )
    this._defaultState = createState( this._schema )
    this._state = {}

    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
    // reset
    this.unmeddle()
  }

  get state(){
    return this._state
  }

  get totalTime(){
    return this.timeline[this.timeline.length - 1].time
  }

  get progress(){
    return (this.time / this.totalTime * 100).toFixed(2)
  }

  // add a frame
  add( state, meta ){

    let frame = createFrame(state, meta, {
      duration: this.options.defaultTransitionDuration
    })

    if ( frame.meta.id && this.framesById[frame.meta.id] ){
      throw new Error(`Frame with id "${frame.meta.id}" already defined`)
    }

    // add to id list
    if ( frame.meta.id ){
      this.framesById[ frame.meta.id ] = frame
    }

    this.frames.push( frame )
    this.refreshTimeline()

    return this
  }

  refreshTimeline(){
    this.timeline = createTimeline( this._schema, this.frames )
    return this
  }

  // toggle user meddling
  meddle( meddleState, { relaxDuration, relaxDelay, freeze } = {} ){
    relaxDelay = relaxDelay || this.options.meddleRelaxDelay
    relaxDuration = relaxDuration || this.options.meddleRelaxDuration

    this._meddle.state = { ...this._meddle.state, ...meddleState }
    this._meddle.startTime = false
    this._meddle.endState = null
    this._meddle.active = true
    this._meddle.freeze = freeze
    this._meddle.relaxDelay = relaxDelay
    this._meddle.relaxDuration = relaxDuration

    return this
  }

  // force meddling to reset
  unmeddle(){
    this._meddle = { state: {} }
    return this
  }

  getFrame( id ){
    let frame = this.framesById[id]

    if ( !frame ){
      throw new Error(`No frame with id "${id}" exists to be inherited`)
    }

    return frame
  }

  seek( timeOrId ){
    if ( typeof timeOrId === 'string' ){
      let frame = this.getFrame( timeOrId )

      return this.seek( frame.meta.time )
    }

    this.time = timeOrId

    let state = this.getStateAt( this.time )

    // check meddling
    if ( this._meddle.active ){
      let meddle = this._meddle

      if ( !meddle.freeze && meddle.startTime === false ){
        meddle.startTime = this.time
        meddle.endTime = meddle.startTime + meddle.relaxDelay + meddle.relaxDuration
        meddle.endState = this.getStateAt( meddle.endTime )
      }

      if ( !meddle.freeze &&
        (this.time >= meddle.endTime || this.time < meddle.startTime)
      ){
        // meddling is over
        this.unmeddle()
      }

      if ( this.time >= this.totalTime ){
        // this will force a reset when the timeline is re-entered
        meddle.startTime = this.totalTime
      }

      if ( meddle.freeze ){

        Object.assign( state, this._meddle.state )

      } else {

        let timeFraction = getTimeFraction(
          meddle.startTime + meddle.relaxDelay
          , meddle.endTime
          , this.time
        )

        let meddleTransitionState = getInterpolatedState(
          this._schema
          , meddle.state
          , meddle.endState
          , timeFraction
        )

        Object.assign( state, meddleTransitionState )
      }
    }

    // set state
    this._state = state
    this.emit('seek')
    return this
  }

  getStateAt( time ){
    if ( time >= this.totalTime ){
      let m = this.timeline[this.timeline.length - 1]
      let t = m.transition

      return { ...m.state, ...t.endState }
    }

    let transitions = getTransitionsAtTime( this.timeline, time )
    let startState = getStartState( this.timeline, time, this._defaultState )

    return reduceTransitions( this._schema, transitions, time, startState )
  }

  to( timeOrId ){
    // transition to time, or frame id
  }

  step(){
    let now = util.now()
    let clockTime = this._clockTime || now
    let playbackRate = this.options.playbackRate
    let dt = now - clockTime
    let time = this.time
    let totalTime = this.totalTime

    this._clockTime = now

    // if it's paused, don't step
    if ( this.paused ){
      dt = 0
    }

    time += dt * playbackRate

    if ( time >= totalTime ){
      time = totalTime
    }

    this.seek( time )

    this.emit('step')
    return this
  }

  next(){
    // transition like slideshow
  }

  back(){
    // transition back like slideshow
  }

  getTransitions( time ){
    time = time || this.time
    return getTransitionsAtTime( this.timeline, time )
  }
}
