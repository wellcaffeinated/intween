import { shortestModDist } from '../util/index.js'

export const makeToggle = threshold => (from, to, t) => (t >= threshold) ? to : from
export const makeCyclic = len => (from, to, t) => from + shortestModDist(from, to, len) * t
export const makeForArray = interp =>
  (from, to, t) => to.map((toVal, idx) => interp(from[idx], toVal, t))
