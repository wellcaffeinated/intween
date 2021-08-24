/*! InTween version 1.0.0-beta */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["InTween"] = factory();
	else
		root["InTween"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animation/index.js":
/*!********************************!*\
  !*** ./src/animation/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _tween = __webpack_require__(/*! ./tween */ "./src/animation/tween.js");

Object.keys(_tween).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tween[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tween[key];
    }
  });
});

var _meddle = __webpack_require__(/*! ./meddle */ "./src/animation/meddle.js");

Object.keys(_meddle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _meddle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _meddle[key];
    }
  });
});

var _smoothen = __webpack_require__(/*! ./smoothen */ "./src/animation/smoothen.js");

Object.keys(_smoothen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _smoothen[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _smoothen[key];
    }
  });
});

/***/ }),

/***/ "./src/animation/meddle.js":
/*!*********************************!*\
  !*** ./src/animation/meddle.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Meddle = void 0;

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

var _rx = __webpack_require__(/*! @/rx */ "./src/rx/index.js");

var _transition = __webpack_require__(/*! @/transition */ "./src/transition.js");

var _time = __webpack_require__(/*! @/parsers/time */ "./src/parsers/time.js");

var _easing = __webpack_require__(/*! @/parsers/easing */ "./src/parsers/easing.js");

var _tweenOperator = __webpack_require__(/*! ./tween-operator */ "./src/animation/tween-operator.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DEFAULT_OPTIONS = {
  relaxDuration: 500,
  relaxDelay: 1000,
  easing: 'linear'
};

var Meddle = /*#__PURE__*/function (_TweenOperator) {
  _inherits(Meddle, _TweenOperator);

  var _super = _createSuper(Meddle);

  function Meddle(tween, options) {
    var _this;

    _classCallCheck(this, Meddle);

    _this = _super.call(this);
    _this._subject = new _rx.Subject();
    _this._tween = tween;
    _this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    _this.lastTime = 0; // reset

    _this.defaults();

    _this.clear();

    return _this;
  } // toggle freezing of meddle states


  _createClass(Meddle, [{
    key: "freeze",
    value: function freeze() {
      var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.frozen = toggle;
      return this;
    }
  }, {
    key: "relaxDelay",
    value: function relaxDelay(time) {
      this._relaxDelay = (0, _time.parseTime)(time === undefined ? this.options.relaxDelay : time);
      return this;
    }
  }, {
    key: "relaxDuration",
    value: function relaxDuration(time) {
      this._relaxDuration = (0, _time.parseTime)(time === undefined ? this.options.relaxDuration : time);
      return this;
    }
  }, {
    key: "easing",
    value: function easing(e) {
      this._easing = (0, _easing.parseEasing)(e === undefined ? this.options.easing : e);
      return this;
    } // Use the default timing/easing set at construction

  }, {
    key: "defaults",
    value: function defaults() {
      this.relaxDelay();
      this.relaxDuration();
      this.easing();
      return this;
    } // toggle user meddling

  }, {
    key: "set",
    value: function set(meddleState) {
      this.state = _objectSpread(_objectSpread({}, this.state), meddleState);
      this.started = false;
      this.startTime = false;
      this.relaxState = null;
      this.active = true;

      this._subject.next(this.lastTime);

      return this;
    } // force meddling to reset

  }, {
    key: "clear",
    value: function clear() {
      this.state = {};
      this.started = false;
      this.active = false;
      this.frozen = false;
      this.startTime = false;
      this.lastTime = 0;
      return this;
    }
  }, {
    key: "at",
    value: function at(time) {
      this.lastTime = time; // check meddling

      if (!this.active || this.frozen) {
        return Object.assign({}, this.state);
      }

      if (!this.started) {
        this.startTime = time;
        this.started = true;
        this.endTime = this.startTime + this._relaxDelay + this._relaxDuration;
        this.relaxState = (0, _util.pick)(this._tween.at(this.endTime), Object.keys(this.state));
      }

      if (this.startTime === time) {
        return Object.assign({}, this.state);
      }

      if (time >= this.endTime || time < this.startTime) {
        // meddling is over
        this.clear();
      }

      if (time > this.totalTime) {
        // this will force a reset when the timeline is re-entered
        this.clear();
      }

      var timeFraction = (0, _transition.getTimeFraction)(this.startTime + this._relaxDelay, this.endTime, time);
      var meddleTransitionState = (0, _transition.getInterpolatedState)(this._tween._schema, this.state, this.relaxState, timeFraction, this._easing);
      return meddleTransitionState;
    }
  }, {
    key: "__call__",
    value: function __call__(source) {
      var _this2 = this;

      return (0, _rx.map)(function (t) {
        return _this2.at(t);
      })((0, _rx.merge)(this._subject, source));
    }
  }], [{
    key: "create",
    value: function create(tween, options) {
      return new Meddle(tween, options);
    }
  }]);

  return Meddle;
}(_tweenOperator.TweenOperator);

exports.Meddle = Meddle;

/***/ }),

/***/ "./src/animation/smoothen.js":
/*!***********************************!*\
  !*** ./src/animation/smoothen.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Smoothen = Smoothen;

var _easing = __webpack_require__(/*! @/easing */ "./src/easing/index.js");

var _easing2 = __webpack_require__(/*! @/parsers/easing */ "./src/parsers/easing.js");

var _schema = __webpack_require__(/*! @/schema */ "./src/schema.js");

var _transition = __webpack_require__(/*! @/transition */ "./src/transition.js");

var _rx = __webpack_require__(/*! @/rx */ "./src/rx/index.js");

var _animationFrames = __webpack_require__(/*! @/timing/animation-frames */ "./src/timing/animation-frames.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultConfig = {
  duration: 1000,
  easing: 'cubicOut'
}; // Helper to smooth state changes
// ---------------------------------------

function Smoothen() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;
  var getState = arguments.length > 1 ? arguments[1] : undefined;
  var schemaDef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (config instanceof Function) {
    getState = config;
    config = defaultConfig;
  }

  return function (source) {
    return new _rx.Observable(function (sink) {
      var _targets = [];
      var schema;
      var time = 0;
      var currentState;
      var easing = (0, _easing2.parseEasing)(config.easing);

      if (!getState) {
        getState = function getState() {
          return currentState;
        };
      }

      var update = function update(t) {
        time = t;

        if (!_targets.length) {
          return null;
        }

        var prev = 1;

        var timeFracs = _targets.map(function (_ref) {
          var startTime = _ref.startTime,
              endTime = _ref.endTime;

          if (prev <= 0) {
            return 0;
          }

          var tf = easing((0, _transition.getTimeFraction)(startTime, endTime, time)) / prev;
          prev = tf;
          return tf;
        });

        currentState = timeFracs.reduceRight(function (targetState, tf, i) {
          var startState = _targets[i].startState;
          return (0, _transition.getInterpolatedState)(schema, startState, targetState, tf, _easing.linear);
        }, _targets[_targets.length - 1].targetState); // clean

        while (((_targets$ = _targets[0]) === null || _targets$ === void 0 ? void 0 : _targets$.endTime) <= time) {
          var _targets$;

          _targets.shift();
        }

        return currentState;
      };

      var set = function set(targetState) {
        if (!schema) {
          schema = (0, _schema.createSchema)(schemaDef || getState() || targetState);
          currentState = (0, _schema.createState)(schema);

          if (!schemaDef) {
            return;
          }
        }

        var l = _targets.length;
        var startState = l ? _targets[l - 1].targetState : _objectSpread({}, getState());

        _targets.push({
          startTime: time,
          endTime: time + config.duration,
          startState: startState,
          targetState: targetState
        });
      };

      var nextTarget = null;
      var sub = (0, _animationFrames.animationFrames)().subscribe(function (t) {
        if (nextTarget) {
          set(nextTarget);
          nextTarget = null;
        }

        var state = update(t);

        if (!state) {
          return;
        }

        sink.next(state);
      });
      var sinkSub = source.subscribe({
        next: function next(state) {
          nextTarget = state;
        },
        error: function error(e) {
          return sink.error(e);
        },
        complete: function complete() {
          return sink.complete();
        }
      });

      var unsubscribe = function unsubscribe() {
        sub.unsubscribe();
        sinkSub.unsubscribe();
      };

      return {
        unsubscribe: unsubscribe
      };
    });
  };
}

/***/ }),

/***/ "./src/animation/tween-operator.js":
/*!*****************************************!*\
  !*** ./src/animation/tween-operator.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TweenOperator = void 0;

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

var _rx = __webpack_require__(/*! @/rx */ "./src/rx/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TweenOperator = /*#__PURE__*/function (_Callable) {
  _inherits(TweenOperator, _Callable);

  var _super = _createSuper(TweenOperator);

  function TweenOperator() {
    _classCallCheck(this, TweenOperator);

    return _super.apply(this, arguments);
  }

  _createClass(TweenOperator, [{
    key: "at",
    value: function at(t) {
      return t;
    }
  }, {
    key: "__call__",
    value: function __call__(source) {
      var _this = this;

      return (0, _rx.map)(function (t) {
        return _this.at(t);
      })(source);
    }
  }]);

  return TweenOperator;
}(_util.Callable);

exports.TweenOperator = TweenOperator;

/***/ }),

/***/ "./src/animation/tween.js":
/*!********************************!*\
  !*** ./src/animation/tween.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tween = void 0;

var _schema = __webpack_require__(/*! @/schema */ "./src/schema.js");

var _frame = __webpack_require__(/*! @/frame */ "./src/frame.js");

var _time = __webpack_require__(/*! @/parsers/time */ "./src/parsers/time.js");

var _timeline = __webpack_require__(/*! @/timeline */ "./src/timeline.js");

var _tweenOperator = __webpack_require__(/*! ./tween-operator */ "./src/animation/tween-operator.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DEFAULT_OPTIONS = {
  tweenDuration: '100%',
  easing: 'linear'
};

