(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Frames", [], factory);
	else if(typeof exports === 'object')
		exports["Frames"] = factory();
	else
		root["Frames"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/easing-functions/index.js":
/*!************************************************!*\
  !*** ./node_modules/easing-functions/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* A collection of easing methods defining ease-in ease-out curves.
*
* @class Easing
*/
var Easing = module.exports = {

    /**
    * Linear easing.
    *
    * @class Easing.Linear
    */
    Linear: {

        /**
        * Ease-in.
        *
        * @method Easing.Linear#In
        * @param {number} k - The value to be tweened.
        * @returns {number} k^2.
        */
        None: function ( k ) {

            return k;

        }

    },

    /**
    * Quadratic easing.
    *
    * @class Easing.Quadratic
    */
    Quadratic: {

        /**
        * Ease-in.
        *
        * @method Easing.Quadratic#In
        * @param {number} k - The value to be tweened.
        * @returns {number} k^2.
        */
        In: function ( k ) {

            return k * k;

        },

        /**
        * Ease-out.
        *
        * @method Easing.Quadratic#Out
        * @param {number} k - The value to be tweened.
        * @returns {number} k* (2-k).
        */
        Out: function ( k ) {

            return k * ( 2 - k );

        },

        /**
        * Ease-in/out.
        *
        * @method Easing.Quadratic#InOut
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        InOut: function ( k ) {

            if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
            return - 0.5 * ( --k * ( k - 2 ) - 1 );

        }

    },

    /**
    * Cubic easing.
    *
    * @class Easing.Cubic
    */
    Cubic: {

        /**
        * Cubic ease-in.
        *
        * @method Easing.Cubic#In
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        In: function ( k ) {

            return k * k * k;

        },

        /**
        * Cubic ease-out.
        *
        * @method Easing.Cubic#Out
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        Out: function ( k ) {

            return --k * k * k + 1;

        },

        /**
        * Cubic ease-in/out.
        *
        * @method Easing.Cubic#InOut
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        InOut: function ( k ) {

            if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
            return 0.5 * ( ( k -= 2 ) * k * k + 2 );

        }

    },

    /**
    * Quartic easing.
    *
    * @class Easing.Quartic
    */
    Quartic: {

        /**
        * Quartic ease-in.
        *
        * @method Easing.Quartic#In
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        In: function ( k ) {

            return k * k * k * k;

        },

        /**
        * Quartic ease-out.
        *
        * @method Easing.Quartic#Out
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        Out: function ( k ) {

            return 1 - ( --k * k * k * k );

        },

        /**
        * Quartic ease-in/out.
        *
        * @method Easing.Quartic#InOut
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        InOut: function ( k ) {

            if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
            return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );

        }

    },

    /**
    * Quintic easing.
    *
    * @class Easing.Quintic
    */
    Quintic: {

        /**
        * Quintic ease-in.
        *
        * @method Easing.Quintic#In
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        In: function ( k ) {

            return k * k * k * k * k;

        },

        /**
        * Quintic ease-out.
        *
        * @method Easing.Quintic#Out
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        Out: function ( k ) {

            return --k * k * k * k * k + 1;

        },

        /**
        * Quintic ease-in/out.
        *
        * @method Easing.Quintic#InOut
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        InOut: function ( k ) {

            if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
            return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

        }

    },

    /**
    * Sinusoidal easing.
    *
    * @class Easing.Sinusoidal
    */
    Sinusoidal: {

        /**
        * Sinusoidal ease-in.
        *
        * @method Easing.Sinusoidal#In
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        In: function ( k ) {

            return 1 - Math.cos( k * Math.PI / 2 );

        },

        /**
        * Sinusoidal ease-out.
        *
        * @method Easing.Sinusoidal#Out
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        Out: function ( k ) {

            return Math.sin( k * Math.PI / 2 );

        },

        /**
        * Sinusoidal ease-in/out.
        *
        * @method Easing.Sinusoidal#InOut
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        InOut: function ( k ) {

            return 0.5 * ( 1 - Math.cos( Math.PI * k ) );

        }

    },

    /**
    * Exponential easing.
    *
    * @class Easing.Exponential
    */
    Exponential: {

        /**
        * Exponential ease-in.
        *
        * @method Easing.Exponential#In
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        In: function ( k ) {

            return k === 0 ? 0 : Math.pow( 1024, k - 1 );

        },

        /**
        * Exponential ease-out.
        *
        * @method Easing.Exponential#Out
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        Out: function ( k ) {

            return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );

        },

        /**
        * Exponential ease-in/out.
        *
        * @method Easing.Exponential#InOut
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        InOut: function ( k ) {

            if ( k === 0 ) return 0;
            if ( k === 1 ) return 1;
            if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
            return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );

        }

    },

    /**
    * Circular easing.
    *
    * @class Easing.Circular
    */
    Circular: {

        /**
        * Circular ease-in.
        *
        * @method Easing.Circular#In
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        In: function ( k ) {

            return 1 - Math.sqrt( 1 - k * k );

        },

        /**
        * Circular ease-out.
        *
        * @method Easing.Circular#Out
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        Out: function ( k ) {

            return Math.sqrt( 1 - ( --k * k ) );

        },

        /**
        * Circular ease-in/out.
        *
        * @method Easing.Circular#InOut
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        InOut: function ( k ) {

            if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
            return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);

        }

    },

    /**
    * Elastic easing.
    *
    * @class Easing.Elastic
    */
    Elastic: {

        /**
        * Elastic ease-in.
        *
        * @method Easing.Elastic#In
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        In: function ( k ) {

            var s, a = 0.1, p = 0.4;
            if ( k === 0 ) return 0;
            if ( k === 1 ) return 1;
            if ( !a || a < 1 ) { a = 1; s = p / 4; }
            else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
            return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );

        },

        /**
        * Elastic ease-out.
        *
        * @method Easing.Elastic#Out
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        Out: function ( k ) {

            var s, a = 0.1, p = 0.4;
            if ( k === 0 ) return 0;
            if ( k === 1 ) return 1;
            if ( !a || a < 1 ) { a = 1; s = p / 4; }
            else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
            return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

        },

        /**
        * Elastic ease-in/out.
        *
        * @method Easing.Elastic#InOut
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        InOut: function ( k ) {

            var s, a = 0.1, p = 0.4;
            if ( k === 0 ) return 0;
            if ( k === 1 ) return 1;
            if ( !a || a < 1 ) { a = 1; s = p / 4; }
            else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
            if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
            return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;

        }

    },

    /**
    * Back easing.
    *
    * @class Easing.Back
    */
    Back: {

        /**
        * Back ease-in.
        *
        * @method Easing.Back#In
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        In: function ( k ) {

            var s = 1.70158;
            return k * k * ( ( s + 1 ) * k - s );

        },

        /**
        * Back ease-out.
        *
        * @method Easing.Back#Out
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        Out: function ( k ) {

            var s = 1.70158;
            return --k * k * ( ( s + 1 ) * k + s ) + 1;

        },

        /**
        * Back ease-in/out.
        *
        * @method Easing.Back#InOut
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        InOut: function ( k ) {

            var s = 1.70158 * 1.525;
            if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
            return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

        }

    },

    /**
    * Bounce easing.
    *
    * @class Easing.Bounce
    */
    Bounce: {

        /**
        * Bounce ease-in.
        *
        * @method Easing.Bounce#In
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        In: function ( k ) {

            return 1 - Easing.Bounce.Out( 1 - k );

        },

        /**
        * Bounce ease-out.
        *
        * @method Easing.Bounce#Out
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        Out: function ( k ) {

            if ( k < ( 1 / 2.75 ) ) {

                return 7.5625 * k * k;

            } else if ( k < ( 2 / 2.75 ) ) {

                return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

            } else if ( k < ( 2.5 / 2.75 ) ) {

                return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

            } else {

                return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

            }

        },

        /**
        * Bounce ease-in/out.
        *
        * @method Easing.Bounce#InOut
        * @param {number} k - The value to be tweened.
        * @returns {number} The tweened value.
        */
        InOut: function ( k ) {

            if ( k < 0.5 ) return Easing.Bounce.In( k * 2 ) * 0.5;
            return Easing.Bounce.Out( k * 2 - 1 ) * 0.5 + 0.5;

        }

    }

};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _manager = _interopRequireDefault(__webpack_require__(/*! ./manager */ "./src/manager.js"));

var _easingFunctions = _interopRequireDefault(__webpack_require__(/*! easing-functions */ "./node_modules/easing-functions/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Frames = function Frames(schema, meta) {
  return new _manager.default(schema, meta);
};

Frames.Easing = _easingFunctions.default;
var _default = Frames;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/interpolators.js":
/*!******************************!*\
  !*** ./src/interpolators.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Interpolators = {
  Linear: function Linear(from, to, t) {
    return from * (1 - t) + to * t;
  },
  Array: function Array(from, to, t) {
    return to.map(function (v1, idx) {
      return Interpolators.Linear(from[idx], v1, t);
    });
  }
};
var _default = Interpolators;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/manager.js":
/*!************************!*\
  !*** ./src/manager.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = _interopRequireDefault(__webpack_require__(/*! @/util */ "./src/util/index.js"));

var _schema = __webpack_require__(/*! @/schema */ "./src/schema.js");

var _transition = __webpack_require__(/*! @/transition */ "./src/transition.js");

var _time = __webpack_require__(/*! @/parsers/time */ "./src/parsers/time.js");

var _transition2 = __webpack_require__(/*! @/parsers/transition */ "./src/parsers/transition.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_FRAME_META = {
  time: 0
};
var META_PARSERS = {
  time: _time.timeParser,
  transition: _transition2.transitionParser,
  duration: _time.timeParser
};
var DEFAULT_OPTIONS = {
  playbackRate: 1,
  defaultTransitionDuration: 1000,
  meddleTimeout: 2000,
  meddleDuration: 500 // sorted add by time index

};

function addByTime(arr, obj) {
  var idx = 0;

  while (idx < arr.length) {
    if (arr[0].time >= obj.time) {
      // insert at idx
      arr.splice(idx, 0, obj);
      return arr;
    }

    idx++;
  }

  arr.push(obj);
  return arr;
} // parse meta to standardized format


function parseMeta(meta, defaults) {
  var ret = { ...defaults,
    ...meta
  }; // clone

  for (var key in META_PARSERS) {
    ret[key] = META_PARSERS[key](ret[key]);
  }

  return ret;
}

var _class =
/*#__PURE__*/
function () {
  function _class(schema, options) {
    _classCallCheck(this, _class);

    this.time = 0;
    this.framesById = {};
    this.frames = [];
    this._schema = (0, _schema.createSchema)(schema);
    this._state = {};
    this._meddle = {
      state: {}
    };
    this._defaultFrame = {
      state: (0, _schema.createState)(this._schema),
      meta: parseMeta({})
    };
    this._targetState = null;
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
  }

  _createClass(_class, [{
    key: "add",
    // add a frame
    value: function add(state, meta) {
      if (!state) {
        return this;
      }

      if (!meta) {
        meta = state.$meta || { ...DEFAULT_FRAME_META
        };
      }

      meta = parseMeta(meta, {
        duration: this.options.defaultTransitionDuration
      }); // TODO check transition duration doesn't overlap with previous state
      // if it does: warn, and set to max allowable transition time

      if (meta.id && this.framesById[meta.id]) {
        throw new Error("Frame with id \"".concat(meta.id, "\" already defined"));
      } // inherit from previous state


      state = { ...this.getPrevFrame(meta.time).state,
        ...state
      };

      if (meta.inherit) {
        var from = this.getFrame(meta.inherit);
        state = { ...from.state,
          ...state
        }; // cleanup

        delete state.$meta;
      }

      var frame = {
        state: state,
        meta: meta // add to id list

      };

      if (meta.id) {
        this.framesById[meta.id] = frame;
      } // add in order


      addByTime(this.frames, frame);
      return this;
    } // toggle user meddling

  }, {
    key: "meddle",
    value: function meddle(meddleState) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          duration = _ref.duration,
          timeout = _ref.timeout,
          force = _ref.force;

      duration = duration || this.options.meddleDuration;
      timeout = timeout || this.options.meddleTimeout;
      this._meddle.state = { ...this._meddle.state,
        ...meddleState
      };
      this._meddle.active = true;
      this._meddle.isFinite = true;
      this._meddle.endState = null;
      this._meddle.duration = duration;

      if (force === true) {
        // perpetual
        this._meddle.isFinite = false;
      } else if (force === false) {
        this._meddle.time = _util.default.now() + duration;
      } else {
        this._meddle.time = _util.default.now() + duration + timeout;
      }
    }
  }, {
    key: "getFrame",
    value: function getFrame(id) {
      var frame = this.framesById[id];

      if (!frame) {
        throw new Error("No frame with id \"".concat(id, "\" exists to be inherited"));
      }

      return frame;
    }
  }, {
    key: "seek",
    value: function seek(timeOrId) {
      if (typeof timeOrId === 'string') {
        var frame = this.getFrame(timeOrId);
        return this.seek(frame.meta.time);
      }

      this.time = timeOrId;
      var bounds = this.getBoundingFrames();
      var state = (0, _transition.interpolateBetweenFrames)(this._schema, bounds.prev, bounds.next, this.time); // check meddling

      if (this._meddle.active) {
        if (this._meddle.time !== undefined && this.time > this._meddle.time) {
          // meddling is over
          this._meddle = {
            state: {}
          };
        }

        if (this._meddle.isFinite && this.time > this._meddle.time - this._meddle.duration) {
          if (!this._meddle.endState) {
            this._meddle.endState = (0, _transition.interpolateBetweenFrames)(this._schema, bounds.prev, bounds.next, this._meddle.time);
          }

          var timeFraction = (0, _transition.getTimeFraction)(this._meddle.time, this._meddle.duration, this.time);
          var meddleTransitionState = (0, _transition.getInterpolatedState)(this._schema, this._meddle.state, this._meddle.endState, timeFraction);
          Object.assign(state, meddleTransitionState);
        } else {
          Object.assign(state, this._meddle.state);
        }
      } // set state


      this._state = state;
      return this;
    }
  }, {
    key: "to",
    value: function to(timeOrId) {// transition to time, or frame id
    }
  }, {
    key: "step",
    value: function step() {
      var now = _util.default.now();

      var clockTime = this._clockTime || now;
      var playbackRate = this.options.playbackRate;
      var dt = now - clockTime;
      var time = this.time;
      this._clockTime = now; // if it's paused, don't step

      if (this.paused) {
        return this;
      }

      time += dt * playbackRate;
      this.seek(time);
      return this;
    }
  }, {
    key: "next",
    value: function next() {// transition like slideshow
    }
  }, {
    key: "back",
    value: function back() {// transition back like slideshow
    }
  }, {
    key: "getNextFrame",
    value: function getNextFrame(time) {
      return this.getBoundingFrames(time).next;
    }
  }, {
    key: "getPrevFrame",
    value: function getPrevFrame(time) {
      return this.getBoundingFrames(time).prev;
    }
  }, {
    key: "getBoundingFrames",
    value: function getBoundingFrames(time) {
      time = time || this.time;
      var next = null;
      var prev = null;

      for (var i = 0, l = this.frames.length; i < l; i++) {
        next = this.frames[i];

        if (next.meta.time > time) {
          break;
        }

        prev = next;
      }

      if (prev === next) {
        next = null;
      }

      if (!prev) {
        prev = this._defaultFrame;
      }

      return {
        prev: prev,
        next: next
      };
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
  }]);

  return _class;
}();

exports.default = _class;
module.exports = exports.default;

/***/ }),

/***/ "./src/parsers/time.js":
/*!*****************************!*\
  !*** ./src/parsers/time.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeParser = timeParser;
var timeDecReg = /([0-9.]+)(s|m|h)?/;
var timeStdReg = /((\d\d):)?((\d\d):(\d\d))/;
var MINUTES = 60;
var HOURS = 60 * 60;

function getTime(h, m, s) {
  h = parseFloat(h || 0);
  m = parseFloat(m || 0);
  s = parseFloat(s || 0);
  return Math.round((h * HOURS + m * MINUTES + s) * 1000); // integer
} // returns parsed time in ms


function timeParser(strOrNumber) {
  if (typeof strOrNumber !== 'string') {
    return strOrNumber;
  }

  var parsed = strOrNumber.match(timeStdReg);

  if (parsed) {
    return getTime(parsed[2], parsed[4], parsed[5]);
  }

  parsed = strOrNumber.match(timeDecReg);

  if (parsed) {
    var unit = ('' + parsed[2]).toLowerCase();

    if (!parsed[1] || unit === 's') {
      return getTime(0, 0, parsed[1]);
    }

    if (unit === 'm') {
      return getTime(0, parsed[1], 0);
    }

    if (unit === 'h') {
      return getTime(parsed[1], 0, 0);
    }
  }

  return 0;
}

/***/ }),

/***/ "./src/parsers/transition.js":
/*!***********************************!*\
  !*** ./src/parsers/transition.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transitionParser = transitionParser;

var _time = __webpack_require__(/*! @/parsers/time */ "./src/parsers/time.js");

function transitionParser(val) {
  if (!Array.isArray(val)) {
    var transition = {};
    transition.back = transition.forward = (0, _time.timeParser)(val);
    return transition;
  }

  return {
    forward: (0, _time.timeParser)(val[0]),
    back: (0, _time.timeParser)(val[1])
  };
}

/***/ }),

/***/ "./src/schema.js":
/*!***********************!*\
  !*** ./src/schema.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSchema = createSchema;
exports.createState = createState;

var _easingFunctions = _interopRequireDefault(__webpack_require__(/*! easing-functions */ "./node_modules/easing-functions/index.js"));

var _interpolators = _interopRequireDefault(__webpack_require__(/*! @/interpolators */ "./src/interpolators.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getType(val) {
  var type = _typeof(val);

  if (type === 'string') {
    return val;
  }

  if (val === Number || type === 'number') {
    return 'number';
  }

  if (val === Boolean || type === 'boolean') {
    return 'boolean';
  }

  if (val === String) {
    return 'string';
  }

  if (val === Array || Array.isArray(val)) {
    return 'array';
  }

  if (val === Object || type === 'object') {
    return 'object';
  }

  return type;
}

function getDefaultValue(def) {
  var val = def.type || def;

  var type = _typeof(val); // non-specific defaults


  if (val === Number) {
    return 0;
  }

  if (val === Boolean) {
    return false;
  }

  if (val === String) {
    return '';
  }

  if (val === Array) {
    return [];
  }

  if (val === Object) {
    return {};
  } // specific defaults


  if (type === 'array') {
    return val.map(getDefaultValue);
  }

  if (type === 'object') {
    var ret = {};
    var keys = Object.keys(val);

    for (var _i = 0; _i < keys.length; _i++) {
      var k = keys[_i];
      ret[k] = getDefaultValue(val[k]);
    }

    return ret;
  }

  return val;
}

function createSchema(schemaDef) {
  var defaultEasing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _easingFunctions.default.Linear.None;
  var schema = {};
  var props = Object.keys(schemaDef);

  for (var _i2 = 0; _i2 < props.length; _i2++) {
    var prop = props[_i2];
    var def = schemaDef[prop];
    var easing = defaultEasing;
    var interpolator = null;
    var type = void 0;
    var defaultVal = void 0;

    if (_typeof(def) === 'object' && def.type) {
      type = getType(def.type);
      easing = def.easing || defaultEasing;
      interpolator = def.interpolator || null;
    } else {
      type = getType(def);
    }

    if (type === 'array') {
      interpolator = interpolator || _interpolators.default.Array;
    }

    if (defaultVal === undefined) {
      defaultVal = getDefaultValue(def);
    }

    schema[prop] = {
      type: type,
      easing: easing,
      default: defaultVal,
      interpolator: interpolator || _interpolators.default.Linear,
      def: def
    };
  }

  return schema;
}

function createState(schema) {
  var state = {};
  var props = Object.keys(schema);

  for (var _i3 = 0; _i3 < props.length; _i3++) {
    var prop = props[_i3];
    state[prop] = schema[prop].default;
  }

  return state;
}

/***/ }),

