import { lerp, mapProperties, shortestModDist } from '@/util'
import { makeToggle } from './factories'

const Pi2 = Math.PI * 2

export const linear = (from, to, t) => lerp(from, to, t)
export const angle = (from, to, t) => from + shortestModDist(from, to, Pi2) * t
export const array = (from, to, t) => to.map((v1, idx) => lerp(from[idx] || 0, v1 || 0, t))
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
