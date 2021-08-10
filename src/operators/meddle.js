import * as util from '@/util'
import { map, merge } from '@/rx'
import { getTimeFraction, getInterpolatedState } from '@/transition'
import { parseTime } from '@/parsers/time'
import { parseEasing } from '@/parsers/easing'
import { TweenOperator } from './tween-operator'
import { Subject } from '../rx'

const DEFAULT_OPTIONS = {
  relaxDuration: 500
  , relaxDelay: 1000
  , easing: 'linear'
}

export class Meddle extends TweenOperator {
  static create(tween, options){
    return new Meddle(tween, options)
  }

  constructor(tween, options) {
    super()

    this._subject = new Subject()
    this._tween = tween
    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
    this.lastTime = 0
    // reset
    this.clear()
  }

  // toggle user meddling
  set(meddleState, meddleOpts = {}) {
    let { relaxDuration, relaxDelay, freeze, easing } = meddleOpts

    relaxDelay = parseTime(relaxDelay !== undefined ? relaxDelay : this.options.relaxDelay)
    relaxDuration = parseTime(relaxDuration !== undefined ? relaxDuration : this.options.relaxDuration)

    this.state = { ...this.state, ...meddleState }

    this.started = false
    this.startTime = false
    this.relaxState = null
    this.active = true
    this.relaxDelay = relaxDelay
    this.relaxDuration = relaxDuration
    this.easing = parseEasing(easing || this.options.easing)

    if (freeze !== undefined){
      this.freeze(freeze)
    }

    this._subject.next(this.lastTime)
    return this
  }

  // force meddling to reset
  clear() {
    this.state = {}
    this.started = false
    this.active = false
    this.frozen = false
    this.startTime = false
    this.lastTime = 0
    return this
  }

  // toggle freezing of meddle states
  freeze(toggle = true) {
    this.frozen = toggle
    return this
  }

  at(time) {
    this.lastTime = time

    // check meddling
    if (!this.active || this.frozen) {
      return Object.assign({}, this.state)
    }

    if (!this.started) {
      this.startTime = time
      this.started = true
      this.endTime = this.startTime + this.relaxDelay + this.relaxDuration
      this.relaxState = util.pick(
        this._tween.at(this.endTime)
        , Object.keys(this.state)
      )
    }

    if (this.startTime === time){
      return Object.assign({}, this.state)
    }

    if (time >= this.endTime || time < this.startTime) {
      // meddling is over
      this.clear()
    }

    if (time > this.totalTime) {
      // this will force a reset when the timeline is re-entered
      this.clear()
    }

    const timeFraction = getTimeFraction(
      this.startTime + this.relaxDelay
      , this.endTime
      , time
    )

    const meddleTransitionState = getInterpolatedState(
      this._tween._schema
      , this.state
      , this.relaxState
      , timeFraction
      , this.easing
    )

    return meddleTransitionState
  }

  __call__(source) {
    return map(t => this.at(t))(merge(this._subject, source))
  }
}

export default (tween, options) => {
  return Meddle.create(tween, options)
}
