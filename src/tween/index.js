import { Callable } from '@/util'
import { map } from '@/rx'
import { createSchema, createState } from '@/schema'
import { createFrame } from '@/frame'
import { timeParser } from '@/parsers/time'
import {
  getTransitionsAtTime
  , createTimeline
  , reduceTransitions
  , getStartState
} from '@/timeline'

export class TweenOperator extends Callable {
  at(t) {
    return t
  }

  __call__(source) {
    return map(t => this.at(t))(source)
  }
}

const DEFAULT_OPTIONS = {
  tweenDuration: '100%'
}

export class Tween extends TweenOperator {
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

  // add a frame
  to(time, state, duration) {
    const argLen = arguments.length
    const meta = {}
    if (argLen === 1){
      state = time
      meta.startTime = this.duration
    } else if (typeof time === 'object'){
      meta.duration = state
      meta.startTime = this.duration
      state = time
    } else {
      meta.time = time
      meta.duration = duration
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
    time = timeParser(time)
    if (time >= this.duration) {
      const m = this.timeline[this.timeline.length - 1]
      const t = m.transition

      return { ...m.state, ...t.relaxState }
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

export default function(schema, options){
  return new Tween(schema, options)
}
