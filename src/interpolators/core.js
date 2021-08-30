import { lerp, mapProperties, shortestModDist } from '@/util'
import { makeToggle, makeForArray } from './factories'

const Pi2 = Math.PI * 2

export const linear = (from, to, t) => lerp(from, to, t)
export const radians = (from, to, t) => from + shortestModDist(from, to, Pi2) * t
export const degrees = (from, to, t) => from + shortestModDist(from, to, 360) * t
export const array = makeForArray(lerp)
export const object = (from, to, t) =>
  mapProperties(from, (val, key) =>
    lerp(val, to[key], t)
  )

export const string = (from, to, t) => {
  if (t <= 0) { return from }

  const length = lerp(0, to.length, t) | 0 // to integer

  return to.substr(0, length)
}

export const toggle = makeToggle(1)
