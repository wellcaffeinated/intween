/**
 * Easing adapted from phaser
 * https://github.com/photonstorm/phaser/tree/master/src/math/easing
 * license: https://opensource.org/licenses/MIT
 */

import {
  makeElasticIn,
  makeElasticOut,
  makeElasticInOut,
  makeBackIn,
  makeBackOut,
  makeBackInOut,
  makeSteps
} from './factories'

const halfPi = Math.PI / 2

export const linear = t => t
export const quadIn = t => t * t
export const quadOut = t => t * (2 - t)
export const quadInOut = t => ((t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1))
export const cubicIn = t => t * t * t
export const cubicOut = t => --t * t * t + 1
export const cubicInOut = t =>
  (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)
export const quartIn = t => t * t * t * t
export const quartOut = t => 1 - (--t * t * t * t)
export const quartInOut = t =>
  (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
export const quintIn = t => t * t * t * t * t
export const quintOut = t => --t * t * t * t * t + 1
export const quintInOut = t =>
  (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2)
export const sinIn = t => 1 - Math.cos(t * halfPi)
export const sinOut = t => Math.sin(t * halfPi)
export const sinInOut = t => 0.5 * (1 - Math.cos(Math.PI * t))
export const expIn = t => t === 0 ? 0 : Math.pow(1024, t - 1)
export const expOut = t => t === 0 ? 0 : 1 - Math.pow(1024, -t)
export const expInOut = t => {
  if (t === 0) return 0
  if (t === 1) return 1
  if ((t *= 2) < 1) return 0.5 * Math.pow(1024, t - 1)
  return 0.5 * (2 - Math.pow(1024, 1 - t))
}

export const elasticIn = makeElasticIn()
export const elasticOut = makeElasticOut()
export const elasticInOut = makeElasticInOut()

export const circularIn = t => 1 - Math.sqrt(1 - t * t)
export const circularOut = t => Math.sqrt(1 - (--t * t))
export const circularInOut = t =>
  (t *= 2) < 1 ?
    -0.5 * (Math.sqrt(1 - t * t) - 1) :
    0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)

export const bounceIn = t => {
  t = 1 - t
  if (t < 1 / 2.75) return 1 - (7.5625 * t * t)
  else if (t < 2 / 2.75) return 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
  else if (t < 2.5 / 2.75) return 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
  else return 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)
}

export const bounceOut = t => {
  if (t < 1 / 2.75) return 7.5625 * t * t
  else if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
  else if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
  else return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
}

export const bounceInOut = t => {
  let reverse = false
  if (t < 0.5) {
    t = 1 - (t * 2)
    reverse = true
  } else {
    t = (t * 2) - 1
  }

  if (t < 1 / 2.75) {
    t = 7.5625 * t * t
  } else if (t < 2 / 2.75) {
    t = 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
  } else if (t < 2.5 / 2.75) {
    t = 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
  } else {
    t = 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
  }

  if (reverse) {
    return (1 - t) * 0.5
  } else {
    return t * 0.5 + 0.5
  }
}

export const backIn = makeBackIn()
export const backOut = makeBackOut()
export const backInOut = makeBackInOut()

export const step = makeSteps()