var Tween = /*#__PURE__*/function (_TweenOperator) {
  _inherits(Tween, _TweenOperator);

  var _super = _createSuper(Tween);

  function Tween(schema, options) {
    var _this;

    _classCallCheck(this, Tween);

    _this = _super.call(this);
    _this.framesById = {};
    _this.frames = [];
    _this.timeline = [];
    _this._schema = (0, _schema.createSchema)(schema);
    _this._startingState = (0, _schema.createState)(_this._schema);
    _this.options = Object.assign({}, DEFAULT_OPTIONS, options);

    _this._refreshTimeline();

    return _this;
  }

  _createClass(Tween, [{
    key: "duration",
    get: function get() {
      var _this$timeline;

      return ((_this$timeline = this.timeline[this.timeline.length - 1]) === null || _this$timeline === void 0 ? void 0 : _this$timeline.time) || 0;
    }
  }, {
    key: "by",
    value: function by(endTime, duration, state, easing) {
      var meta = {
        endTime: endTime
      };

      if (_typeof(duration) === 'object') {
        easing = state;
        state = duration;
      } else {
        meta.duration = duration;
      }

      if (easing) {
        meta.easing = easing;
      }

      return this.to(state, meta);
    }
  }, {
    key: "in",
    value: function _in(dt, duration, state, easing) {
      var meta = {
        endTime: this.duration + (0, _time.parseTime)(dt)
      };

      if (_typeof(duration) === 'object') {
        easing = state;
        state = duration;
      } else {
        meta.duration = duration;
      }

      if (easing) {
        meta.easing = easing;
      }

      return this.to(state, meta);
    } // add a frame

  }, {
    key: "to",
    value: function to(state, opts) {
      var meta = {};

      if (typeof opts === 'string') {
        meta.easing = opts;
      } else if (opts) {
        Object.assign(meta, opts);
      }

      if (meta.startTime === undefined && meta.endTime === undefined) {
        meta.startTime = this.duration;
      }

      var frame = (0, _frame.createFrame)(state, meta, {
        duration: this.options.tweenDuration
      });

      if (frame.meta.id && this.framesById[frame.meta.id]) {
        throw new Error("Frame with id \"".concat(frame.meta.id, "\" already defined"));
      } // add to id list


      if (frame.meta.id) {
        this.framesById[frame.meta.id] = frame;
      }

      this.frames.push(frame);

      this._refreshTimeline();

      return this;
    }
  }, {
    key: "_refreshTimeline",
    value: function _refreshTimeline() {
      this.timeline = (0, _timeline.createTimeline)(this._schema, this.frames);
      return this;
    }
  }, {
    key: "getFrame",
    value: function getFrame(id) {
      var frame = this.framesById[id];
      return frame;
    }
  }, {
    key: "at",
    value: function at(time) {
      if (time >= this.duration) {
        var m = this.timeline[this.timeline.length - 1];
        return _objectSpread({}, m.state);
      }

      var transitions = (0, _timeline.getTransitionsAtTime)(this.timeline, time);
      var startState = (0, _timeline.getStartState)(this.timeline, time, this._startingState);
      return (0, _timeline.reduceTransitions)(this._schema, transitions, time, startState);
    }
  }, {
    key: "getTransitions",
    value: function getTransitions(time) {
      time = time || this.time;
      return (0, _timeline.getTransitionsAtTime)(this.timeline, time);
    }
  }], [{
    key: "create",
    value: function create(schema, options) {
      return new Tween(schema, options);
    }
  }]);

  return Tween;
}(_tweenOperator.TweenOperator);

exports.Tween = Tween;

/***/ }),

/***/ "./src/easing/core.js":
/*!****************************!*\
  !*** ./src/easing/core.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.step = exports.backInOut = exports.backOut = exports.backIn = exports.bounceInOut = exports.bounceOut = exports.bounceIn = exports.circularInOut = exports.circularOut = exports.circularIn = exports.elasticInOut = exports.elasticOut = exports.elasticIn = exports.expInOut = exports.expOut = exports.expIn = exports.sinInOut = exports.sinOut = exports.sinIn = exports.quintInOut = exports.quintOut = exports.quintIn = exports.quartInOut = exports.quartOut = exports.quartIn = exports.cubicInOut = exports.cubicOut = exports.cubicIn = exports.quadInOut = exports.quadOut = exports.quadIn = exports.linear = void 0;

var _factories = __webpack_require__(/*! ./factories */ "./src/easing/factories.js");

/**
 * Easing adapted from phaser
 * license: https://opensource.org/licenses/MIT
 */
var halfPi = Math.PI / 2;

var linear = function linear(t) {
  return t;
};

exports.linear = linear;

var quadIn = function quadIn(t) {
  return t * t;
};

exports.quadIn = quadIn;

var quadOut = function quadOut(t) {
  return t * (2 - t);
};

exports.quadOut = quadOut;

var quadInOut = function quadInOut(t) {
  return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
};

exports.quadInOut = quadInOut;

var cubicIn = function cubicIn(t) {
  return t * t * t;
};

exports.cubicIn = cubicIn;

var cubicOut = function cubicOut(t) {
  return --t * t * t + 1;
};

exports.cubicOut = cubicOut;

var cubicInOut = function cubicInOut(t) {
  return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
};

exports.cubicInOut = cubicInOut;

var quartIn = function quartIn(t) {
  return t * t * t * t;
};

exports.quartIn = quartIn;

var quartOut = function quartOut(t) {
  return 1 - --t * t * t * t;
};

exports.quartOut = quartOut;

var quartInOut = function quartInOut(t) {
  return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
};

exports.quartInOut = quartInOut;

var quintIn = function quintIn(t) {
  return t * t * t * t * t;
};

exports.quintIn = quintIn;

var quintOut = function quintOut(t) {
  return --t * t * t * t * t + 1;
};

exports.quintOut = quintOut;

var quintInOut = function quintInOut(t) {
  return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
};

exports.quintInOut = quintInOut;

var sinIn = function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
};

exports.sinIn = sinIn;

var sinOut = function sinOut(t) {
  return Math.sin(t * halfPi);
};

exports.sinOut = sinOut;

var sinInOut = function sinInOut(t) {
  return 0.5 * (1 - Math.cos(Math.PI * t));
};

exports.sinInOut = sinInOut;

var expIn = function expIn(t) {
  return t === 0 ? 0 : Math.pow(1024, t - 1);
};

exports.expIn = expIn;

var expOut = function expOut(t) {
  return t === 0 ? 1 : 1 - Math.pow(1024, -t);
};

exports.expOut = expOut;

var expInOut = function expInOut(t) {
  if (t === 0) return 0;
  if (t === 1) return 1;
  if ((t *= 2) < 1) return 0.5 * Math.pow(1024, t - 1);
  return 0.5 * (2 - Math.pow(1024, 1 - t));
};

exports.expInOut = expInOut;
var elasticIn = (0, _factories.makeElasticIn)();
exports.elasticIn = elasticIn;
var elasticOut = (0, _factories.makeElasticOut)();
exports.elasticOut = elasticOut;
var elasticInOut = (0, _factories.makeElasticInOut)();
exports.elasticInOut = elasticInOut;

var circularIn = function circularIn(t) {
  return 1 - Math.sqrt(1 - t * t);
};

exports.circularIn = circularIn;

var circularOut = function circularOut(t) {
  return Math.sqrt(1 - --t * t);
};

exports.circularOut = circularOut;

var circularInOut = function circularInOut(t) {
  return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
};

exports.circularInOut = circularInOut;

var bounceIn = function bounceIn(t) {
  t = 1 - t;
  if (t < 1 / 2.75) return 1 - 7.5625 * t * t;else if (t < 2 / 2.75) return 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);else if (t < 2.5 / 2.75) return 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375);else return 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
};

exports.bounceIn = bounceIn;

var bounceOut = function bounceOut(t) {
  if (t < 1 / 2.75) return 7.5625 * t * t;else if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;else if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;else return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
};

exports.bounceOut = bounceOut;

var bounceInOut = function bounceInOut(t) {
  var reverse = false;

  if (t < 0.5) {
    t = 1 - t * 2;
    reverse = true;
  } else {
    t = t * 2 - 1;
  }

  if (t < 1 / 2.75) {
    t = 7.5625 * t * t;
  } else if (t < 2 / 2.75) {
    t = 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  } else if (t < 2.5 / 2.75) {
    t = 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  } else {
    t = 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }

  if (reverse) {
    return (1 - t) * 0.5;
  } else {
    return t * 0.5 + 0.5;
  }
};

exports.bounceInOut = bounceInOut;
var backIn = (0, _factories.makeBackIn)();
exports.backIn = backIn;
var backOut = (0, _factories.makeBackOut)();
exports.backOut = backOut;
var backInOut = (0, _factories.makeBackInOut)();
exports.backInOut = backInOut;
var step = (0, _factories.makeSteps)();
exports.step = step;

/***/ }),

/***/ "./src/easing/factories.js":
/*!*********************************!*\
  !*** ./src/easing/factories.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeSteps = exports.makeBackInOut = exports.makeBackOut = exports.makeBackIn = exports.makeElasticInOut = exports.makeElasticOut = exports.makeElasticIn = void 0;

/**
 * Easing adapted from phaser
 * license: https://opensource.org/licenses/MIT
 */
var Pi2 = Math.PI * 2;
/*
 * @param {number} [amplitude=0.1] - The amplitude of the elastic ease.
 * @param { number } [period = 0.1] - Sets how tight the sine - wave is,
 * where smaller values are tighter waves, which result in more cycles.
 */

var makeElasticIn = function makeElasticIn() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  var s = p / 4;

  if (a < 1) {
    a = 1;
  } else {
    s = p * Math.asin(1 / a) / Pi2;
  }

  var w = Pi2 / p;
  return function (t) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * w));
  };
};
/*
 * @param {number} [amplitude=0.1] - The amplitude of the elastic ease.
 * @param { number } [period = 0.1] - Sets how tight the sine - wave is,
 * where smaller values are tighter waves, which result in more cycles.
 */


exports.makeElasticIn = makeElasticIn;

var makeElasticOut = function makeElasticOut() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  var s = p / 4;

  if (a < 1) {
    a = 1;
  } else {
    s = p * Math.asin(1 / a) / Pi2;
  }

  var w = Pi2 / p;
  return function (t) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return a * Math.pow(2, -10 * t) * Math.sin((t - s) * w) + 1;
  };
};
/*
 * @param {number} [amplitude=0.1] - The amplitude of the elastic ease.
 * @param { number } [period = 0.1] - Sets how tight the sine - wave is,
 * where smaller values are tighter waves, which result in more cycles.
 */


exports.makeElasticOut = makeElasticOut;

