import { shortestModDist } from '@/util'

export const makeToggle = threshold => (from, to, t) => (t >= threshold) ? to : from
export const makeCyclic = len => (from, to, t) => from + shortestModDist(from, to, len) * t
