import util from '@/util'
import Easing from 'easing-functions'
import { createSchema, createState } from '@/schema'
import { getTimeFraction, getInterpolatedState } from '@/transition'
import { createFrame } from '@/frame'
import { timeParser } from '@/parsers/time'
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
    this._state = { ...this._defaultState }
    this._prevState = { ...this._defaultState }

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
    this._updateState()
    return this
  }

  refreshTimeline(){
    this.timeline = createTimeline( this._schema, this.frames )
    return this
  }

  // toggle user meddling
  meddle( meddleState, { relaxDuration, relaxDelay, freeze, easing, transitionDuration } = {} ){
    relaxDelay = relaxDelay !== undefined ? relaxDelay : this.options.meddleRelaxDelay
    relaxDuration = relaxDuration !== undefined ? relaxDuration : this.options.meddleRelaxDuration

    this._meddle.state = { ...this._meddle.state, ...meddleState }

    this._meddle.startTime = false
    this._meddle.relaxState = null
    this._meddle.active = true
    this._meddle.freeze = freeze
    this._meddle.relaxDelay = relaxDelay
    this._meddle.relaxDuration = relaxDuration
    this._meddle.easing = easing || Easing.Linear.None

    this._updateState()
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

  seek( time ){
    if ( typeof time === 'string' ){
      time = timeParser( time )
    }

    this.time = time

    this._updateState()
    this.emit('seek')
    return this
  }

  _updateState(){
    let state = this.getStateAt( this.time )

    state = this._assignMeddleState( state )
    // set state
    this._prevState = this._state
    this._state = state
    this.emit('update')
  }

  _assignMeddleState( state ){
    // check meddling
    if ( !this._meddle.active ){
      return state
    }

    let meddle = this._meddle

    if ( meddle.freeze ){
      return Object.assign( state, meddle.state )
    }

    if ( meddle.startTime === false ){
      meddle.startTime = this.time
      meddle.endTime = meddle.startTime + meddle.relaxDelay + meddle.relaxDuration
      meddle.relaxState = util.pick(
        this.getStateAt( meddle.endTime )
        , Object.keys(meddle.state)
      )
    }

    if ( this.time >= meddle.endTime || this.time < meddle.startTime ){
      // meddling is over
      this.unmeddle()
    }

    if ( this.time > this.totalTime ){
      // this will force a reset when the timeline is re-entered
      this.unmeddle()
    }

    let timeFraction = getTimeFraction(
      meddle.startTime + meddle.relaxDelay
      , meddle.endTime
      , this.time
    )

    let meddleTransitionState = getInterpolatedState(
      this._schema
      , meddle.state
      , util.mergeIntersecting( meddle.relaxState, state )
      , timeFraction
      , meddle.easing
    )

    Object.assign( state, meddleTransitionState )

    return state
  }

  getStateAt( time ){
    if ( time >= this.totalTime ){
      let m = this.timeline[this.timeline.length - 1]
      let t = m.transition

      return { ...m.state, ...t.relaxState }
    }

    let transitions = getTransitionsAtTime( this.timeline, time )
    let startState = getStartState( this.timeline, time, this._defaultState )

    return reduceTransitions( this._schema, transitions, time, startState )
  }

  to( frameId ){
    let frame = this.getFrame( frameId )

    return this.seek( frame.meta.time )
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
      return this
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