var makeElasticInOut = function makeElasticInOut() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  var s = p / 4;

  if (a < 1) {
    a = 1;
  } else {
    s = p * Math.asin(1 / a) / Pi2;
  }

  var w = Pi2 / p;
  return function (t) {
    if (t === 0) return 0;
    if (t === 1) return 1;

    if ((t *= 2) < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * w));
    } else {
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * w) * 0.5 + 1;
    }
  };
};

exports.makeElasticInOut = makeElasticInOut;

var makeBackIn = function makeBackIn() {
  var overshoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.70158;
  return function (t) {
    return t * t * ((overshoot + 1) * t - overshoot);
  };
};

exports.makeBackIn = makeBackIn;

var makeBackOut = function makeBackOut() {
  var overshoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.70158;
  return function (t) {
    return --t * t * ((overshoot + 1) * t + overshoot) + 1;
  };
};

exports.makeBackOut = makeBackOut;

var makeBackInOut = function makeBackInOut() {
  var overshoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.70158;
  return function (t) {
    var s = overshoot * 1.525;

    if ((t *= 2) < 1) {
      return 0.5 * (t * t * ((s + 1) * t - s));
    } else {
      return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
    }
  };
};

exports.makeBackInOut = makeBackInOut;

var makeSteps = function makeSteps() {
  var steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return function (t) {
    return ((steps * t | 0) + 1) * (1 / steps);
  };
};

exports.makeSteps = makeSteps;

/***/ }),

/***/ "./src/easing/index.js":
/*!*****************************!*\
  !*** ./src/easing/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _factories = __webpack_require__(/*! ./factories */ "./src/easing/factories.js");

Object.keys(_factories).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _factories[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _factories[key];
    }
  });
});

var _core = __webpack_require__(/*! ./core */ "./src/easing/core.js");

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _core[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

/***/ }),

/***/ "./src/frame.js":
/*!**********************!*\
  !*** ./src/frame.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createFrame = createFrame;

var _easing = __webpack_require__(/*! @/parsers/easing */ "./src/parsers/easing.js");

var _time = __webpack_require__(/*! @/parsers/time */ "./src/parsers/time.js");

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pctReg = /^((\d{1,3})(\.\d*)?)%$/;
var META_PARSERS = {
  endTime: function endTime(v) {
    if (v === undefined) {
      return undefined;
    }

    return (0, _time.parseTime)(v);
  },
  startTime: _time.parseTime,
  duration: function duration(v) {
    if (v === undefined) {
      return undefined;
    }

    if (pctReg.test(v)) {
      return v;
    }

    return (0, _time.parseTime)(v);
  },
  easing: _easing.parseEasing
}; // parse meta to standardized format

function parseMeta(meta, defaults) {
  var ret = _objectSpread(_objectSpread({}, defaults), (0, _util.sanitizedObject)(meta)); // clone


  for (var key in META_PARSERS) {
    ret[key] = META_PARSERS[key](ret[key]);
  }

  return ret;
}

function createFrame(state, meta, defaultMetaOptions) {
  if (!state) {
    throw new Error('Can not create frame without state object');
  }

  state = _objectSpread({}, state);
  meta = parseMeta(meta || state.$meta, defaultMetaOptions);
  delete state.$meta;
  var percentDuration = pctReg.exec(meta.duration);

  if (percentDuration) {
    meta.implicit = true;
    meta.fractionalDuration = parseFloat(percentDuration[1]) / 100;
  } else if (meta.endTime !== undefined) {
    if (meta.startTime !== undefined) {
      meta.duration = meta.endTime - meta.startTime;
    } else {
      meta.startTime = meta.endTime - meta.duration;
    }
  } else {
    meta.endTime = meta.startTime + meta.duration;
  }

  return {
    state: state,
    meta: meta
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Util: true,
  Easing: true,
  Interpolators: true,
  Parsers: true,
  registerType: true,
  getTimeFraction: true,
  interpolateProperty: true
};
Object.defineProperty(exports, "Parsers", ({
  enumerable: true,
  get: function get() {
    return _parsers.default;
  }
}));
Object.defineProperty(exports, "registerType", ({
  enumerable: true,
  get: function get() {
    return _type.registerType;
  }
}));
Object.defineProperty(exports, "getTimeFraction", ({
  enumerable: true,
  get: function get() {
    return _transition.getTimeFraction;
  }
}));
Object.defineProperty(exports, "interpolateProperty", ({
  enumerable: true,
  get: function get() {
    return _transition.interpolateProperty;
  }
}));
exports.Interpolators = exports.Easing = exports.Util = void 0;

var _rx = __webpack_require__(/*! @/rx */ "./src/rx/index.js");

Object.keys(_rx).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _rx[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rx[key];
    }
  });
});

var _Util = _interopRequireWildcard(__webpack_require__(/*! @/util */ "./src/util/index.js"));

exports.Util = _Util;

var _Easing = _interopRequireWildcard(__webpack_require__(/*! @/easing */ "./src/easing/index.js"));

exports.Easing = _Easing;

var _Interpolators = _interopRequireWildcard(__webpack_require__(/*! @/interpolators */ "./src/interpolators/index.js"));

exports.Interpolators = _Interpolators;

var _animation = __webpack_require__(/*! @/animation */ "./src/animation/index.js");

Object.keys(_animation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _animation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animation[key];
    }
  });
});

var _timing = __webpack_require__(/*! @/timing */ "./src/timing/index.js");

Object.keys(_timing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _timing[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _timing[key];
    }
  });
});

var _parsers = _interopRequireDefault(__webpack_require__(/*! @/parsers */ "./src/parsers/index.js"));

var _type = __webpack_require__(/*! @/type */ "./src/type.js");

var _transition = __webpack_require__(/*! @/transition */ "./src/transition.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ "./src/interpolators/core.js":
/*!***********************************!*\
  !*** ./src/interpolators/core.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toggle = exports.string = exports.object = exports.array = exports.degrees = exports.radians = exports.linear = void 0;

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

var _factories = __webpack_require__(/*! ./factories */ "./src/interpolators/factories.js");

var Pi2 = Math.PI * 2;

var linear = function linear(from, to, t) {
  return (0, _util.lerp)(from, to, t);
};

exports.linear = linear;

var radians = function radians(from, to, t) {
  return from + (0, _util.shortestModDist)(from, to, Pi2) * t;
};

exports.radians = radians;

var degrees = function degrees(from, to, t) {
  return from + (0, _util.shortestModDist)(from, to, 360) * t;
};

exports.degrees = degrees;

var array = function array(from, to, t) {
  return to.map(function (v1, idx) {
    return (0, _util.lerp)(from[idx] || 0, v1 || 0, t);
  });
};

exports.array = array;

var object = function object(from, to, t) {
  return (0, _util.mapProperties)(from, function (val, key) {
    return (0, _util.lerp)(val, to[key], t);
  });
};

exports.object = object;

var string = function string(from, to, t) {
  if (t <= 0) {
    return from;
  }

  var length = (0, _util.lerp)(0, to.length, t) | 0; // to integer

  return to.substr(0, length);
};

exports.string = string;
var toggle = (0, _factories.makeToggle)(1);
exports.toggle = toggle;

/***/ }),

/***/ "./src/interpolators/factories.js":
/*!****************************************!*\
  !*** ./src/interpolators/factories.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeCyclic = exports.makeToggle = void 0;

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

var makeToggle = function makeToggle(threshold) {
  return function (from, to, t) {
    return t >= threshold ? to : from;
  };
};

exports.makeToggle = makeToggle;

var makeCyclic = function makeCyclic(len) {
  return function (from, to, t) {
    return from + (0, _util.shortestModDist)(from, to, len) * t;
  };
};

exports.makeCyclic = makeCyclic;

/***/ }),

/***/ "./src/interpolators/index.js":
/*!************************************!*\
  !*** ./src/interpolators/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _factories = __webpack_require__(/*! ./factories */ "./src/interpolators/factories.js");

Object.keys(_factories).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _factories[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _factories[key];
    }
  });
});

var _core = __webpack_require__(/*! ./core */ "./src/interpolators/core.js");

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _core[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

/***/ }),

/***/ "./src/parsers/easing.js":
/*!*******************************!*\
  !*** ./src/parsers/easing.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseEasing = parseEasing;

var Easing = _interopRequireWildcard(__webpack_require__(/*! @/easing/core */ "./src/easing/core.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function parseEasing(easing) {
  if (easing === undefined || easing === null) {
    return false;
  }

  if (easing instanceof Function) {
    return easing;
  } else if (typeof easing === 'string') {
    if (easing in Easing) {
      return Easing[easing];
    }
  }

  throw new Error("Unrecognized easing name \"".concat(easing, "\""));
}

/***/ }),

/***/ "./src/parsers/index.js":
/*!******************************!*\
  !*** ./src/parsers/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _time = __webpack_require__(/*! ./time */ "./src/parsers/time.js");

Object.keys(_time).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _time[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _time[key];
    }
  });
});

var _easing = __webpack_require__(/*! ./easing */ "./src/parsers/easing.js");

Object.keys(_easing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _easing[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _easing[key];
    }
  });
});

var _interpolator = __webpack_require__(/*! ./interpolator */ "./src/parsers/interpolator.js");

Object.keys(_interpolator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _interpolator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interpolator[key];
    }
  });
});

/***/ }),

/***/ "./src/parsers/interpolator.js":
/*!*************************************!*\
  !*** ./src/parsers/interpolator.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseInterpolator = parseInterpolator;

var Interpolators = _interopRequireWildcard(__webpack_require__(/*! @/interpolators/core */ "./src/interpolators/core.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function parseInterpolator(interp) {
  if (interp === undefined || interp === null) {
    return false;
  }

  if (interp instanceof Function) {
    return interp;
  } else if (typeof interp === 'string') {
    if (interp in Interpolators) {
      return Interpolators[interp];
    }
  }

  throw new Error("Unrecognized interpolator name \"".concat(interp, "\""));
}

/***/ }),

/***/ "./src/parsers/time.js":
/*!*****************************!*\
  !*** ./src/parsers/time.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseTime = parseTime;
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


function parseTime(strOrNumber) {
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

/***/ "./src/rx/index.js":
/*!*************************!*\
  !*** ./src/rx/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  map: true,
  merge: true,
  combineLatest: true,
  zip: true,
  spreadAssign: true
};
exports.merge = merge;
exports.combineLatest = combineLatest;
exports.zip = zip;
exports.spreadAssign = exports.map = void 0;

var _pipe = __webpack_require__(/*! ./pipe */ "./src/rx/pipe.js");

