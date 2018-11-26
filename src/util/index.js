const util = {}

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

export default util
