const util = {}
const identity = a => a

// From js - https://github.com/tweenjs/tween.js/blob/master/src/Tween.js
// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof (window) === 'undefined' && typeof (process) !== 'undefined') {
  util.now = function now() {
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
  util.now = window.performance.now.bind(window.performance)
} else if (Date.now !== undefined) {
  // Use Date.now if it is available.
  util.now = Date.now
} else {
  // Otherwise, use 'new Date().getTime()'.
  util.now = function now() {
    return new Date().getTime()
  }
}

util.castArray = function( thing ){
  return Array.isArray(thing) ? thing : [thing]
}

util.lerp = function( from, to, t ){
  return from * ( 1 - t ) + to * t
}

// clamp
util.clamp = function( min, max, v ){
  return Math.min(Math.max(v, min), max)
}

util.mapProperties = function( obj, fn ){
  return Object.keys( obj ).reduce( (ret, val, key) => {
    ret[key] = fn(val, key)
    return ret
  }, {} )
}

util.pick = function( obj, keys = [] ){
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
util.mergeIntersecting = function( first, second ){
  return {
    ...first
    , ...util.pick(
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
 *
 * Implementation of [lodash.sortedIndex](http://lodash.com/docs#sortedIndex).
 **/
util.sortedIndex = function( array, value, callback ) {
  let low = 0
  let high = array ? array.length : low

  // explicitly reference `identity` for better inlining in Firefox
  callback = callback || identity
  value = callback(value)

  while (low < high) {
    let mid

    mid = (low + high) >>> 1
    if ( callback(array[mid]) < value ){
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

util.getIntersectingPaths = function ( o1, o2 ){
  return Object.keys(o1).filter(
    Object.prototype.hasOwnProperty.bind( o2 )
  )
}

export default util