Object.keys(_pipe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _pipe[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pipe[key];
    }
  });
});

var _observable = __webpack_require__(/*! ./observable */ "./src/rx/observable.js");

Object.keys(_observable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _observable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _observable[key];
    }
  });
});

var _subject = __webpack_require__(/*! ./subject */ "./src/rx/subject.js");

Object.keys(_subject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _subject[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _subject[key];
    }
  });
});

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var map = function map(fn) {
  return function (source) {
    return new _observable.Observable(function (sink) {
      return source.subscribe({
        next: function next(value) {
          try {
            value = fn(value);
            sink.next(value);
          } catch (e) {
            sink.error(e);
          }
        },
        error: function error(e) {
          sink.error(e);
        },
        complete: function complete() {
          sink.complete();
        }
      });
    });
  };
}; // Emits all values from all inputs in parallel
// Copyright (c) 2018 zenparsing (Kevin Smith)


exports.map = map;

function merge() {
  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  return new _observable.Observable(function (observer) {
    if (sources.length === 0) {
      return _observable.Observable.from([]);
    }

    var count = sources.length;
    var subscriptions = sources.map(function (source) {
      return _observable.Observable.from(source).subscribe({
        next: function next(v) {
          observer.next(v);
        },
        error: function error(e) {
          observer.error(e);
        },
        complete: function complete() {
          if (--count === 0) {
            observer.complete();
          }
        }
      });
    });
    return function () {
      return subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    };
  });
} // Emits arrays containing the most current values from each input
// Copyright (c) 2018 zenparsing (Kevin Smith)


function combineLatest() {
  for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    sources[_key2] = arguments[_key2];
  }

  return new _observable.Observable(function (observer) {
    if (sources.length === 0) {
      return _observable.Observable.from([]);
    }

    var count = sources.length;
    var seen = new Set();
    var seenAll = false;
    var values = sources.map(function () {
      return undefined;
    });
    var subscriptions = sources.map(function (source, index) {
      return _observable.Observable.from(source).subscribe({
        next: function next(v) {
          values[index] = v;

          if (!seenAll) {
            seen.add(index);

            if (seen.size !== sources.length) {
              return;
            }

            seen = null;
            seenAll = true;
          }

          observer.next(Array.from(values));
        },
        error: function error(e) {
          observer.error(e);
        },
        complete: function complete() {
          if (--count === 0) {
            observer.complete();
          }
        }
      });
    });
    return function () {
      return subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    };
  });
} // Emits arrays containing the matching index values from each input
// Copyright (c) 2018 zenparsing (Kevin Smith)


function zip() {
  for (var _len3 = arguments.length, sources = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    sources[_key3] = arguments[_key3];
  }

  return new _observable.Observable(function (observer) {
    if (sources.length === 0) {
      return _observable.Observable.from([]);
    }

    var queues = sources.map(function () {
      return [];
    });

    function done() {
      return queues.some(function (q, i) {
        return q.length === 0 && subscriptions[i].closed;
      });
    }

    var subscriptions = sources.map(function (source, index) {
      return _observable.Observable.from(source).subscribe({
        next: function next(v) {
          queues[index].push(v);

          if (queues.every(function (q) {
            return q.length > 0;
          })) {
            observer.next(queues.map(function (q) {
              return q.shift();
            }));

            if (done()) {
              observer.complete();
            }
          }
        },
        error: function error(e) {
          observer.error(e);
        },
        complete: function complete() {
          if (done()) {
            observer.complete();
          }
        }
      });
    });
    return function () {
      return subscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    };
  });
}

var spreadAssign = function spreadAssign() {
  for (var _len4 = arguments.length, operators = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operators[_key4] = arguments[_key4];
  }

  return function (source) {
    return new _observable.Observable(function (sink) {
      var subject = new _subject.Subject();
      var observables = operators.map(function (o) {
        return o(subject);
      });
      var sub = (0, _pipe.pipe)(map(function (results) {
        return Object.assign.apply(Object, [{}].concat(_toConsumableArray(results)));
      }))(combineLatest.apply(void 0, _toConsumableArray(observables))).subscribe(sink);
      var sub2 = source.subscribe(subject);
      return function () {
        sub.unsubscribe();
        sub2.unsubscribe();
      };
    });
  };
};

exports.spreadAssign = spreadAssign;

/***/ }),

/***/ "./src/rx/observable.js":
/*!******************************!*\
  !*** ./src/rx/observable.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Observable = void 0;

__webpack_require__(/*! core-js/features/symbol/observable */ "./node_modules/core-js/features/symbol/observable.js");

var _observable2 = _interopRequireDefault(__webpack_require__(/*! core-js-pure/features/observable */ "./node_modules/core-js-pure/features/observable/index.js"));

var _pipe = __webpack_require__(/*! ./pipe */ "./src/rx/pipe.js");

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Observable = /*#__PURE__*/function (_Obs) {
  _inherits(Observable, _Obs);

  var _super = _createSuper(Observable);

  function Observable(subscriber) {
    _classCallCheck(this, Observable);

    return _super.call(this, subscriber || _util.identity);
  }

  _createClass(Observable, [{
    key: "pipe",
    value: function pipe() {
      for (var _len = arguments.length, ops = new Array(_len), _key = 0; _key < _len; _key++) {
        ops[_key] = arguments[_key];
      }

      return (0, _pipe.pipeFromArray)(ops)(this);
    } // needed to interop with rxjs

  }, {
    key: "lift",
    value: function lift(operator) {
      var _this = this;

      return new Observable(function (sink) {
        return operator.call(sink, _this);
      });
    }
  }, {
    key: '@@observable',
    value: function observable() {
      return this;
    }
  }]);

  return Observable;
}(_observable2.default);

exports.Observable = Observable;

/***/ }),

/***/ "./src/rx/pipe.js":
/*!************************!*\
  !*** ./src/rx/pipe.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pipeFromArray = pipeFromArray;
exports.pipe = pipe;

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _util.identity;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}

function pipe() {
  for (var _len = arguments.length, ops = new Array(_len), _key = 0; _key < _len; _key++) {
    ops[_key] = arguments[_key];
  }

  return pipeFromArray(ops);
}

/***/ }),

/***/ "./src/rx/subject.js":
/*!***************************!*\
  !*** ./src/rx/subject.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Subject = void 0;

var _observable = __webpack_require__(/*! @/rx/observable */ "./src/rx/observable.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Subject = /*#__PURE__*/function (_Observable) {
  _inherits(Subject, _Observable);

  var _super = _createSuper(Subject);

  function Subject() {
    var _this;

    _classCallCheck(this, Subject);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "closed", false);

    _defineProperty(_assertThisInitialized(_this), "observers", []);

    return _this;
  }

  _createClass(Subject, [{
    key: "unsubscribe",
    value: function unsubscribe() {
      this.isStopped = this.closed = true;
      this.observers = null;
    }
  }, {
    key: "next",
    value: function next(value) {
      this._throwIfClosed();

      if (!this.isStopped) {
        var copy = this.observers.slice();

        var _iterator = _createForOfIteratorHelper(copy),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var observer = _step.value;
            observer.next(value);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "error",
    value: function error(err) {
      this._throwIfClosed();

      if (!this.isStopped) {
        this.hasError = this.isStopped = true;
        this.thrownError = err;
        var observers = this.observers;

        while (observers.length) {
          observers.shift().error(err);
        }
      }
    }
  }, {
    key: "complete",
    value: function complete() {
      this._throwIfClosed();

      if (!this.isStopped) {
        this.isStopped = true;
        var observers = this.observers;

        while (observers.length) {
          observers.shift().complete();
        }
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(subscriber) {
      var _this2 = this;

      var len = this.observers.push(subscriber);
      return {
        unsubscribe: function unsubscribe() {
          _this2.observers.splice(len - 1, 1);
        }
      };
    }
  }, {
    key: "_throwIfClosed",
    value: function _throwIfClosed() {
      if (this.closed) {
        throw new Error('Subscription closed!');
      }
    }
  }]);

  return Subject;
}(_observable.Observable);

exports.Subject = Subject;

/***/ }),

/***/ "./src/schema.js":
/*!***********************!*\
  !*** ./src/schema.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createSchema = createSchema;
exports.createState = createState;

var _easing = __webpack_require__(/*! @/parsers/easing */ "./src/parsers/easing.js");

var _interpolator = __webpack_require__(/*! @/parsers/interpolator */ "./src/parsers/interpolator.js");

var _type = __webpack_require__(/*! @/type */ "./src/type.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DEFAULT_EASING = 'linear';

function createSchema(schemaDef) {
  var schema = {};
  var props = Object.keys(schemaDef);

  for (var _i = 0, _props = props; _i < _props.length; _i++) {
    var prop = _props[_i];
    var def = schemaDef[prop];
    var easing = void 0;
    var interpolator = void 0;
    var type = void 0;
    var cfg = void 0;
    var defaultVal = void 0;

    if (_typeof(def) === 'object' && def.type !== undefined) {
      type = (0, _type.getType)(def.type);
      cfg = (0, _type.getTypeCfg)(type);

      if (!cfg) {
        throw new Error("Unrecognized type ".concat(type));
      }

      if ((0, _type.isExplicit)(type, def.type)) {
        defaultVal = def.default || cfg.default;
      } else {
        defaultVal = def.type;
      }

      easing = (0, _easing.parseEasing)(def.easing || DEFAULT_EASING);
      interpolator = (0, _interpolator.parseInterpolator)(def.interpolator || cfg.interpolator);
    } else {
      if (typeof def === 'string') {
        type = 'string';
      } else {
        type = (0, _type.getType)(def);
      }

      cfg = (0, _type.getTypeCfg)(type);

      if (!cfg) {
        throw new Error("Unrecognized type ".concat(type));
      }

      easing = (0, _easing.parseEasing)(def.easing || DEFAULT_EASING);
      interpolator = (0, _interpolator.parseInterpolator)(cfg.interpolator);
      defaultVal = (0, _type.isExplicit)(type, def) ? cfg.default : def;
    }

    schema[prop] = {
      type: type,
      easing: easing,
      default: defaultVal,
      interpolator: interpolator,
      def: def
    };
  }

  return schema;
}

function createState(schema) {
  var state = {};
  var props = Object.keys(schema);

  for (var _i2 = 0, _props2 = props; _i2 < _props2.length; _i2++) {
    var prop = _props2[_i2];
    state[prop] = schema[prop].default;
  }

  return state;
}

/***/ }),

