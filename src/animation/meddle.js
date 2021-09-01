import { pick, invLerpClamped } from '@/util'
import { map, merge, Subject } from '@/rx'
import { getInterpolatedState } from '@/transition'
import { parseTime } from '@/parsers/time'
import { parseEasing } from '@/parsers/easing'
import { TweenOperator } from './tween-operator'

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
    this.options = options
    this.lastTime = 0
    // reset
    this.defaults()
    this.clear()
  }

  get options(){
    return this._options
  }

  set options(o){
    this._options = Object.assign({}, DEFAULT_OPTIONS, o)
    this.defaults()
  }

  // toggle freezing of meddle states
  freeze(toggle = true) {
    this.frozen = toggle
    return this
  }

  relaxDelay(time){
    this._relaxDelay = parseTime(
      time === undefined ?
        this.options.relaxDelay :
        time
    )
    return this
  }

  relaxDuration(time) {
    this._relaxDuration = parseTime(
      time === undefined ?
        this.options.relaxDuration :
        time
    )
    return this
  }

  easing(e){
    this._easing = parseEasing(
      e === undefined ?
        this.options.easing :
        e
    )
    return this
  }

  // Use the default timing/easing set at construction
  defaults(){
    this.relaxDelay()
    this.relaxDuration()
    this.easing()
    return this
  }

  // toggle user meddling
  set(meddleState) {
    this.state = { ...this.state, ...meddleState }

    this.started = false
    this.startTime = false
    this.relaxState = null
    this.active = true

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

  at(time) {
    this.lastTime = time

    // check meddling
    if (!this.active || this.frozen) {
      return Object.assign({}, this.state)
    }

    if (!this.started) {
      this.startTime = time
      this.started = true
      this.endTime = this.startTime + this._relaxDelay + this._relaxDuration
      this.relaxState = pick(
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

    const timeFraction = invLerpClamped(
      this.startTime + this._relaxDelay
      , this.endTime
      , time
    )

    const meddleTransitionState = getInterpolatedState(
      this._tween._schema
      , this.state
      , this.relaxState
      , timeFraction
      , this._easing
    )

    return meddleTransitionState
  }

  __call__(source) {
    return map(t => this.at(t))(merge(this._subject, source))
  }
}
