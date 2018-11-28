import util from '@/util'
import { createSchema, createState } from '@/schema'
import { getTimeFraction, getInterpolatedState } from '@/transition'
import {
  getTransitionsAtTime
  , createTimeline
  , reduceTransitions
} from '@/timeline'
import EventEmitter from '@/event-emitter'
import { timeParser } from '@/parsers/time'
import { transitionParser } from '@/parsers/transition'

const DEFAULT_FRAME_META = { time: 0 }
const META_PARSERS = {
  time: timeParser
  , transition: transitionParser
  , duration: timeParser
}
const DEFAULT_OPTIONS = {
  playbackRate: 1
  , defaultTransitionDuration: 1000
  , meddleTimeout: 2000
  , meddleDuration: 500
}

// parse meta to standardized format
function parseMeta( meta, defaults ){
  let ret = { ...defaults, ...meta } // clone

  for ( let key in META_PARSERS ){
    ret[key] = META_PARSERS[key]( ret[key] )
  }

  return ret
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
    this._meddle = { state: {} }

    this._targetState = null

    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
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
    if ( !state ){ return this }
    if ( !meta ){
      meta = state.$meta || { ...DEFAULT_FRAME_META }
    }

    meta = parseMeta( meta, {
      duration: this.options.defaultTransitionDuration
    })

    if ( meta.id && this.framesById[meta.id] ){
      throw new Error(`Frame with id "${meta.id}" already defined`)
    }

    // TODO decide if i wnat this
    // if ( meta.inherit ){
    //   let from = this.getFrame( meta.inherit )
    //
    //   state = { ...from.state, ...state }
    //   // cleanup
    //   delete state.$meta
    // }

    let frame = {
      state
      , meta
    }

    // add to id list
    if ( meta.id ){
      this.framesById[ meta.id ] = frame
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
  meddle( meddleState, { duration, timeout, force } = {} ){
    duration = duration || this.options.meddleDuration
    timeout = timeout || this.options.meddleTimeout

    this._meddle.state = { ...this._meddle.state, ...meddleState }
    this._meddle.active = true
    this._meddle.isFinite = true
    this._meddle.endState = null
    this._meddle.duration = duration

    if ( force === true ){
      // perpetual
      this._meddle.isFinite = false
    } else if ( force === false ){
      this._meddle.time = util.now() + duration
    } else {
      this._meddle.time = util.now() + duration + timeout
    }
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
      if ( this._meddle.time !== undefined && this.time > this._meddle.time ){
        // meddling is over
        this._meddle = { state: {} }
      }

      if ( this._meddle.isFinite && this.time > (this._meddle.time - this._meddle.duration) ){

        if ( !this._meddle.endState ){
          this._meddle.endState = this.getStateAt( this._meddle.time )
        }

        let timeFraction = getTimeFraction(
          this._meddle.time - this._meddle.duration
          , this._meddle.time
          , this.time
        )
        let meddleTransitionState = getInterpolatedState(
          this._schema
          , this._meddle.state
          , this._meddle.endState
          , timeFraction
        )

        Object.assign( state, meddleTransitionState )
      } else {
        Object.assign( state, this._meddle.state )
      }
    }

    // set state
    this._state = state
    this.emit('seek')
    return this
  }

  getStateAt( time ){
    if ( time >= this.totalTime ){
      let t = this.timeline[this.timeline.length - 1].transition

      return { ...t.startState, ...t.endState }
    }

    let transitions = getTransitionsAtTime( this.timeline, time )

    return reduceTransitions( this._schema, transitions, time, this._defaultState )
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