/***/ "./src/timeline.js":
/*!*************************!*\
  !*** ./src/timeline.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createTimeline = createTimeline;
exports.getTransitionsAtTime = getTransitionsAtTime;
exports.getStartState = getStartState;
exports.reduceTransitions = reduceTransitions;

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

var _schema = __webpack_require__(/*! @/schema */ "./src/schema.js");

var _transition = __webpack_require__(/*! @/transition */ "./src/transition.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Check for conflicting overlaps
// ---------------------------------------
function getConflictingFrames(timeline) {
  var markers = [];
  var idx;

  for (var l = timeline.length, i = 0; i < l; i++) {
    var m = timeline[i];

    if (m.type === 'start') {
      markers.push(m);
    } else {
      // stop tracking its partner
      idx = markers.indexOf(m.start);
      markers.splice(idx, 1);
    }

    for (var _l = markers.length, _i = 0; _i < _l; _i++) {
      var _m = markers[_i];

      for (var j = _i + 1; j < _l; j++) {
        var paths = (0, _util.getIntersectingPaths)(_m.transition.endState, markers[j].transition.endState);

        if (paths.length) {
          return {
            paths: paths,
            frames: [_m.frame, markers[j].frame]
          };
        }
      }
    }
  }

  return false;
}

function getPrevEndTime(timeline, idx, currTime) {
  for (var i = idx - 1; i >= 0; i--) {
    var ep = timeline[i]; // loop until previous end marker is found.
    // if they have the same end time, ignore

    if (ep.type === 'end' && currTime !== ep.time) {
      return ep.time;
    }
  }

  return 0;
} // Create a timeline array from specified frames
// ---------------------------------------


function createTimeline(schema) {
  var frames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  // timeline is an array of
  // marker = {
  //   type: 'start' | 'end'
  //   , time: Number
  //   , frame: {...}
  //   , start|end: <the other transiton>
  // }
  if (!frames.length) {
    return [];
  }

  var getTime = function getTime(v) {
    return v.time;
  };

  var defaultState = (0, _schema.createState)(schema);
  var timeline = []; // omit frames that are implicitly defined first

  var implicitFrames = frames.filter(function (f) {
    return f.meta.implicit;
  }).sort(function (a, b) {
    return a.meta.endTime - b.meta.endTime;
  });
  frames = frames.filter(function (f) {
    return !f.meta.implicit;
  });
  frames.forEach(function (frame) {
    var idx;
    var start = {
      type: 'start',
      frame: frame,
      time: frame.meta.endTime - frame.meta.duration
    };
    var end = {
      type: 'end',
      frame: frame,
      time: frame.meta.endTime
    };
    start.end = end;
    end.start = start;
    idx = (0, _util.sortedIndex)(timeline, end, getTime);
    timeline.splice(idx, 0, end); // "start"s need to be after "end"s of equal time... but not after its own end

    idx = Math.min(idx, (0, _util.sortedIndex)(timeline, start, getTime, true));
    timeline.splice(idx, 0, start);
  }); // TODO: is this necessary?
  // timeline.sort( (a, b) => {
  //   if ( a.time === b.time ){
  //     return a.type > b.type ? 1 : -1
  //   }
  //
  //   return 0
  // })
  // insert frames with implicit timing

  implicitFrames.forEach(function (frame) {
    var end = {
      type: 'end',
      frame: frame,
      time: frame.meta.endTime
    };
    var idx = (0, _util.sortedIndex)(timeline, end, getTime);
    var prevEndTime = getPrevEndTime(timeline, idx, end.time);
    var startTime = (0, _util.lerp)(end.time, prevEndTime, frame.meta.fractionalDuration);
    var start = {
      type: 'start',
      frame: frame,
      time: startTime
    };
    start.end = end;
    end.start = start; // add the end

    timeline.splice(idx, 0, end); // "start"s need to be after "end"s of equal time

    idx = Math.min(idx, (0, _util.sortedIndex)(timeline, start, getTime, true));
    timeline.splice(idx, 0, start);
  }); // assign inherited states

  var prevState = defaultState;
  timeline.forEach(function (m, idx) {
    // only go through ends
    if (m.type !== 'end') {
      return;
    }

    var transition = (0, _transition.createTransitionFromFrame)(m.start.time, m.time, m.frame, prevState);
    m.transition = transition;
    m.start.transition = transition;
    prevState = _objectSpread(_objectSpread({}, prevState), transition.endState);
  });
  prevState = defaultState; // assign a reduced end state to each marker

  timeline.forEach(function (m) {
    if (m.type !== 'end') {
      return;
    }

    var transitions = getTransitionsAtTime(timeline, m.time);
    prevState = reduceTransitions(schema, transitions, m.time, prevState);
    m.state = prevState;
  });
  var conflicts = getConflictingFrames(timeline);

  if (conflicts) {
    throw new Error('The following overlapping frames modify the same state paths:\n' + "paths: ".concat(conflicts.paths, "\n") + "frames: ".concat(JSON.stringify(conflicts.frames, null, 2)));
  }

  return timeline;
} // Get transition information needed
// at specified time from timeline
// ---------------------------------------


function getTransitionsAtTime(timeline, time) {
  var markers = [];
  var idx;

  for (var l = timeline.length, i = 0; i < l; i++) {
    var m = timeline[i];

    if (m.time > time) {
      break;
    }

    if (m.type === 'start') {
      markers.push(m);
    } else if (m.time !== time) {
      // if we're at the exact time of the end, track it
      // stop tracking its partner
      idx = markers.indexOf(m.start);
      markers.splice(idx, 1);
    }
  }

  return markers.map(function (a) {
    return a.transition;
  });
} // Get the cached complete state at the
// last end marker
// ---------------------------------------


function getStartState(timeline, time, defaultState) {
  var state = defaultState;

  for (var l = timeline.length, i = 0; i < l; i++) {
    var m = timeline[i];

    if (m.time > time) {
      return state;
    }

    if (m.type === 'end') {
      state = m.state;
    }
  }

  return state;
} // Get final state from transitions
// ---------------------------------------


function reduceTransitions(schema) {
  var transitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var initialState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return transitions.reduce(function (state, tr) {
    var progress = (0, _transition.getTimeFraction)(tr.startTime, tr.endTime, time);
    return Object.assign(state, (0, _transition.getInterpolatedState)(schema, tr.startState, tr.endState, progress, tr.easing));
  }, _objectSpread({}, initialState));
}

/***/ }),

/***/ "./src/timing/animation-frames.js":
/*!****************************************!*\
  !*** ./src/timing/animation-frames.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.animationFrames = animationFrames;

var _observable = __webpack_require__(/*! @/rx/observable */ "./src/rx/observable.js");

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

var tickStack = [];

function step() {
  window.requestAnimationFrame(step);
  var t = (0, _util.now)();

  for (var l = tickStack.length, i = 0; i < l; i++) {
    var fn = tickStack[i];
    fn && fn(t);
  }
}

step();

function animationFrames() {
  return new _observable.Observable(function (observer) {
    var to = (0, _util.now)();

    var cb = function cb(t) {
      return observer.next(t - to);
    };

    tickStack.push(cb);
    return function () {
      var i = tickStack.indexOf(cb);
      tickStack.splice(i, 1);
    };
  });
}

/***/ }),

/***/ "./src/timing/animation-sync.js":
/*!**************************************!*\
  !*** ./src/timing/animation-sync.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.animationSync = void 0;

var _observable = __webpack_require__(/*! @/rx/observable */ "./src/rx/observable.js");

var _animationFrames = __webpack_require__(/*! ./animation-frames */ "./src/timing/animation-frames.js");

var defaultThreshold = 5000 / 60; // 5 frames

var animationSync = function animationSync() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (timeSource) {
    return new _observable.Observable(function (sink) {
      var syncTime = 0;
      var isFresh = false;
      var isComplete = false;
      var lastFrameTime = 0;
      var lastTime = 0;
      var paused = true;
      var timeSub = (0, _animationFrames.animationFrames)().subscribe(function (frameTime) {
        var playbackRate = Number.isFinite(config.playbackRate) ? config.playbackRate : 1;
        var isPlaying = !paused && playbackRate !== 0;
        var threshold = config.threshold || defaultThreshold;
        var time = frameTime;

        if (!isPlaying) {
          time = isFresh ? syncTime : lastTime;
        } else {
          // extrapolate
          var dt = (frameTime - lastFrameTime) * playbackRate;
          time = lastTime + dt;

          if (Math.abs(time - syncTime) > threshold) {
            if (isFresh) {
              // resync
              time = syncTime;
            } else {
              paused = true;
            }
          }

          isFresh = false;
        }

        lastFrameTime = frameTime;
        lastTime = time;
        sink.next(time);

        if (isComplete) {
          sink.complete();
          timeSub.unsubscribe();
        }
      });
      var sub = timeSource.subscribe({
        next: function next(time) {
          paused = time === syncTime;
          syncTime = time;
          isFresh = true;
        },
        complete: function complete() {
          isComplete = true;
        },
        error: function error(e) {
          sink.error(e);
          timeSub.unsubscribe();
        }
      });
      return function () {
        sub.unsubscribe();
        timeSub.unsubscribe();
      };
    });
  };
};

exports.animationSync = animationSync;

/***/ }),

/***/ "./src/timing/animation-throttle.js":
/*!******************************************!*\
  !*** ./src/timing/animation-throttle.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.animationThrottle = void 0;

var _regulatedBy = __webpack_require__(/*! ./regulated-by */ "./src/timing/regulated-by.js");

var _animationFrames = __webpack_require__(/*! ./animation-frames */ "./src/timing/animation-frames.js");

var animationThrottle = function animationThrottle() {
  return function (source) {
    return (0, _regulatedBy.regulatedBy)((0, _animationFrames.animationFrames)(), true)(source);
  };
};

