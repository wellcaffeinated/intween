import { lerp, mapProperties } from '@/util'

const Pi2 = Math.PI * 2

function shortestModDist( a0, a1, modulo ) {
  // let moduloBy2 = 0.5 * modulo
  const da = (a1 - a0) % modulo

  return (da - modulo) % modulo
}

export const linear = (from, to, t) => lerp(from, to, t)
export const makeCyclic = len => (from, to, t) => from + shortestModDist(from, to, len) * t
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

export const makeToggle = threshold => (from, to, t) => (t > threshold) ? to : from
export const toggle = makeToggle(0.5)
