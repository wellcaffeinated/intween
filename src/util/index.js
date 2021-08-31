export * from './callable'
export * from './emitter'
export const identity = a => a

const toString = Object.prototype.toString
export const typeName = v => toString.call(v).slice(8, -1)

// From js - https://github.com/tweenjs/tween.js/blob/master/src/Tween.js
// Include a performance.now polyfill.
// In node.js, use process.hrtime.
export const now = (() => {
  if (typeof (window) === 'undefined' && typeof (process) !== 'undefined') {
    return function now() {
      var time = process.hrtime()

      // Convert [seconds, nanoseconds] to milliseconds.
      return time[0] * 1000 + time[1] / 1000000
    }
  } else if (typeof (window) !== 'undefined' &&
      window.performance !== undefined &&
      window.performance.now !== undefined ) {
    // In a browser, use window.performance.now if it is available.
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    return window.performance.now.bind(window.performance)
  } else if (Date.now !== undefined) {
    // Use Date.now if it is available.
    return Date.now
  } else {
    // Otherwise, use 'new Date().getTime()'.
    return function now() {
      return new Date().getTime()
    }
  }
})()

export const castArray = function( thing ){
  return Array.isArray(thing) ? thing : [thing]
}

export const lerp = function( from, to, t ){
  return from * ( 1 - t ) + to * t
}

export const invLerp = function( from, to, x ){
  const diff = to - from
  return diff ? (x - from) / diff : 1
}

export const clamp = function( min, max, v ){
  return Math.min(Math.max(v, min), max)
}

export const lerpClamped = function( from, to, t ){
  return lerp(from, to, clamp(0, 1, t))
}

export const invLerpClamped = function( from, to, x ){
  return clamp(0, 1, invLerp(from, to, x))
}

export const cloneDeep = obj => {
  if (typeof obj === 'function') { return obj }
  const out = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    const value = obj[key]
    const type = typeName(value)
    if (type === 'Array' || type === 'Object') {
      out[key] = cloneDeep(value)
    } else if (type === 'Date') {
      out[key] = new Date(value.getTime())
    } else {
      out[key] = value
    }
  }
  return out
}

export const filterObjectValues = function( obj, fn ){
  const out = {}
  for (const key in obj){
    const value = obj[key]
    if (fn(value, key)) {
      out[key] = value
    }
  }
  return out
}

export const sanitizedObject = function( obj ){
  return filterObjectValues(obj, v => v !== undefined)
}

export const mapProperties = function( obj, fn ){
  const out = {}
  for (const key in obj){
    out[key] = fn(obj[key], key)
  }
  return out
}

export const pick = function( obj, keys = [] ){
  if ( !keys ){
    // all
    return { ...obj }
  }
  const out = {}
  for (const key of keys){
    out[key] = obj[key]
  }
  return out
}

// Only take properties that are present in
// first object
// ---------------------------------------
export const mergeIntersecting = function( first, second ){
  return {
    ...first
    , ...pick(
      second
      , Object.keys(first)
    )
  }
}

/**
 * util.sortedIndex( array, value[, callback] ) -> Number
 * - array (Array): The array to inspect
 * - value (Mixed): The value to evaluate
 * - callback (Function): Function called per iteration
 * - retHighest (Boolean): Specify returning the highest qualified index
 *
 * Implementation of [lodash.sortedIndex](http://lodash.com/docs#sortedIndex).
 **/
export const sortedIndex = function( array, value, callback, retHighest ) {
  let low = 0
  let high = array ? array.length : low

  // explicitly reference `identity` for better inlining in Firefox
  callback = callback || identity
  value = callback(value)

  while (low < high) {
    const mid = (low + high) >>> 1
    const computed = callback(array[mid])

    if ( retHighest ? (computed <= value) : (computed < value) ){
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

export const getIntersectingPaths = function( o1, o2 ){
  return Object.keys(o1).filter(
    Object.prototype.hasOwnProperty.bind( o2 )
  )
}

export const pull = function(arr, o){
  const idx = arr.indexOf(o)
  arr.splice(idx, 1)
  return arr
}

export function shortestModDist(a0, a1, modulo) {
  const da = a1 - a0
  const frac = da / modulo
  const cycles = Math.floor(frac)
  const d = frac - cycles
  const fix = d > 0.5 ? -1 : d < -0.5 ? 1 : 0
  return (d + fix + cycles) * modulo
}