exports.animationThrottle = animationThrottle;

/***/ }),

/***/ "./src/timing/index.js":
/*!*****************************!*\
  !*** ./src/timing/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _animationFrames = __webpack_require__(/*! ./animation-frames */ "./src/timing/animation-frames.js");

Object.keys(_animationFrames).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _animationFrames[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animationFrames[key];
    }
  });
});

var _player = __webpack_require__(/*! ./player */ "./src/timing/player.js");

Object.keys(_player).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _player[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _player[key];
    }
  });
});

var _regulatedBy = __webpack_require__(/*! ./regulated-by */ "./src/timing/regulated-by.js");

Object.keys(_regulatedBy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _regulatedBy[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _regulatedBy[key];
    }
  });
});

var _animationThrottle = __webpack_require__(/*! ./animation-throttle */ "./src/timing/animation-throttle.js");

Object.keys(_animationThrottle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _animationThrottle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animationThrottle[key];
    }
  });
});

var _animationSync = __webpack_require__(/*! ./animation-sync */ "./src/timing/animation-sync.js");

Object.keys(_animationSync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _animationSync[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animationSync[key];
    }
  });
});

/***/ }),

/***/ "./src/timing/player.js":
/*!******************************!*\
  !*** ./src/timing/player.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Player = void 0;

var _time = __webpack_require__(/*! @/parsers/time */ "./src/parsers/time.js");

var _animationFrames = __webpack_require__(/*! ./animation-frames */ "./src/timing/animation-frames.js");

var _emitter = __webpack_require__(/*! ../util/emitter */ "./src/util/emitter.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Player = /*#__PURE__*/function (_Emitter) {
  _inherits(Player, _Emitter);

  var _super = _createSuper(Player);

  function Player(totalTime) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, function (sink) {
      var cb = function cb(time) {
        return sink.next(time);
      };

      _this.on('update', cb);

      _this.emit('update', _this._time);

      return function () {
        return _this.off('update', cb);
      };
    });
    _this.totalTime = (0, _time.parseTime)(totalTime);
    _this._clockTime = 0;
    _this._time = 0;
    _this.playbackRate = 1;
    _this._paused = true;
    _this._sub = (0, _animationFrames.animationFrames)().subscribe(function (t) {
      return _this.step(t);
    });
    return _this;
  }

  _createClass(Player, [{
    key: "progress",
    get: function get() {
      return this.totalTime > 0 ? this._time / this.totalTime * 100 : 0;
    },
    set: function set(p) {
      this.seek(Math.max(0, p) * this.totalTime / 100);
    }
  }, {
    key: "time",
    get: function get() {
      return this._time;
    },
    set: function set(t) {
      this.seek(t);
    }
  }, {
    key: "paused",
    get: function get() {
      return this._paused;
    },
    set: function set(p) {
      this.togglePause(p);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.off(true);

      this._sub.unsubscribe();

      this.emit('destroy');
    }
  }, {
    key: "togglePause",
    value: function togglePause(paused) {
      if (paused === undefined) {
        paused = !this._paused;
      }

      this._paused = !!paused;

      if (this._paused) {
        this.emit('pause');
      } else {
        this.emit('play');
      }

      this.emit('togglePause', this._paused);
      return this;
    }
  }, {
    key: "pause",
    value: function pause() {
      return this.togglePause(true);
    }
  }, {
    key: "play",
    value: function play() {
      return this.togglePause(false);
    } // Stops after it reaches time t

  }, {
    key: "playTo",
    value: function playTo(time) {
      if (this._time === time) {
        this.seek(time);
        return this;
      }

      this._playToTime = time;
      this._oldPlaybackRate = this.playbackRate;
      this.playbackRate = time >= this._time ? 1 : -1;
      return this.play();
    }
  }, {
    key: "seek",
    value: function seek(time) {
      this._time = time;
      this.emit('update', time);
      this.emit('seek', time);
      return this;
    }
  }, {
    key: "step",
    value: function step(now) {
      var clockTime = this._clockTime;
      var playbackRate = this.playbackRate;
      var dt = now - clockTime;
      var time = this._time;
      var totalTime = this.totalTime;
      this._clockTime = now; // if it's paused, don't step

      if (this._paused) {
        return this;
      }

      time += dt * playbackRate; // enable stopping at playToTime

      if (this._playToTime !== false && playbackRate * time >= playbackRate * this._playToTime) {
        this.togglePause(true);
        time = this._playToTime;
        this.playbackRate = this._oldPlaybackRate;
        this._playToTime = false;
      }

      if (playbackRate > 0 && time >= totalTime) {
        time = totalTime;
        this.togglePause(true);
        this.emit('end');
      } else if (playbackRate < 0 && time <= 0) {
        time = 0;
        this.togglePause(true);
        this.emit('end');
      }

      this._time = time;
      this.emit('update', time);
      return this;
    }
  }], [{
    key: "create",
    value: function create(totalTime) {
      return new Player(totalTime);
    }
  }]);

  return Player;
}(_emitter.Emitter);

exports.Player = Player;

/***/ }),

/***/ "./src/timing/regulated-by.js":
/*!************************************!*\
  !*** ./src/timing/regulated-by.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.regulatedBy = void 0;

var _observable = __webpack_require__(/*! @/rx/observable */ "./src/rx/observable.js");

var regulatedBy = function regulatedBy(regulator) {
  var onlyNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (source) {
    return new _observable.Observable(function (sink) {
      var isFresh = false;
      var value = null;
      var isComplete = false;
      var regSub = regulator.subscribe({
        next: function next() {
          if (onlyNew && !isFresh) {
            return;
          }

          sink.next(value);
          isFresh = false;

          if (isComplete) {
            sink.complete();
            regSub.unsubscribe();
          }
        },
        complete: function complete() {
          sink.complete();
        },
        error: function error(e) {
          sink.error(e);
        }
      });
      var sub = source.subscribe({
        next: function next(v) {
          value = v;
          isFresh = true;
        },
        complete: function complete() {
          isComplete = true;
        },
        error: function error(e) {
          sink.error(e);
          isFresh = false;
          value = null;
          regSub.unsubscribe();
        }
      });
      return function () {
        sub.unsubscribe();
        regSub.unsubscribe();
      };
    });
  };
};

exports.regulatedBy = regulatedBy;

/***/ }),

/***/ "./src/transition.js":
/*!***************************!*\
  !*** ./src/transition.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createTransitionFromFrame = createTransitionFromFrame;
exports.interpolateProperty = interpolateProperty;
exports.getInterpolatedState = getInterpolatedState;
exports.getTimeFraction = getTimeFraction;

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createTransitionFromFrame(startTime, endTime, frame, previousState) {
  var endState = frame.state;
  var startState = (0, _util.pick)(previousState, Object.keys(endState));
  var easing = frame.meta.easing;
  return {
    startTime: startTime,
    endTime: endTime,
    startState: startState,
    endState: endState,
    easing: easing,
    frame: frame
  };
}

function interpolateProperty(fn, from, to, progress) {
  return fn(from, to, progress);
}

function getInterpolatedState(schema, startState, endState, timeFraction, easing) {
  if (timeFraction <= 0) {
    return _objectSpread({}, startState);
  }

  if (timeFraction >= 1) {
    return _objectSpread({}, endState);
  }

  var nextState = _objectSpread({}, startState);

  for (var prop in endState) {
    var def = schema[prop];
    var val = void 0;

    if (!def) {
      // not specified in schema. just set
      val = endState[prop];
    } else {
      easing = easing || def.easing;
      var progress = easing(timeFraction);
      val = interpolateProperty(def.interpolator, startState[prop], endState[prop], progress);
    }

    nextState[prop] = val;
  }

  return nextState;
}

function getTimeFraction(startTime, endTime, time) {
  var duration = endTime - startTime;
  var frac = duration ? (time - startTime) / duration : 1;
  return (0, _util.clamp)(0, 1, frac);
}

/***/ }),

/***/ "./src/type.js":
/*!*********************!*\
  !*** ./src/type.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.registerType = registerType;
exports.getType = getType;
exports.isExplicit = isExplicit;
exports.getTypeCfg = getTypeCfg;
exports.NATIVE_TYPES = void 0;

var Interpolators = _interopRequireWildcard(__webpack_require__(/*! @/interpolators */ "./src/interpolators/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var NATIVE_TYPES = {
  'number': {
    type: 'number',
    default: 0,
    interpolator: Interpolators.linear
  },
  'string': {
    type: 'string',
    default: '',
    interpolator: Interpolators.string
  },
  'boolean': {
    type: 'boolean',
    default: false,
    interpolator: Interpolators.toggle
  },
  'array': {
    type: 'array',
    default: [],
    interpolator: Interpolators.array
  },
  'object': {
    type: 'object',
    default: {},
    interpolator: Interpolators.object
  }
};
exports.NATIVE_TYPES = NATIVE_TYPES;
var CUSTOM_TYPES = {};

function registerType(cfg) {
  var type = cfg.type,
      interpolator = cfg.interpolator;

  if (!type || !interpolator) {
    throw new Error('Custom types must have "type" and "interpolator" specified');
  }

  if (CUSTOM_TYPES[type]) {
    throw new Error("Custom type \"".concat(type, "\" is already registered"));
  }

  CUSTOM_TYPES[type] = {
    type: type,
    interpolator: interpolator,
    default: cfg.default
  };
}

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

  if (val === Object) {
    return 'object';
  }

  if (type === 'object') {
    throw new Error('Can not use implicit definition for objects or custom types');
  }

  return type;
} // determine if the schema declaration is an explicit declaration
// of the type. eg: (type: 2) is implicit number


function isExplicit(type, val) {
  if (type === 'string') {
    return val === 'string' || val === String;
  }

  if (type === 'number') {
    return val === 'number' || val === Number;
  }

  if (type === 'boolean') {
    return val === 'boolean' || val === Boolean;
  }

  if (type === 'array') {
    return val === 'array' || val === Array;
  }

  if (type === 'object') {
    return val === 'object' || val === Object;
  }

  return true;
}

function getTypeCfg(type) {
  return NATIVE_TYPES[type] || CUSTOM_TYPES[type];
}

/***/ }),

