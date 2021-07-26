import * as util from '@/util'
import { linear } from '@/easing'
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
  defaultTransitionDuration: 1000
  , meddleTimeout: 2000
  , meddleRelaxDuration: 500
  , meddleRelaxDelay: 1000
}

const DEFAULT_MEDDLE = '__DEFAULT__'

export default class extends EventEmitter {
  constructor( schema, options ){
    super()

    this.time = 0
    this.framesById = {}
    this.frames = []
    this.timeline = []

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
    return this.time / this.totalTime * 100
  }

  // add a frame
  add( state, meta ){

    const frame = createFrame(state, meta, {
      duration: this.options.defaultTransitionDuration
    })

    if ( frame.meta.id && this.framesById[frame.meta.id] ){
      throw new Error(`Frame with id "${frame.meta.id}" already defined`)
    }

    // add to id list
    if ( frame.meta.id ){
      this.framesById[frame.meta.id] = frame
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
  meddle( name, meddleState, meddleOpts = {} ){
    if ( typeof name !== 'string' ){
      meddleOpts = meddleState
      meddleState = name
      name = DEFAULT_MEDDLE
    }

    let { relaxDuration, relaxDelay, freeze, easing } = meddleOpts

    relaxDelay = relaxDelay !== undefined ? relaxDelay : this.options.meddleRelaxDelay
    relaxDuration = relaxDuration !== undefined ? relaxDuration : this.options.meddleRelaxDuration

    let meddle = this._meddles[name]

    if ( !meddle ){
      meddle = this._meddles[name] = { state: {} }
    }

    meddle.state = { ...meddle.state, ...meddleState }

    meddle.startTime = false
    meddle.relaxState = null
    meddle.active = true
    meddle.freeze = freeze
    meddle.relaxDelay = relaxDelay
    meddle.relaxDuration = relaxDuration
    meddle.easing = easing || linear

    this._updateState()
    return this
  }

  // force meddling to reset
  unmeddle( name ){
    if ( !name ){
      this._meddles = {}
      return this
    }

    delete this._meddles[name]

    return this
  }

  // toggle freezing of meddle states
  freeze( toggle = true, name = DEFAULT_MEDDLE ){

    if ( name !== true ){
      const m = this._meddles[name]

      if ( m ){
        m.freeze = toggle
      }

      return this
    }

    Object.keys(this._meddles).forEach( k => {
      const m = this._meddles[k]

      m.freeze = toggle
    })

    return this
  }

  getFrame( id ){
    const frame = this.framesById[id]

    return frame
  }

  seek( time ){
    time = timeParser( time )
    this.time = Math.min(time, this.totalTime)

    this._updateState()
    this.emit('seek')
    return this
  }

  _updateState(){
    const state = this.getStateAt( this.time )

    Object.keys( this._meddles ).reduce( (state, name) =>
      this._assignMeddleState( state, name )
    , state)
    // set state
    this._prevState = this._state
    this._state = state
    this.emit('update')
  }

  _assignMeddleState( state, name ){
    const meddle = this._meddles[name || DEFAULT_MEDDLE]

    // check meddling
    if ( !meddle.active ){
      return state
    }

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
      this.unmeddle(name)
    }

    if ( this.time > this.totalTime ){
      // this will force a reset when the timeline is re-entered
      this.unmeddle(name)
    }

    const timeFraction = getTimeFraction(
      meddle.startTime + meddle.relaxDelay
      , meddle.endTime
      , this.time
    )

    const meddleTransitionState = getInterpolatedState(
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
      const m = this.timeline[this.timeline.length - 1]
      const t = m.transition

      return { ...m.state, ...t.relaxState }
    }

    const transitions = getTransitionsAtTime( this.timeline, time )
    const startState = getStartState( this.timeline, time, this._defaultState )

    return reduceTransitions( this._schema, transitions, time, startState )
  }

  to( frameId ){
    const frame = this.getFrame( frameId )

    return this.seek( frame.meta.time )
  }

  getTransitions( time ){
    time = time || this.time
    return getTransitionsAtTime( this.timeline, time )
  }
}
