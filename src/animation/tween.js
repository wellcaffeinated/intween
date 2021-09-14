import { cloneDeep } from '../util/index.js'
import { createSchema, createState } from '../schema.js'
import { createFrame } from '../frame.js'
import { parseTime } from '../parsers/time.js'
import {
  getTransitionsAtTime
  , createTimeline
  , reduceTransitions
  , getStartState
} from '../timeline.js'
import { TweenOperator } from './tween-operator.js'

const DEFAULT_OPTIONS = {
  tweenDuration: '100%'
  , easing: 'linear'
}

export class Tween extends TweenOperator {
  static create(schema, options) {
    return new Tween(schema, options)
  }

  constructor(schema, options) {
    super()

    this.framesById = {}
    this.frames = []
    this.timeline = []

    this._schema = createSchema(schema)
    this._startingState = createState(this._schema)

    this._timeLabel = false
    this._loop = false
    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
    this._refreshTimeline()
  }

  get duration() {
    return this.timeline[this.timeline.length - 1]?.time || 0
  }

  withTime(label = 'time'){
    this._timeLabel = label || false
    return this
  }

  by(endTime, duration, state, easing){
    const meta = {
      endTime
    }

    if (typeof duration === 'object'){
      easing = state
      state = duration
    } else {
      meta.duration = duration
    }

    if (easing) {
      meta.easing = easing
    }

    return this.to(state, meta)
  }

  in(dt, duration, state, easing){
    const meta = {
      endTime: this.duration + parseTime(dt)
    }

    if (typeof duration === 'object') {
      easing = state
      state = duration
    } else {
      meta.duration = duration
    }

    if (easing) {
      meta.easing = easing
    }

    return this.to(state, meta)
  }

  // add a frame
  to(state, opts) {
    const meta = {}
    if (typeof opts === 'string'){
      meta.easing = opts
    } else if (opts) {
      Object.assign(meta, opts)
    }

    if (
      meta.startTime === undefined &&
      meta.endTime === undefined
    ) {
      meta.startTime = this.duration
    }

    const frame = createFrame(state, meta, {
      duration: this.options.tweenDuration
      , easing: this.options.easing
    })

    if (frame.meta.id && this.framesById[frame.meta.id]) {
      throw new Error(`Frame with id "${frame.meta.id}" already defined`)
    }

    // add to id list
    if (frame.meta.id) {
      this.framesById[frame.meta.id] = frame
    }

    this.frames.push(frame)
    this._refreshTimeline()
    return this
  }

  loop(toggle = true){
    this._loop = toggle
    return this
  }

  _refreshTimeline() {
    this.timeline = createTimeline(this._schema, this.frames)
    return this
  }

  getFrame(id) {
    const frame = this.framesById[id]

    return frame
  }

  at(time) {
    if (this._loop){
      time = time % this.duration
    }

    let state
    if (time >= this.duration) {
      const m = this.timeline[this.timeline.length - 1]

      state = cloneDeep(m.state)
    } else {

      const transitions = getTransitionsAtTime(this.timeline, time)
      const startState = getStartState(this.timeline, time, this._startingState)

      state = reduceTransitions(this._schema, transitions, time, startState)
    }

    if (this._timeLabel){
      if (state[this._timeLabel] !== undefined){
        throw new Error(`State already has a property that would be overriden by time variable "${this._timeLabel}"`)
      }
      state[this._timeLabel] = time
    }

    return state
  }

  getTransitions(time) {
    time = time || this.time
    return getTransitionsAtTime(this.timeline, time)
  }
}