/***/ "./src/util/callable.js":
/*!******************************!*\
  !*** ./src/util/callable.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Callable = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Callable = /*#__PURE__*/function (_Function) {
  _inherits(Callable, _Function);

  var _super = _createSuper(Callable);

  function Callable() {
    var _this;

    _classCallCheck(this, Callable);

    _this = _super.call(this, '...args', 'return this._bound.__call__(...args)');
    _this._bound = _this.bind(_assertThisInitialized(_this));
    return _possibleConstructorReturn(_this, _this._bound);
  }

  _createClass(Callable, [{
    key: "__call__",
    value: function __call__() {}
  }]);

  return Callable;
}( /*#__PURE__*/_wrapNativeSuper(Function));

exports.Callable = Callable;

/***/ }),

/***/ "./src/util/emitter.js":
/*!*****************************!*\
  !*** ./src/util/emitter.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Emitter = void 0;

var _observable = __webpack_require__(/*! @/rx/observable */ "./src/rx/observable.js");

var _util = __webpack_require__(/*! @/util */ "./src/util/index.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var defaultPriority = 1;

function getPriority(val) {
  return val._priority_;
}

var Emitter = /*#__PURE__*/function (_Observable) {
  _inherits(Emitter, _Observable);

  var _super = _createSuper(Emitter);

  function Emitter(subscriber) {
    var _this;

    _classCallCheck(this, Emitter);

    _this = _super.call(this, subscriber); // ensure topics hash is initialized

    _this._topics = _this._topics || (_this._topics = {});
    return _this;
  }

  _createClass(Emitter, [{
    key: "fromEvent",
    value: function fromEvent(topic, priority) {
      var _this2 = this;

      return new _observable.Observable(function (sink) {
        var callback = function callback(v) {
          return sink.next(v);
        };

        _this2.on(topic, callback, priority);

        return function () {
          _this2.off(topic, callback);
        };
      });
    }
    /**
    * EventEmitter#on( topic, fn( data, event )[, scope, priority] ) -> this
    * EventEmitter#on( topicConfig[, scope, priority] ) -> this
    * - topic (String): The topic name
    * - topicConfig (Object): A config with key/value pairs of `{ topic: callbackFn, ... }`
    * - fn (Function): The callback function (if not using Object as previous argument)
    * - data (Mixed): The data sent from the call to `.emit()`
    * - event (Object): Event data, holding `.topic`, the topic, and `.handler`, the `fn` callback.
    * - scope (Object): The scope to bind callback to
    * - priority (Number): The priority of the callback (higher is earlier)
    *
    * Subscribe callback(s) to a topic(s).
    **/

  }, {
    key: "on",
    value: function on(topic, fn, scope, priority) {
      // check if we're subscribing to multiple topics
      // with an object
      if (_typeof(topic) === 'object') {
        for (var t in topic) {
          this.on(t, topic[t], fn, scope);
        }

        return this;
      }

      var listeners = this._topics[topic] || (this._topics[topic] = []);
      var orig = fn;

      if (_typeof(scope) === 'object') {
        fn = fn.bind(scope);
        fn._bindfn_ = orig;
        fn._one_ = orig._one_;
        fn._scope_ = scope;
      } else if (priority === undefined) {
        priority = scope;
      }

      fn._priority_ = priority === undefined ? defaultPriority : priority;
      var idx = (0, _util.sortedIndex)(listeners, fn, getPriority);
      listeners.splice(idx, 0, fn);
      return this;
    }
    /**
    * EventEmitter#off( topic, fn[, scope] ) -> this
    * EventEmitter#off( topicCfg ) -> this
    * - topic (String): topic The topic name. Specify `true` to remove all listeners for all topics
    * - topicCfg (Object): A config with key/value pairs of `{ topic: callbackFn, ... }`
    * - fn (Function): The original callback function. Specify `true` to remove all listeners for specified topic
    * - scope (Object): The scope the callback was bound to. This is important if you are
    *   binding methods that come from object prototypes.
    *
    * Unsubscribe callback(s) from topic(s).
    **/

  }, {
    key: "off",
    value: function off(topic, fn, scope) {
      if (topic === true) {
        // purge all listeners
        this._topics = {};
        return this;
      } // check if we're subscribing to multiple topics
      // with an object


      if (_typeof(topic) === 'object') {
        for (var t in topic) {
          this.off(t, topic[t]);
        }

        return this;
      }

      var listeners = this._topics[topic];

      if (!listeners) {
        return this;
      }

      if (fn === true) {
        // purge all listeners for topic
        this._topics[topic] = [];
        return this;
      }

      for (var i = 0, l = listeners.length; i < l; i++) {
        var listn = listeners[i];

        if ((listn._bindfn_ === fn || listn === fn) && (!scope || listn._scope_ === scope) // check the scope too if specified
        ) {
          listeners.splice(i, 1);
          break;
        }
      }

      return this;
    }
    /**
    * EventEmitter#emit( topic[, data] ) -> this
    * - topic (String): The topic name
    * - data (Mixed): The data to send
    *
    * Publish data to a topic.
    **/

  }, {
    key: "emit",
    value: function emit(topic, data) {
      var listeners = this._topics[topic];
      var l = listeners && listeners.length;

      if (!l) {
        return this;
      }

      var e = {}; // event data

      e.topic = topic; // reverse iterate so priorities work out correctly

      while (l--) {
        var handler = listeners[l];
        handler(data, e); // if _one_ flag is set, the unsubscribe

        if (handler._one_) {
          listeners.splice(l, 1);
        }
      }

      return this;
    }
    /**
    * EventEmitter#one( topic, fn( data, event )[, scope, priority] ) -> this
    * EventEmitter#one( topicConfig[, scope, priority] ) -> this
    * - topic (String): The topic name
    * - topicConfig (Object): A config with key/value pairs of `{ topic: callbackFn, ... }`
    * - fn (Function): The callback function (if not using Object as previous argument)
    * - data (Mixed): The data sent from the call to `.emit()`
    * - event (Object): Event data, holding `.topic`, the topic, and `.handler`, the `fn` callback.
    * - scope (Object): The scope to bind callback to
    * - priority (Number): The priority of the callback (higher is earlier)
    *
    * Subscribe callback(s) to a topic(s), but only ONCE.
    **/

  }, {
    key: "one",
    value: function one(topic, fn, scope) {
      // check if we're subscribing to multiple topics
      // with an object
      if (_typeof(topic) === 'object') {
        for (var t in topic) {
          this.one(t, topic[t], fn, scope);
        }

        return this;
      } // set the _one_ flag


      fn._one_ = true;
      this.on(topic, fn, scope);
      return this;
    }
  }]);

  return Emitter;
}(_observable.Observable);

exports.Emitter = Emitter;

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  identity: true,
  now: true,
  castArray: true,
  lerp: true,
  clamp: true,
  filterObjectValues: true,
  sanitizedObject: true,
  mapProperties: true,
  pick: true,
  mergeIntersecting: true,
  sortedIndex: true,
  getIntersectingPaths: true,
  pull: true,
  shortestModDist: true
};
exports.shortestModDist = shortestModDist;
exports.pull = exports.getIntersectingPaths = exports.sortedIndex = exports.mergeIntersecting = exports.pick = exports.mapProperties = exports.sanitizedObject = exports.filterObjectValues = exports.clamp = exports.lerp = exports.castArray = exports.now = exports.identity = void 0;

var _callable = __webpack_require__(/*! ./callable */ "./src/util/callable.js");

Object.keys(_callable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _callable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _callable[key];
    }
  });
});

var _emitter = __webpack_require__(/*! ./emitter */ "./src/util/emitter.js");

Object.keys(_emitter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _emitter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _emitter[key];
    }
  });
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var identity = function identity(a) {
  return a;
}; // From js - https://github.com/tweenjs/tween.js/blob/master/src/Tween.js
// Include a performance.now polyfill.
// In node.js, use process.hrtime.


exports.identity = identity;

var now = function () {
  if (typeof window === 'undefined' && typeof process !== 'undefined') {
    return function now() {
      var time = process.hrtime(); // Convert [seconds, nanoseconds] to milliseconds.

      return time[0] * 1000 + time[1] / 1000000;
    };
  } else if (typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined) {
    // In a browser, use window.performance.now if it is available.
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    return window.performance.now.bind(window.performance);
  } else if (Date.now !== undefined) {
    // Use Date.now if it is available.
    return Date.now;
  } else {
    // Otherwise, use 'new Date().getTime()'.
    return function now() {
      return new Date().getTime();
    };
  }
}();

exports.now = now;

var castArray = function castArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
};

exports.castArray = castArray;

var lerp = function lerp(from, to, t) {
  return from * (1 - t) + to * t;
}; // clamp


exports.lerp = lerp;

var clamp = function clamp(min, max, v) {
  return Math.min(Math.max(v, min), max);
};

exports.clamp = clamp;

var filterObjectValues = function filterObjectValues(obj, fn) {
  return Object.keys(obj).reduce(function (ret, key) {
    var value = obj[key];

    if (fn(value, key)) {
      ret[key] = value;
    }

    return ret;
  }, {});
};

exports.filterObjectValues = filterObjectValues;

var sanitizedObject = function sanitizedObject(obj) {
  return filterObjectValues(obj, function (v) {
    return v !== undefined;
  });
};

exports.sanitizedObject = sanitizedObject;

var mapProperties = function mapProperties(obj, fn) {
  return Object.keys(obj).reduce(function (ret, key) {
    ret[key] = fn(obj[key], key);
    return ret;
  }, {});
};

exports.mapProperties = mapProperties;

var pick = function pick(obj) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!keys) {
    // all
    return _objectSpread({}, obj);
  }

  return keys.reduce(function (out, k) {
    out[k] = obj[k];
    return out;
  }, {});
}; // Only take properties that are present in
// first object
// ---------------------------------------


exports.pick = pick;

var mergeIntersecting = function mergeIntersecting(first, second) {
  return _objectSpread(_objectSpread({}, first), pick(second, Object.keys(first)));
};
/**
 * util.sortedIndex( array, value[, callback] ) -> Number
 * - array (Array): The array to inspect
 * - value (Mixed): The value to evaluate
 * - callback (Function): Function called per iteration
 * - retHighest (Boolean): Specify returning the highest qualified index
 *
 * Implementation of [lodash.sortedIndex](http://lodash.com/docs#sortedIndex).
 **/


exports.mergeIntersecting = mergeIntersecting;

