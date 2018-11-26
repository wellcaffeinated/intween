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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Frames = function Frames(schema, meta) {
  return new _manager.default(schema, meta);
};

var _default = Frames;
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

var _time = __webpack_require__(/*! @/parsers/time */ "./src/parsers/time.js");

var _transition = __webpack_require__(/*! @/parsers/transition */ "./src/parsers/transition.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_FRAME_META = {
  time: 0
};
var META_PARSERS = {
  time: _time.timeParser,
  transition: _transition.transitionParser
};
var DEFAULT_OPTIONS = {
  sleepTime: 500 // sorted add by time index

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


function parseMeta(meta) {
  var ret = { ...meta
  }; // clone

  for (var key in META_PARSERS) {
    ret[key] = META_PARSERS(ret[key]);
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
    this._state = { ...schema
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

      meta = parseMeta(meta); // TODO check transition duration doesn't overlap with previous state
      // if it does: warn, and set to max allowable transition time

      if (meta.id && this.framesById[meta.id]) {
        throw new Error("Frame with id \"".concat(meta.id, "\" already defined"));
      }

      if (meta.inherit) {
        var from = this.framesById[meta.inherit];

        if (!from) {
          throw new Error("No frame with id \"".concat(meta.inherit, "\" exists to be inherited"));
        }

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
    }
  }, {
    key: "meddle",
    value: function meddle(sleepTime) {// toggle user meddling
    }
  }, {
    key: "seek",
    value: function seek(timeOrName) {// immediately set correct state
    }
  }, {
    key: "to",
    value: function to(timeOrName) {// transition to time, or frame id
    }
  }, {
    key: "step",
    value: function step() {// let time = Date.now()
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
    key: "getNextState",
    value: function getNextState() {// look ahead
    }
  }, {
    key: "getPrevState",
    value: function getPrevState() {// look back
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

/***/ })

/******/ });
});
//# sourceMappingURL=frames.js.map