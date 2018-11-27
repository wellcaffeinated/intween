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

// clamp
util.clamp = function( min, max, v ){
  return Math.min(Math.max(v, min), max)
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

export default util
