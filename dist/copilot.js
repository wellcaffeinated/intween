/*! Copilot version 0.5.0 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Copilot=e():t.Copilot=e()}(self,(function(){return function(){var t={482:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Smoothener=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.duration,u=void 0===a?80:a,f=r.keys,s=void 0===f?null:f,l=r.easing,p=void 0===l?i.default.Cubic.Out:l,y=t.state,d=y,m=y,h=0,b=-1,v={duration:u,easing:p,get state(){return y}};return v.setState=function(t){var r=n.default.now();b=(h=e||r)+v.duration,d=n.default.pick(t,s),m=c({},y)},v.update=function(){var r=n.default.now();if(r>b)return e=r,y=d;if(e===r)return y;e=r;var i=(0,o.getTimeFraction)(h,b,r);return y=(0,o.getInterpolatedState)(t._schema,m,d,i,v.easing)},v};var n=a(r(241)),i=a(r(908)),o=r(699);function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},16:function(){},561:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=r(241))&&n.__esModule?n:{default:n};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t){return t._priority_}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._topics=this._topics||(this._topics={})}var e,r,n;return e=t,(r=[{key:"on",value:function(t,e,r,n){if("object"===o(t)){for(var a in t)this.on(a,t[a],e,r);return this}var c=this._topics[t]||(this._topics[t]=[]),f=e;"object"===o(r)?((e=e.bind(r))._bindfn_=f,e._one_=f._one_,e._scope_=r):void 0===n&&(n=r),e._priority_=void 0===n?1:n;var s=i.default.sortedIndex(c,e,u);return c.splice(s,0,e),this}},{key:"off",value:function(t,e,r){if(!0===t)return this._topics={},this;if("object"===o(t)){for(var n in t)this.off(n,t[n]);return this}var i=this._topics[t];if(!i)return this;if(!0===e)return this._topics[t]=[],this;for(var a=0,u=i.length;a<u;a++){var c=i[a];if(!(c._bindfn_!==e&&c!==e||r&&c._scope_!==r)){i.splice(a,1);break}}return this}},{key:"emit",value:function(t,e){var r=this._topics[t],n=r&&r.length;if(!n)return this;var i={};for(i.topic=t;n--;){var o=r[n];o(e,i),o._one_&&r.splice(n,1)}return this}},{key:"one",value:function(t,e,r){if("object"===o(t)){for(var n in t)this.one(n,t[n],e,r);return this}return e._one_=!0,this.on(t,e,r),this}}])&&a(e.prototype,r),n&&a(e,n),t}();e.default=c},634:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createFrame=function(t,e,r){if(!t)throw new Error("Can not create frame without state object");t=o({},t),e=function(t,e){var r=o(o({},e),t);for(var n in f)r[n]=f[n](r[n]);return r}(e||t.$meta,o(o({},r),c)),delete t.$meta;var n=u.exec(e.duration);n?(e.implicit=!0,e.fractionalDuration=parseFloat(n[1])/100):void 0!==e.startTime?e.duration=e.time-e.startTime:e.startTime=e.time-e.duration;return{state:t,meta:e}};var n=r(76);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=/^((\d{1,3})(\.\d*)?)%$/,c={time:0},f={time:n.timeParser,startTime:n.timeParser,duration:function(t){if(void 0!==t)return u.test(t)?t:(0,n.timeParser)(t)}}},151:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=r(241))&&n.__esModule?n:{default:n};var o=2*Math.PI;function a(t,e,r){return((e-t)%r-r)%r}var u={Linear:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return n.modulo?t+a(t,e,n.modulo)*r:i.default.lerp(t,e,r)},Angle:function(t,e,r){return t+a(t,e,o)*r},Array:function(t,e,r){return e.map((function(e,n){return u.Linear(t[n]||0,e||0,r)}))},Object:function(t,e,r){return i.default.mapProperties(t,(function(t,n){return u.Linear(t,e[n],r)}))},String:function(t,e,r){if(r<=0)return t;var n=0|i.default.lerp(0,e.length,r);return e.substr(0,n)},Step:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.threshold,o=void 0===i?.5:i;return r>o?e:t}},c=u;e.default=c},445:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=p(r(241)),o=p(r(908)),a=r(152),u=r(699),c=r(634),f=r(76),s=r(156),l=p(r(561));function p(t){return t&&t.__esModule?t:{default:t}}function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=g(t);if(e){var i=g(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return O(this,r)}}function O(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j={defaultTransitionDuration:1e3,meddleTimeout:2e3,meddleRelaxDuration:500,meddleRelaxDelay:1e3},_="__DEFAULT__",w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(p,t);var e,r,n,l=v(p);function p(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(r=l.call(this)).time=0,r.framesById={},r.frames=[],r.timeline=[],r._schema=(0,a.createSchema)(t),r._defaultState=(0,a.createState)(r._schema),r._state=d({},r._defaultState),r._prevState=d({},r._defaultState),r.options=Object.assign({},j,e),r.unmeddle(),r}return e=p,(r=[{key:"state",get:function(){return this._state}},{key:"totalTime",get:function(){return this.timeline[this.timeline.length-1].time}},{key:"progress",get:function(){return this.time/this.totalTime*100}},{key:"add",value:function(t,e){var r=(0,c.createFrame)(t,e,{duration:this.options.defaultTransitionDuration});if(r.meta.id&&this.framesById[r.meta.id])throw new Error('Frame with id "'.concat(r.meta.id,'" already defined'));return r.meta.id&&(this.framesById[r.meta.id]=r),this.frames.push(r),this.refreshTimeline(),this._updateState(),this}},{key:"refreshTimeline",value:function(){return this.timeline=(0,s.createTimeline)(this._schema,this.frames),this}},{key:"meddle",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"string"!=typeof t&&(r=e,e=t,t=_);var n=r,i=n.relaxDuration,a=n.relaxDelay,u=n.freeze,c=n.easing;a=void 0!==a?a:this.options.meddleRelaxDelay,i=void 0!==i?i:this.options.meddleRelaxDuration;var f=this._meddles[t];return f||(f=this._meddles[t]={state:{}}),f.state=d(d({},f.state),e),f.startTime=!1,f.relaxState=null,f.active=!0,f.freeze=u,f.relaxDelay=a,f.relaxDuration=i,f.easing=c||o.default.Linear.None,this._updateState(),this}},{key:"unmeddle",value:function(t){return t?(delete this._meddles[t],this):(this._meddles={},this)}},{key:"freeze",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_;if(!0!==r){var n=this._meddles[r];return n&&(n.freeze=e),this}return Object.keys(this._meddles).forEach((function(r){t._meddles[r].freeze=e})),this}},{key:"getFrame",value:function(t){return this.framesById[t]}},{key:"seek",value:function(t){return t=(0,f.timeParser)(t),this.time=Math.min(t,this.totalTime),this._updateState(),this.emit("seek"),this}},{key:"_updateState",value:function(){var t=this,e=this.getStateAt(this.time);Object.keys(this._meddles).reduce((function(e,r){return t._assignMeddleState(e,r)}),e),this._prevState=this._state,this._state=e,this.emit("update")}},{key:"_assignMeddleState",value:function(t,e){var r=this._meddles[e||_];if(!r.active)return t;if(r.freeze)return Object.assign(t,r.state);!1===r.startTime&&(r.startTime=this.time,r.endTime=r.startTime+r.relaxDelay+r.relaxDuration,r.relaxState=i.default.pick(this.getStateAt(r.endTime),Object.keys(r.state))),(this.time>=r.endTime||this.time<r.startTime)&&this.unmeddle(e),this.time>this.totalTime&&this.unmeddle(e);var n=(0,u.getTimeFraction)(r.startTime+r.relaxDelay,r.endTime,this.time),o=(0,u.getInterpolatedState)(this._schema,r.state,i.default.mergeIntersecting(r.relaxState,t),n,r.easing);return Object.assign(t,o),t}},{key:"getStateAt",value:function(t){if(t>=this.totalTime){var e=this.timeline[this.timeline.length-1],r=e.transition;return d(d({},e.state),r.relaxState)}var n=(0,s.getTransitionsAtTime)(this.timeline,t),i=(0,s.getStartState)(this.timeline,t,this._defaultState);return(0,s.reduceTransitions)(this._schema,n,t,i)}},{key:"to",value:function(t){var e=this.getFrame(t);return this.seek(e.meta.time)}},{key:"getTransitions",value:function(t){return t=t||this.time,(0,s.getTransitionsAtTime)(this.timeline,t)}}])&&h(e.prototype,r),n&&h(e,n),p}(l.default);e.default=w},701:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(i=function(t){return t?r:e})(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var r=i(e);if(r&&r.has(t))return r.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var c=a?Object.getOwnPropertyDescriptor(t,u):null;c&&(c.get||c.set)?Object.defineProperty(o,u,c):o[u]=t[u]}o.default=t,r&&r.set(t,o);return o}(r(76)));e.default=u},76:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.timeParser=function(t){if("string"!=typeof t)return t;var e=t.match(n);if(e)return i(e[2],e[4],e[5]);if(e=t.match(r)){var o=(""+e[2]).toLowerCase();if(!e[1]||"s"===o)return i(0,0,e[1]);if("m"===o)return i(0,e[1],0);if("h"===o)return i(e[1],0,0)}return 0};var r=/([0-9.]+)(s|m|h)?/,n=/((\d\d):)?((\d\d):(\d\d))/;function i(t,e,r){return t=parseFloat(t||0),e=parseFloat(e||0),r=parseFloat(r||0),Math.round(1e3*(3600*t+60*e+r))}},285:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return new h(t)};var i=u(r(241)),o=r(76),a=u(r(561));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var i=d(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return p(this,r)}}function p(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?y(t):e}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=[];!function t(){window.requestAnimationFrame(t);for(var e=i.default.now(),r=m.length,n=0;n<r;n++)m[n].step(e)}();var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(u,t);var e,r,n,a=l(u);function u(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.totalTime,n=void 0===r?0:r,f=e.playbackRate,s=void 0===f?1:f,l=e.manager;return c(this,u),(t=a.call(this)).totalTime=(0,o.timeParser)(n),t._clockTime=i.default.now(),t._time=0,t.playbackRate=s,t._paused=!0,l&&t.attach(l),m.push(y(t)),t}return e=u,(r=[{key:"progress",get:function(){return this.totalTime>0?this._time/this.totalTime*100:0},set:function(t){this.seek(Math.max(0,t)*this.totalTime/100)}},{key:"time",get:function(){return this._time},set:function(t){this.seek(t)}},{key:"paused",get:function(){return this._paused},set:function(t){this.togglePause(t)}},{key:"destroy",value:function(){this.off(!0);var t=m.indexOf(this);m.splice(t,1),this.emit("destroy")}},{key:"attach",value:function(t){var e=this,r=function(){e.totalTime=t.totalTime};return this.on("update",(function(){t.seek(e.time)})),t.on("update",r),this.on("destroy",(function(){t.off("update",r)})),r(),this}},{key:"togglePause",value:function(t){return void 0===t&&(t=!this._paused),this._paused=!!t,this._paused?this.emit("pause"):this.emit("play"),this.emit("togglePause"),this}},{key:"pause",value:function(){return this.togglePause(!0)}},{key:"play",value:function(){return this.togglePause(!1)}},{key:"playTo",value:function(t){return this._time===t?(this.seek(t),this):(this._playToTime=t,this._oldPlaybackRate=this.playbackRate,this.playbackRate=t>=this._time?1:-1,this.play())}},{key:"seek",value:function(t){return this._time=t,this.emit("update",t),this.emit("seek",t),this}},{key:"step",value:function(t){var e=this._clockTime,r=this.playbackRate,n=t-e,i=this._time,o=this.totalTime;return this._clockTime=t,this.emit("animate",t),this._paused||(i+=n*r,!1!==this._playToTime&&r*i>=r*this._playToTime&&(this.togglePause(!0),i=this._playToTime,this.playbackRate=this._oldPlaybackRate,this._playToTime=!1),r>0&&i>=o?(i=o,this.togglePause(!0),this.emit("end")):r<0&&i<=0&&(i=0,this.togglePause(!0),this.emit("end")),this._time=i,this.emit("update",i),this.emit("playback",i)),this}}])&&f(e.prototype,r),n&&f(e,n),u}(a.default)},152:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createSchema=function(t){for(var e={},r=Object.keys(t),n=0,i=r;n<i.length;n++){var c=i[n],f=t[c],s=u,l=null,p=f.interpolatorOpts||{},y=void 0,d=void 0,m=void 0;if("object"===a(f)&&void 0!==f.type){if(y=(0,o.getType)(f.type),!(d=(0,o.getTypeCfg)(y)))throw new Error("Unrecognized type ".concat(y));m=(0,o.isExplicit)(y,f.type)?f.default||d.default:f.type,s=f.easing||u,l=f.interpolator||d.interpolator}else{if(y="string"==typeof f?"string":(0,o.getType)(f),!(d=(0,o.getTypeCfg)(y)))throw new Error("Unrecognized type ".concat(y));s=f.easing||u,l=d.interpolator,m=(0,o.isExplicit)(y,f)?d.default:f}e[c]={type:y,easing:s,default:m,interpolator:l,interpolatorOpts:p,def:f}}return e},e.createState=function(t){for(var e={},r=Object.keys(t),n=0,i=r;n<i.length;n++){var o=i[n];e[o]=t[o].default}return e};var n,i=(n=r(908))&&n.__esModule?n:{default:n},o=r(488);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u=i.default.Linear.None},392:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.getTime,r=t.isPlaying,n=t.onFrame,o=t.getPlaybackRate,a=void 0===o?function(){return 1}:o,u=t.threshold,c=void 0===u?5e3/60:u;if(!e)throw new Error('Must call Syncher with a "getTime" function');if(!r)throw new Error('Must call Syncher with a "isPlaying" function');if(!n)throw new Error('Must call Syncher with a "onFrame" function');var f,s=!1,l=0,p=0,y=function t(){if(!s){window.requestAnimationFrame(t);var o,u=i.default.now(),y=e()||0,d=!!r(),m=+a();if(d&&f)o=p+(u-l)*m,Math.abs(o-y)>c&&(f=o=y);else f=y,o=y;l=u,p=o,n(o,u,{syncTime:y,isPlaying:d,playbackRate:m})}};function d(){s=!0}return y(),d};var n,i=(n=r(241))&&n.__esModule?n:{default:n}},156:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createTimeline=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e.length)return[];var r=function(t){return t.time},n=(0,o.createState)(t),u=[],f=e.filter((function(t){return t.meta.implicit})).sort((function(t,e){return t.meta.time-e.meta.time}));(e=e.filter((function(t){return!t.meta.implicit}))).forEach((function(t){var e,n={type:"start",frame:t,time:t.meta.time-t.meta.duration},o={type:"end",frame:t,time:t.meta.time};n.end=o,o.start=n,e=i.default.sortedIndex(u,o,r),u.splice(e,0,o),e=i.default.sortedIndex(u,n,r,!0),u.splice(e,0,n)})),f.forEach((function(t){var e={type:"end",frame:t,time:t.meta.time},n=i.default.sortedIndex(u,e,r),o=l(u,n,e.time),a={type:"start",frame:t,time:i.default.lerp(e.time,o,t.meta.fractionalDuration)};a.end=e,e.start=a,u.splice(n,0,e),n=i.default.sortedIndex(u,a,r,!0),u.splice(n,0,a)}));var d=n;u.forEach((function(t,e){if("end"===t.type){var r=(0,a.createTransitionFromFrame)(t.start.time,t.time,t.frame,d);t.transition=r,t.start.transition=r,d=c(c({},d),r.endState)}})),d=n,u.forEach((function(e){if("end"===e.type){var r=p(u,e.time);d=y(t,r,e.time,d),e.state=d}}));var m=s(u);if(m)throw new Error("The following overlapping frames modify the same state paths:\n"+"paths: ".concat(m.paths,"\n")+"frames: ".concat(JSON.stringify(m.frames,null,2)));return u},e.getTransitionsAtTime=p,e.getStartState=function(t,e,r){for(var n=r,i=t.length,o=0;o<i;o++){var a=t[o];if(a.time>e)return n;"end"===a.type&&(n=a.state)}return n},e.reduceTransitions=y;var n,i=(n=r(241))&&n.__esModule?n:{default:n},o=r(152),a=r(699);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){for(var e,r=[],n=t.length,o=0;o<n;o++){var a=t[o];"start"===a.type?r.push(a):(e=r.indexOf(a.start),r.splice(e,1));for(var u=r.length,c=0;c<u;c++)for(var f=r[c],s=c+1;s<u;s++){var l=i.default.getIntersectingPaths(f.transition.endState,r[s].transition.endState);if(l.length)return{paths:l,frames:[f.frame,r[s].frame]}}}return!1}function l(t,e,r){for(var n=e-1;n>=0;n--){var i=t[n];if("end"===i.type&&r!==i.time)return i.time}return 0}function p(t,e){for(var r,n=[],i=t.length,o=0;o<i;o++){var a=t[o];if(a.time>=e)break;"start"===a.type?n.push(a):(r=n.indexOf(a.start),n.splice(r,1))}return n.map((function(t){return t.transition}))}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.reduce((function(e,n){var i=(0,a.getTimeFraction)(n.startTime,n.endTime,r);return Object.assign(e,(0,a.getInterpolatedState)(t,n.startState,n.endState,i,n.easing))}),c({},n))}},699:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createTransitionFromFrame=function(t,e,r,n){var o=r.state,a=i.default.pick(n,Object.keys(o)),u=r.meta.easing;return{startTime:t,endTime:e,startState:a,endState:o,easing:u,frame:r}},e.interpolateProperty=c,e.getInterpolatedState=function(t,e,r,n,i){if(n<=0)return a({},e);if(n>=1)return a({},r);var o=a({},e);for(var u in r){var f=t[u],s=void 0;if(f){var l=(i=i||f.easing)(n);s=c(f.interpolator,o[u],r[u],l,f.interpolatorOpts)}else s=r[u];o[u]=s}return o},e.getTimeFraction=function(t,e,r){var n=e-t,o=n?(r-t)/n:1;return i.default.clamp(0,1,o)};var n,i=(n=r(241))&&n.__esModule?n:{default:n};function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return t(e,r,n,i)}},488:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.registerType=function(t){var e=t.type,r=t.interpolator;if(!e||!r)throw new Error('Custom types must have "type" and "interpolator" specified');if(u[e])throw new Error('Custom type "'.concat(e,'" is already registered'));u[e]={type:e,interpolator:r,default:t.default}},e.getType=function(t){var e=o(t);if("string"===e)return t;if(t===Number||"number"===e)return"number";if(t===Boolean||"boolean"===e)return"boolean";if(t===String)return"string";if(t===Array||Array.isArray(t))return"array";if(t===Object)return"object";if("object"===e)throw new Error("Can not use implicit definition for objects or custom types");return e},e.isExplicit=function(t,e){if("string"===t)return"string"===e||e===String;if("number"===t)return"number"===e||e===Number;if("boolean"===t)return"boolean"===e||e===Boolean;if("array"===t)return"array"===e||e===Array;if("object"===t)return"object"===e||e===Object;return!0},e.getTypeCfg=function(t){return a[t]||u[t]},e.NATIVE_TYPES=void 0;var n,i=(n=r(151))&&n.__esModule?n:{default:n};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a={number:{type:"number",default:0,interpolator:i.default.Linear},string:{type:"string",default:"",interpolator:i.default.String},boolean:{type:"boolean",default:!1,interpolator:i.default.Step},array:{type:"array",default:[],interpolator:i.default.Array},object:{type:"object",default:{},interpolator:i.default.Object}};e.NATIVE_TYPES=a;var u={}},241:function(t,e){"use strict";function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={},a=function(t){return t};"undefined"==typeof window&&"undefined"!=typeof process?o.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?o.now=window.performance.now.bind(window.performance):void 0!==Date.now?o.now=Date.now:o.now=function(){return(new Date).getTime()},o.castArray=function(t){return Array.isArray(t)?t:[t]},o.lerp=function(t,e,r){return t*(1-r)+e*r},o.clamp=function(t,e,r){return Math.min(Math.max(r,t),e)},o.mapProperties=function(t,e){return Object.keys(t).reduce((function(r,n){return r[n]=e(t[n],n),r}),{})},o.pick=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e?e.reduce((function(e,r){return e[r]=t[r],e}),{}):n({},t)},o.mergeIntersecting=function(t,e){return n(n({},t),o.pick(e,Object.keys(t)))},o.sortedIndex=function(t,e,r,n){var i=0,o=t?t.length:i;for(e=(r=r||a)(e);i<o;){var u=i+o>>>1,c=r(t[u]);(n?c<=e:c<e)?i=u+1:o=u}return i},o.getIntersectingPaths=function(t,e){return Object.keys(t).filter(Object.prototype.hasOwnProperty.bind(e))};var u=o;e.default=u},908:function(t){var e=t.exports={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){var e,r=.1;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=.1):e=.4*Math.asin(1/r)/(2*Math.PI),-r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},Out:function(t){var e,r=.1;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=.1):e=.4*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},InOut:function(t){var e,r=.1,n=.4;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=.1):e=n*Math.asin(1/r)/(2*Math.PI),(t*=2)<1?r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:r*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-e.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*e.Bounce.In(2*t):.5*e.Bounce.Out(2*t-1)+.5}}}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}var n={};return function(){"use strict";var t=n;function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.default=void 0;var i=h(r(908)),o=h(r(241)),a=h(r(445)),u=h(r(151)),c=h(r(285)),f=h(r(392)),s=h(r(701)),l=r(699),p=r(482),y=r(488),d=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!=typeof t)return{default:t};var n=m(r);if(n&&n.has(t))return n.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var u=o?Object.getOwnPropertyDescriptor(t,a):null;u&&(u.get||u.set)?Object.defineProperty(i,a,u):i[a]=t[a]}i.default=t,n&&n.set(t,i);return i}(r(16));function m(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(m=function(t){return t?r:e})(t)}function h(t){return t&&t.__esModule?t:{default:t}}var b=function(t,e){return new a.default(t,e)};b.Util=o.default,b.Easing=i.default,b.Interpolators=u.default,b.Player=c.default,b.Syncher=f.default,b.Parsers=s.default,b.registerType=y.registerType,b.Animation={Smoothener:p.Smoothener,getTimeFraction:l.getTimeFraction,interpolateProperty:l.interpolateProperty},Object.assign(b,d);var v=b;t.default=v}(),n=n.default}()}));
//# sourceMappingURL=copilot.js.map