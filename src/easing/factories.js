/**
 * Easing adapted from phaser
 * https://github.com/photonstorm/phaser/tree/master/src/math/easing
 * license: https://opensource.org/licenses/MIT
 */

const Pi2 = Math.PI * 2

/*
 * @param {number} [amplitude=0.1] - The amplitude of the elastic ease.
 * @param { number } [period = 0.1] - Sets how tight the sine - wave is,
 * where smaller values are tighter waves, which result in more cycles.
 */
export const makeElasticIn = (a = 0.1, p = 0.1) => {
  let s = p / 4

  if (a < 1) {
    a = 1
  } else {
    s = p * Math.asin(1 / a) / Pi2
  }

  const w = Pi2 / p

  return t => {
    if (t === 0) return 0
    if (t === 1) return 1
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * w))
  }
}

/*
 * @param {number} [amplitude=0.1] - The amplitude of the elastic ease.
 * @param { number } [period = 0.1] - Sets how tight the sine - wave is,
 * where smaller values are tighter waves, which result in more cycles.
 */
export const makeElasticOut = (a = 0.1, p = 0.1) => {
  let s = p / 4

  if (a < 1) {
    a = 1
  } else {
    s = p * Math.asin(1 / a) / Pi2
  }

  const w = Pi2 / p

  return t => {
    if (t === 0) return 0
    if (t === 1) return 1
    return (a * Math.pow(2, -10 * t) * Math.sin((t - s) * w) + 1)
  }
}

/*
 * @param {number} [amplitude=0.1] - The amplitude of the elastic ease.
 * @param { number } [period = 0.1] - Sets how tight the sine - wave is,
 * where smaller values are tighter waves, which result in more cycles.
 */
export const makeElasticInOut = (a = 0.1, p = 0.1) => {
  let s = p / 4

  if (a < 1) {
    a = 1
  } else {
    s = p * Math.asin(1 / a) / Pi2
  }

  const w = Pi2 / p

  return t => {
    if (t === 0) return 0
    if (t === 1) return 1
    if ((t *= 2) < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * w))
    } else {
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * w) * 0.5 + 1
    }
  }
}

export const makeBackIn = (overshoot = 1.70158) => t =>
  t * t * ((overshoot + 1) * t - overshoot)

export const makeBackOut = (overshoot = 1.70158) => t =>
  --t * t * ((overshoot + 1) * t + overshoot) + 1

export const makeBackInOut = (overshoot = 1.70158) => t => {
  const s = overshoot * 1.525;

  if ((t *= 2) < 1) {
    return 0.5 * (t * t * ((s + 1) * t - s))
  } else {
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2)
  }
}

export const makeSteps = (steps = 1) => t => (((steps * t) | 0) + 1) * (1 / steps)