var sortedIndex = function sortedIndex(array, value, callback, retHighest) {
  var low = 0;
  var high = array ? array.length : low; // explicitly reference `identity` for better inlining in Firefox

  callback = callback || identity;
  value = callback(value);

  while (low < high) {
    var mid = low + high >>> 1;
    var computed = callback(array[mid]);

    if (retHighest ? computed <= value : computed < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

exports.sortedIndex = sortedIndex;

var getIntersectingPaths = function getIntersectingPaths(o1, o2) {
  return Object.keys(o1).filter(Object.prototype.hasOwnProperty.bind(o2));
};

exports.getIntersectingPaths = getIntersectingPaths;

var pull = function pull(arr, o) {
  var idx = arr.indexOf(o);
  arr.splice(idx, 1);
  return arr;
};

exports.pull = pull;

function shortestModDist(a0, a1, modulo) {
  var da = a1 - a0;
  var frac = da / modulo;
  var cycles = Math.floor(frac);
  var d = frac - cycles;
  var fix = d > 0.5 ? -1 : d < -0.5 ? 1 : 0;
  return (d + fix + cycles) * modulo;
}

/***/ }),

/***/ "./node_modules/core-js-pure/features/observable/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/features/observable/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/esnext.observable */ "./node_modules/core-js-pure/modules/esnext.observable.js");
__webpack_require__(/*! ../../modules/esnext.symbol.observable */ "./node_modules/core-js-pure/modules/esnext.symbol.observable.js");
__webpack_require__(/*! ../../modules/es.object.to-string */ "./node_modules/core-js-pure/modules/es.object.to-string.js");
__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js-pure/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = path.Observable;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-function.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/***/ (function(module) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-instance.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-instance.js ***!
  \************************************************************/
/***/ (function(module) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js-pure/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js-pure/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-iterator-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js-pure/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js-pure/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js-pure/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-iterator.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js-pure/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js-pure/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js-pure/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js-pure/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js-pure/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js-pure/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-well-known-symbol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-well-known-symbol.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/dom-iterables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/dom-iterables.js ***!
  \**************************************************************/
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js-pure/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js-pure/internals/is-forced.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js-pure/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js-pure/internals/get-iterator-method.js");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js-pure/internals/has.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/hidden-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/host-report-errors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/host-report-errors.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/html.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js-pure/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/inspect-source.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/inspect-source.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js-pure/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/internal-state.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js-pure/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js-pure/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js-pure/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js-pure/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/***/ (function(module) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-symbol.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterate.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterate.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js-pure/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js-pure/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js-pure/internals/iterator-close.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterator-close.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterator-close.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators-core.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js-pure/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators.js ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js-pure/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-weak-map.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-weak-map.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js-pure/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-create.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js-pure/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js-pure/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js-pure/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js-pure/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js-pure/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js-pure/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  if (iframe.style) {
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  }
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = document.domain && activeXDocument ?
    NullProtoObjectViaActiveX(activeXDocument) : // old IE
    NullProtoObjectViaIFrame() ||
    NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-properties.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js-pure/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js-pure/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js-pure/internals/to-property-key.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js-pure/internals/to-property-key.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js-pure/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js-pure/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js-pure/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys-internal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js-pure/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js-pure/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js-pure/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js-pure/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js-pure/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-to-string.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js-pure/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js-pure/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/ordinary-to-primitive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ordinary-to-primitive.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/redefine-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine-all.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js-pure/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/redefine.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/***/ (function(module) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-species.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-species.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js-pure/internals/to-string-tag-support.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js-pure/internals/object-to-string.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js-pure/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js-pure/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js-pure/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js-pure/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.16.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-multibyte.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js-pure/internals/to-integer.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js-pure/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");

// `String.prototype.codePointAt` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-absolute-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js-pure/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js-pure/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-integer.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
  \***********************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-length.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js-pure/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js-pure/internals/is-symbol.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js-pure/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = input[TO_PRIMITIVE];
  var result;
  if (exoticToPrim !== undefined) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-property-key.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-property-key.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js-pure/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js-pure/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-string-tag-support.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string-tag-support.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js-pure/internals/is-symbol.js");

module.exports = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/***/ (function(module) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js-pure/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js-pure/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js-pure/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js-pure/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js-pure/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js-pure/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js-pure/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \******************************************************************/
/***/ (function() {

// empty


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js-pure/internals/string-multibyte.js").charAt;
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js-pure/internals/to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js-pure/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js-pure/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.observable.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.observable.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-observable
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js-pure/internals/set-species.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js-pure/internals/an-instance.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js-pure/internals/redefine-all.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js-pure/internals/get-iterator.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js-pure/internals/iterate.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js-pure/internals/host-report-errors.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js-pure/internals/internal-state.js");

var OBSERVABLE = wellKnownSymbol('observable');
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscriptionState) {
  var cleanup = subscriptionState.cleanup;
  if (cleanup) {
    subscriptionState.cleanup = undefined;
    try {
      cleanup();
    } catch (error) {
      hostReportErrors(error);
    }
  }
};

var subscriptionClosed = function (subscriptionState) {
  return subscriptionState.observer === undefined;
};

var close = function (subscriptionState) {
  var subscription = subscriptionState.facade;
  if (!DESCRIPTORS) {
    subscription.closed = true;
    var subscriptionObserver = subscriptionState.subscriptionObserver;
    if (subscriptionObserver) subscriptionObserver.closed = true;
  } subscriptionState.observer = undefined;
};

var Subscription = function (observer, subscriber) {
  var subscriptionState = setInternalState(this, {
    cleanup: undefined,
    observer: anObject(observer),
    subscriptionObserver: undefined
  });
  var start;
  if (!DESCRIPTORS) this.closed = false;
  try {
    if (start = getMethod(observer.start)) start.call(observer, this);
  } catch (error) {
    hostReportErrors(error);
  }
  if (subscriptionClosed(subscriptionState)) return;
  var subscriptionObserver = subscriptionState.subscriptionObserver = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(subscriptionObserver);
    var subscription = cleanup;
    if (cleanup != null) subscriptionState.cleanup = typeof cleanup.unsubscribe === 'function'
      ? function () { subscription.unsubscribe(); }
      : aFunction(cleanup);
  } catch (error) {
    subscriptionObserver.error(error);
    return;
  } if (subscriptionClosed(subscriptionState)) cleanupSubscription(subscriptionState);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() {
    var subscriptionState = getInternalState(this);
    if (!subscriptionClosed(subscriptionState)) {
      close(subscriptionState);
      cleanupSubscription(subscriptionState);
    }
  }
});

if (DESCRIPTORS) defineProperty(Subscription.prototype, 'closed', {
  configurable: true,
  get: function () {
    return subscriptionClosed(getInternalState(this));
  }
});

var SubscriptionObserver = function (subscription) {
  setInternalState(this, { subscription: subscription });
  if (!DESCRIPTORS) this.closed = false;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscriptionState = getInternalState(getInternalState(this).subscription);
    if (!subscriptionClosed(subscriptionState)) {
      var observer = subscriptionState.observer;
      try {
        var nextMethod = getMethod(observer.next);
        if (nextMethod) nextMethod.call(observer, value);
      } catch (error) {
        hostReportErrors(error);
      }
    }
  },
  error: function error(value) {
    var subscriptionState = getInternalState(getInternalState(this).subscription);
    if (!subscriptionClosed(subscriptionState)) {
      var observer = subscriptionState.observer;
      close(subscriptionState);
      try {
        var errorMethod = getMethod(observer.error);
        if (errorMethod) errorMethod.call(observer, value);
        else hostReportErrors(value);
      } catch (err) {
        hostReportErrors(err);
      } cleanupSubscription(subscriptionState);
    }
  },
  complete: function complete() {
    var subscriptionState = getInternalState(getInternalState(this).subscription);
    if (!subscriptionClosed(subscriptionState)) {
      var observer = subscriptionState.observer;
      close(subscriptionState);
      try {
        var completeMethod = getMethod(observer.complete);
        if (completeMethod) completeMethod.call(observer);
      } catch (error) {
        hostReportErrors(error);
      } cleanupSubscription(subscriptionState);
    }
  }
});

if (DESCRIPTORS) defineProperty(SubscriptionObserver.prototype, 'closed', {
  configurable: true,
  get: function () {
    return subscriptionClosed(getInternalState(getInternalState(this).subscription));
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable');
  setInternalState(this, { subscriber: aFunction(subscriber) });
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    var length = arguments.length;
    return new Subscription(typeof observer === 'function' ? {
      next: observer,
      error: length > 1 ? arguments[1] : undefined,
      complete: length > 2 ? arguments[2] : undefined
    } : isObject(observer) ? observer : {}, getInternalState(this).subscriber);
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var observableMethod = getMethod(anObject(x)[OBSERVABLE]);
    if (observableMethod) {
      var observable = anObject(observableMethod.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    var iterator = getIterator(x);
    return new C(function (observer) {
      iterate(iterator, function (it, stop) {
        observer.next(it);
        if (observer.closed) return stop();
      }, { IS_ITERATOR: true, INTERRUPTED: true });
      observer.complete();
    });
  },
  of: function of() {
    var C = typeof this === 'function' ? this : $Observable;
    var length = arguments.length;
    var items = new Array(length);
    var index = 0;
    while (index < length) items[index] = arguments[index++];
    return new C(function (observer) {
      for (var i = 0; i < length; i++) {
        observer.next(items[i]);
        if (observer.closed) return;
      } observer.complete();
    });
  }
});

createNonEnumerableProperty($Observable.prototype, OBSERVABLE, function () { return this; });

$({ global: true }, {
  Observable: $Observable
});

setSpecies('Observable');


/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.observable.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js-pure/internals/define-well-known-symbol.js");

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ./es.array.iterator */ "./node_modules/core-js-pure/modules/es.array.iterator.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js-pure/internals/dom-iterables.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js-pure/internals/classof.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/core-js/features/symbol/observable.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/features/symbol/observable.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/esnext.symbol.observable */ "./node_modules/core-js/modules/esnext.symbol.observable.js");
var WrappedWellKnownSymbolModule = __webpack_require__(/*! ../../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");

module.exports = WrappedWellKnownSymbolModule.f('observable');


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.symbol.observable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/esnext.symbol.observable.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=intween.js.map