export * from './callable'
export * from './emitter'
export const identity = a => a

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

// clamp
export const clamp = function( min, max, v ){
  return Math.min(Math.max(v, min), max)
}

export const filterObjectValues = function( obj, fn ){
  return Object.keys(obj).reduce((ret, key) => {
    const value = obj[key]
    if (fn(value, key)){
      ret[key] = value
    }
    return ret
  }, {})
}

export const sanitizedObject = function( obj ){
  return filterObjectValues(obj, v => v !== undefined)
}

export const mapProperties = function( obj, fn ){
  return Object.keys( obj ).reduce( (ret, key) => {
    ret[key] = fn(obj[key], key)
    return ret
  }, {} )
}

export const pick = function( obj, keys = [] ){
  if ( !keys ){
    // all
    return { ...obj }
  }
  return keys.reduce( (out, k) => {
    out[k] = obj[k]
    return out
  }, {})
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

export const getIntersectingPaths = function ( o1, o2 ){
  return Object.keys(o1).filter(
    Object.prototype.hasOwnProperty.bind( o2 )
  )
}

export const pull = function (arr, o){
  const idx = arr.indexOf(o)
  arr.splice(idx, 1)
  return arr
}
