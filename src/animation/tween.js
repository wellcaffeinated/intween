import { createSchema, createState } from '@/schema'
import { createFrame } from '@/frame'
import { parseTime } from '@/parsers/time'
import {
  getTransitionsAtTime
  , createTimeline
  , reduceTransitions
  , getStartState
} from '@/timeline'
import { TweenOperator } from './tween-operator'

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

    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
    this._refreshTimeline()
  }

  get duration() {
    return this.timeline[this.timeline.length - 1]?.time || 0
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

  _refreshTimeline() {
    this.timeline = createTimeline(this._schema, this.frames)
    return this
  }

  getFrame(id) {
    const frame = this.framesById[id]

    return frame
  }

  at(time) {
    if (time >= this.duration) {
      const m = this.timeline[this.timeline.length - 1]

      return { ...m.state }
    }

    const transitions = getTransitionsAtTime(this.timeline, time)
    const startState = getStartState(this.timeline, time, this._startingState)

    return reduceTransitions(this._schema, transitions, time, startState)
  }

  getTransitions(time) {
    time = time || this.time
    return getTransitionsAtTime(this.timeline, time)
  }
}