/***/ "./src/transition.js":
/*!***************************!*\
  !*** ./src/transition.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateProperty = interpolateProperty;
exports.getInterpolatedState = getInterpolatedState;
exports.getTimeFraction = getTimeFraction;
exports.interpolateBetweenFrames = interpolateBetweenFrames;

var _util = _interopRequireDefault(__webpack_require__(/*! @/util */ "./src/util/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function interpolateProperty(fn, from, to, progress) {
  return fn(from, to, progress);
}

function getInterpolatedState(schema, startState, endState, timeFraction) {
  var nextState = { ...startState
  };

  for (var prop in endState) {
    var def = schema[prop];
    var val = void 0;

    if (!def) {
      // not specified in schema. just set
      val = endState[prop];
    } else {
      var progress = def.easing(timeFraction);
      val = interpolateProperty(def.interpolator, nextState[prop], endState[prop], progress);
    }

    nextState[prop] = val;
  }

  return nextState;
}

function getTimeFraction(endTime, duration, time) {
  var startTime = endTime - duration;
  return _util.default.clamp(0, 1, (time - startTime) / duration);
}

function interpolateBetweenFrames(schema, prevFrame, nextFrame, time) {
  // if we're at the beginning
  if (!prevFrame) {
    return { ...nextFrame.state
    };
  } // if we're at the end...


  if (!nextFrame) {
    return { ...prevFrame.state
    };
  }

  var timeFraction = getTimeFraction(nextFrame.meta.time, nextFrame.meta.duration, time);
  return getInterpolatedState(schema, prevFrame.state, nextFrame.state, timeFraction);
}

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var util = {}; // From js - https://github.com/tweenjs/tween.js/blob/master/src/Tween.js
// Include a performance.now polyfill.
// In node.js, use process.hrtime.

if (typeof window === 'undefined' && typeof process !== 'undefined') {
  util.now = function now() {
    var time = process.hrtime(); // Convert [seconds, nanoseconds] to milliseconds.

    return time[0] * 1000 + time[1] / 1000000;
  };
} else if (typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined) {
  // In a browser, use window.performance.now if it is available.
  // This must be bound, because directly assigning this function
  // leads to an invocation exception in Chrome.
  util.now = window.performance.now.bind(window.performance);
} else if (Date.now !== undefined) {
  // Use Date.now if it is available.
  util.now = Date.now;
} else {
  // Otherwise, use 'new Date().getTime()'.
  util.now = function now() {
    return new Date().getTime();
  };
} // clamp


util.clamp = function (min, max, v) {
  return Math.min(Math.max(v, min), max);
};

var _default = util;
exports.default = _default;
module.exports = exports.default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

/******/ });
});
//# sourceMappingURL=frames.js.map