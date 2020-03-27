!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Copilot=e():t.Copilot=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e,r){"use strict";(function(t){function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={},a=function(t){return t};"undefined"==typeof window&&void 0!==t?o.now=function(){var e=t.hrtime();return 1e3*e[0]+e[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?o.now=window.performance.now.bind(window.performance):void 0!==Date.now?o.now=Date.now:o.now=function(){return(new Date).getTime()},o.castArray=function(t){return Array.isArray(t)?t:[t]},o.lerp=function(t,e,r){return t*(1-r)+e*r},o.clamp=function(t,e,r){return Math.min(Math.max(r,t),e)},o.mapProperties=function(t,e){return Object.keys(t).reduce((function(r,n){return r[n]=e(t[n],n),r}),{})},o.pick=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e?e.reduce((function(e,r){return e[r]=t[r],e}),{}):n({},t)},o.mergeIntersecting=function(t,e){return n({},t,{},o.pick(e,Object.keys(t)))},o.sortedIndex=function(t,e,r,n){var i=0,o=t?t.length:i;for(e=(r=r||a)(e);i<o;){var u=i+o>>>1,c=r(t[u]);(n?c<=e:c<e)?i=u+1:o=u}return i},o.getIntersectingPaths=function(t,e){return Object.keys(t).filter(Object.prototype.hasOwnProperty.bind(e))};var u=o;e.default=u}).call(this,r(9))},function(t,e){var r=t.exports={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){var e,r=.1;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=.1):e=.4*Math.asin(1/r)/(2*Math.PI),-r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},Out:function(t){var e,r=.1;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=.1):e=.4*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},InOut:function(t){var e,r=.1;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=.1):e=.4*Math.asin(1/r)/(2*Math.PI),(t*=2)<1?r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:r*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-r.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*r.Bounce.In(2*t):.5*r.Bounce.Out(2*t-1)+.5}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createTransitionFromFrame=function(t,e,r,n){var o=r.state,a=i.default.pick(n,Object.keys(o)),u=r.meta.easing;return{startTime:t,endTime:e,startState:a,endState:o,easing:u,frame:r}},e.interpolateProperty=c,e.getInterpolatedState=function(t,e,r,n,i){if(n<=0)return a({},e);if(n>=1)return a({},r);var o=a({},e);for(var u in r){var f=t[u],s=void 0;if(f){var l=(i=i||f.easing)(n);s=c(f.interpolator,o[u],r[u],l,f.interpolatorOpts)}else s=r[u];o[u]=s}return o},e.getTimeFraction=function(t,e,r){var n=e-t,o=n?(r-t)/n:1;return i.default.clamp(0,1,o)};var n,i=(n=r(0))&&n.__esModule?n:{default:n};function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return t(e,r,n,i)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.timeParser=function(t){if("string"!=typeof t)return t;var e=t.match(i);if(e)return o(e[2],e[4],e[5]);if(e=t.match(n)){var r=(""+e[2]).toLowerCase();if(!e[1]||"s"===r)return o(0,0,e[1]);if("m"===r)return o(0,e[1],0);if("h"===r)return o(e[1],0,0)}return 0};var n=/([0-9.]+)(s|m|h)?/,i=/((\d\d):)?((\d\d):(\d\d))/;function o(t,e,r){return t=parseFloat(t||0),e=parseFloat(e||0),r=parseFloat(r||0),Math.round(1e3*(3600*t+60*e+r))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createSchema=function(t){for(var e={},r=Object.keys(t),n=0,i=r;n<i.length;n++){var c=i[n],f=t[c],s=u,l=null,p=f.interpolatorOpts||{},d=void 0,y=void 0,h=void 0;if("object"===a(f)&&void 0!==f.type){if(d=(0,o.getType)(f.type),!(y=(0,o.getTypeCfg)(d)))throw new Error("Unrecognized type ".concat(d));h=(0,o.isExplicit)(d,f.type)?f.default||y.default:f.type,s=f.easing||u,l=f.interpolator||y.interpolator}else{if(d="string"==typeof f?"string":(0,o.getType)(f),!(y=(0,o.getTypeCfg)(d)))throw new Error("Unrecognized type ".concat(d));s=f.easing||u,l=y.interpolator,h=(0,o.isExplicit)(d,f)?y.default:f}e[c]={type:d,easing:s,default:h,interpolator:l,interpolatorOpts:p,def:f}}return e},e.createState=function(t){for(var e={},r=Object.keys(t),n=0,i=r;n<i.length;n++){var o=i[n];e[o]=t[o].default}return e};var n,i=(n=r(1))&&n.__esModule?n:{default:n},o=r(5);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u=i.default.Linear.None},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.registerType=function(t){var e=t.type,r=t.interpolator;if(!e||!r)throw new Error('Custom types must have "type" and "interpolator" specified');if(u[e])throw new Error('Custom type "'.concat(e,'" is already registered'));u[e]={type:e,interpolator:r,default:t.default}},e.getType=function(t){var e=o(t);if("string"===e)return t;if(t===Number||"number"===e)return"number";if(t===Boolean||"boolean"===e)return"boolean";if(t===String)return"string";if(t===Array||Array.isArray(t))return"array";if(t===Object)return"object";if("object"===e)throw new Error("Can not use implicit definition for objects or custom types");return e},e.isExplicit=function(t,e){if("string"===t)return"string"===e||e===String;if("number"===t)return"number"===e||e===Number;if("boolean"===t)return"boolean"===e||e===Boolean;if("array"===t)return"array"===e||e===Array;if("object"===t)return"object"===e||e===Object;return!0},e.getTypeCfg=function(t){return a[t]||u[t]},e.NATIVE_TYPES=void 0;var n,i=(n=r(6))&&n.__esModule?n:{default:n};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a={number:{type:"number",default:0,interpolator:i.default.Linear},string:{type:"string",default:"",interpolator:i.default.String},boolean:{type:"boolean",default:!1,interpolator:i.default.Step},array:{type:"array",default:[],interpolator:i.default.Array},object:{type:"object",default:{},interpolator:i.default.Object}};e.NATIVE_TYPES=a;var u={}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n};var o=2*Math.PI;function a(t,e,r){return((e-t)%r-r)%r}var u={Linear:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return n.modulo?t+a(t,e,n.modulo)*r:i.default.lerp(t,e,r)},Angle:function(t,e,r){arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t+a(t,e,o)*r},Array:function(t,e,r){arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e.map((function(e,n){return u.Linear(t[n]||0,e||0,r)}))},Object:function(t,e,r){arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i.default.mapProperties(t,(function(t,n){return u.Linear(t,e[n],r)}))},String:function(t,e,r){arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(r<=0)return t;var n=0|i.default.lerp(0,e.length,r);return e.substr(0,n)},Step:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.threshold,o=void 0===i?.5:i;return r>o?e:t}},c=u;e.default=c},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t){return t._priority_}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._topics=this._topics||(this._topics={})}var e,r,n;return e=t,(r=[{key:"on",value:function(t,e,r,n){var a,c,f;if("object"===o(t)){for(var s in t)this.on(s,t[s],e,r);return this}return a=this._topics[t]||(this._topics[t]=[]),c=e,"object"===o(r)?((e=e.bind(r))._bindfn_=c,e._one_=c._one_,e._scope_=r):void 0===n&&(n=r),e._priority_=void 0===n?1:n,f=i.default.sortedIndex(a,e,u),a.splice(f,0,e),this}},{key:"off",value:function(t,e,r){var n,i;if(!0===t)return this._topics={},this;if("object"===o(t)){for(var a in t)this.off(a,t[a]);return this}if(!(n=this._topics[t]))return this;if(!0===e)return this._topics[t]=[],this;for(var u=0,c=n.length;u<c;u++)if(!((i=n[u])._bindfn_!==e&&i!==e||r&&i._scope_!==r)){n.splice(u,1);break}return this}},{key:"emit",value:function(t,e){var r,n,i=this._topics[t],o=i&&i.length;if(!o)return this;for((n={}).topic=t,n.handler=r;o--;)(r=i[o])(e,n),r._one_&&i.splice(o,1);return this}},{key:"one",value:function(t,e,r){if("object"===o(t)){for(var n in t)this.one(n,t[n],e,r);return this}return e._one_=!0,this.on(t,e,r),this}}])&&a(e.prototype,r),n&&a(e,n),t}();e.default=c},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=m(r(1)),o=m(r(0)),a=m(r(10)),u=m(r(6)),c=m(r(13)),f=m(r(14)),s=m(r(15)),l=r(2),p=r(16),d=r(5),y=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=h();if(e&&e.has(t))return e.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=i?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}r.default=t,e&&e.set(t,r);return r}(r(17));function h(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return h=function(){return t},t}function m(t){return t&&t.__esModule?t:{default:t}}var b=function(t,e){return new a.default(t,e)};b.Util=o.default,b.Easing=i.default,b.Interpolators=u.default,b.Player=c.default,b.Syncher=f.default,b.Parsers=s.default,b.registerType=d.registerType,b.Animation={Smoothener:p.Smoothener,getTimeFraction:l.getTimeFraction,interpolateProperty:l.interpolateProperty},Object.assign(b,y);var v=b;e.default=v},function(t,e){var r,n,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,f=[],s=!1,l=-1;function p(){s&&c&&(s=!1,c.length?f=c.concat(f):l=-1,f.length&&d())}function d(){if(!s){var t=u(p);s=!0;for(var e=f.length;e;){for(c=f,f=[];++l<e;)c&&c[l].run();l=-1,e=f.length}c=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function h(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];f.push(new y(t,e)),1!==f.length||s||u(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=l(r(0)),i=l(r(1)),o=r(4),a=r(2),u=r(11),c=r(3),f=r(12),s=l(r(7));function l(t){return t&&t.__esModule?t:{default:t}}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O={defaultTransitionDuration:1e3,meddleTimeout:2e3,meddleRelaxDuration:500,meddleRelaxDelay:1e3},_=function(t){function e(t,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=b(this,v(e).call(this))).time=0,n.framesById={},n.frames=[],n.timeline=[],n._schema=(0,o.createSchema)(t),n._defaultState=(0,o.createState)(n._schema),n._state=y({},n._defaultState),n._prevState=y({},n._defaultState),n.options=Object.assign({},O,r),n.unmeddle(),n}var r,s,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,t),r=e,(s=[{key:"add",value:function(t,e){var r=(0,u.createFrame)(t,e,{duration:this.options.defaultTransitionDuration});if(r.meta.id&&this.framesById[r.meta.id])throw new Error('Frame with id "'.concat(r.meta.id,'" already defined'));return r.meta.id&&(this.framesById[r.meta.id]=r),this.frames.push(r),this.refreshTimeline(),this._updateState(),this}},{key:"refreshTimeline",value:function(){return this.timeline=(0,f.createTimeline)(this._schema,this.frames),this}},{key:"meddle",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"string"!=typeof t&&(r=e,e=t,t="__DEFAULT__");var n=r,o=n.relaxDuration,a=n.relaxDelay,u=n.freeze,c=n.easing;a=void 0!==a?a:this.options.meddleRelaxDelay,o=void 0!==o?o:this.options.meddleRelaxDuration;var f=this._meddles[t];return f||(f=this._meddles[t]={state:{}}),f.state=y({},f.state,{},e),f.startTime=!1,f.relaxState=null,f.active=!0,f.freeze=u,f.relaxDelay=a,f.relaxDuration=o,f.easing=c||i.default.Linear.None,this._updateState(),this}},{key:"unmeddle",value:function(t){return t?(delete this._meddles[t],this):(this._meddles={},this)}},{key:"freeze",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"__DEFAULT__";if(!0!==r){var n=this._meddles[r];return n&&(n.freeze=e),this}return Object.keys(this._meddles).forEach((function(r){t._meddles[r].freeze=e})),this}},{key:"getFrame",value:function(t){return this.framesById[t]}},{key:"seek",value:function(t){return t=(0,c.timeParser)(t),this.time=Math.min(t,this.totalTime),this._updateState(),this.emit("seek"),this}},{key:"_updateState",value:function(){var t=this,e=this.getStateAt(this.time);Object.keys(this._meddles).reduce((function(e,r){return t._assignMeddleState(e,r)}),e),this._prevState=this._state,this._state=e,this.emit("update")}},{key:"_assignMeddleState",value:function(t,e){var r=this._meddles[e||"__DEFAULT__"];if(!r.active)return t;if(r.freeze)return Object.assign(t,r.state);!1===r.startTime&&(r.startTime=this.time,r.endTime=r.startTime+r.relaxDelay+r.relaxDuration,r.relaxState=n.default.pick(this.getStateAt(r.endTime),Object.keys(r.state))),(this.time>=r.endTime||this.time<r.startTime)&&this.unmeddle(e),this.time>this.totalTime&&this.unmeddle(e);var i=(0,a.getTimeFraction)(r.startTime+r.relaxDelay,r.endTime,this.time),o=(0,a.getInterpolatedState)(this._schema,r.state,n.default.mergeIntersecting(r.relaxState,t),i,r.easing);return Object.assign(t,o),t}},{key:"getStateAt",value:function(t){if(t>=this.totalTime){var e=this.timeline[this.timeline.length-1],r=e.transition;return y({},e.state,{},r.relaxState)}var n=(0,f.getTransitionsAtTime)(this.timeline,t),i=(0,f.getStartState)(this.timeline,t,this._defaultState);return(0,f.reduceTransitions)(this._schema,n,t,i)}},{key:"to",value:function(t){var e=this.getFrame(t);return this.seek(e.meta.time)}},{key:"getTransitions",value:function(t){return t=t||this.time,(0,f.getTransitionsAtTime)(this.timeline,t)}},{key:"state",get:function(){return this._state}},{key:"totalTime",get:function(){return this.timeline[this.timeline.length-1].time}},{key:"progress",get:function(){return this.time/this.totalTime*100}}])&&m(r.prototype,s),l&&m(r,l),e}(s.default);e.default=_},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createFrame=function(t,e,r){if(!t)throw new Error("Can not create frame without state object");t=o({},t),e=function(t,e){var r=o({},e,{},t);for(var n in f)r[n]=f[n](r[n]);return r}(e||t.$meta,o({},r,{},c)),delete t.$meta;var n=u.exec(e.duration);n?(e.implicit=!0,e.fractionalDuration=parseFloat(n[1])/100):void 0!==e.startTime?e.duration=e.time-e.startTime:e.startTime=e.time-e.duration;return{state:t,meta:e}};var n=r(3);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=/^((\d{1,3})(\.\d*)?)%$/,c={time:0},f={time:n.timeParser,startTime:n.timeParser,duration:function(t){if(void 0!==t)return u.test(t)?t:(0,n.timeParser)(t)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createTimeline=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e.length)return[];var r=function(t){return t.time},n=(0,o.createState)(t),u=[],f=e.filter((function(t){return t.meta.implicit})).sort((function(t,e){return t.meta.time-e.meta.time}));(e=e.filter((function(t){return!t.meta.implicit}))).forEach((function(t){var e,n={type:"start",frame:t,time:t.meta.time-t.meta.duration},o={type:"end",frame:t,time:t.meta.time};n.end=o,o.start=n,e=i.default.sortedIndex(u,o,r),u.splice(e,0,o),e=i.default.sortedIndex(u,n,r,!0),u.splice(e,0,n)})),f.forEach((function(t){var e={type:"end",frame:t,time:t.meta.time},n=i.default.sortedIndex(u,e,r),o=l(u,n,e.time),a={type:"start",frame:t,time:i.default.lerp(e.time,o,t.meta.fractionalDuration)};a.end=e,e.start=a,u.splice(n,0,e),n=i.default.sortedIndex(u,a,r,!0),u.splice(n,0,a)}));var y=n;u.forEach((function(t,e){if("end"===t.type){var r=(0,a.createTransitionFromFrame)(t.start.time,t.time,t.frame,y);t.transition=r,t.start.transition=r,y=c({},y,{},r.endState)}})),y=n,u.forEach((function(e){if("end"===e.type){var r=p(u,e.time);y=d(t,r,e.time,y),e.state=y}}));var h=s(u);if(h)throw new Error("The following overlapping frames modify the same state paths:\n"+"paths: ".concat(h.paths,"\n")+"frames: ".concat(JSON.stringify(h.frames,null,2)));return u},e.getTransitionsAtTime=p,e.getStartState=function(t,e,r){for(var n=r,i=t.length,o=0;o<i;o++){var a=t[o];if(a.time>e)return n;"end"===a.type&&(n=a.state)}return n},e.reduceTransitions=d;var n,i=(n=r(0))&&n.__esModule?n:{default:n},o=r(4),a=r(2);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){for(var e,r=[],n=t.length,o=0;o<n;o++){var a=t[o];"start"===a.type?r.push(a):(e=r.indexOf(a.start),r.splice(e,1));for(var u=r.length,c=0;c<u;c++)for(var f=r[c],s=c+1;s<u;s++){var l=i.default.getIntersectingPaths(f.transition.endState,r[s].transition.endState);if(l.length)return{paths:l,frames:[f.frame,r[s].frame]}}}return!1}function l(t,e,r){for(var n=e-1;n>=0;n--){var i=t[n];if("end"===i.type&&r!==i.time)return i.time}return 0}function p(t,e){for(var r,n=[],i=t.length,o=0;o<i;o++){var a=t[o];if(a.time>=e)break;"start"===a.type?n.push(a):(r=n.indexOf(a.start),n.splice(r,1))}return n.map((function(t){return t.transition}))}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.reduce((function(e,n){var i=(0,a.getTimeFraction)(n.startTime,n.endTime,r);return Object.assign(e,(0,a.getInterpolatedState)(t,n.startState,n.endState,i,n.easing))}),c({},n))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return new h(t)};var n=a(r(0)),i=r(3),o=a(r(7));function a(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?p(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=[];!function t(){window.requestAnimationFrame(t);for(var e=n.default.now(),r=y.length,i=0;i<r;i++)y[i].step(e)}();var h=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.totalTime,a=void 0===o?0:o,u=r.playbackRate,f=void 0===u?1:u,d=r.manager;return c(this,e),(t=s(this,l(e).call(this))).totalTime=(0,i.timeParser)(a),t._clockTime=n.default.now(),t._time=0,t.playbackRate=f,t._paused=!0,d&&t.attach(d),y.push(p(t)),t}var r,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),r=e,(o=[{key:"destroy",value:function(){this.off(!0);var t=y.indexOf(this);y.splice(t,1),this.emit("destroy")}},{key:"attach",value:function(t){var e=this,r=function(){e.totalTime=t.totalTime};return this.on("update",(function(){t.seek(e.time)})),t.on("update",r),this.on("destroy",(function(){t.off("update",r)})),r(),this}},{key:"togglePause",value:function(t){return void 0===t&&(t=!this._paused),this._paused=!!t,this._paused?this.emit("pause"):this.emit("play"),this.emit("togglePause"),this}},{key:"pause",value:function(){return this.togglePause(!0)}},{key:"play",value:function(){return this.togglePause(!1)}},{key:"playTo",value:function(t){return this._time===t?(this.seek(t),this):(this._playToTime=t,this._oldPlaybackRate=this.playbackRate,this.playbackRate=t>=this._time?1:-1,this.play())}},{key:"seek",value:function(t){return this._time=t,this.emit("update",t),this.emit("seek",t),this}},{key:"step",value:function(t){var e=this._clockTime,r=this.playbackRate,n=t-e,i=this._time,o=this.totalTime;return this._clockTime=t,this.emit("animate",t),this._paused?this:(i+=n*r,!1!==this._playToTime&&r*i>=r*this._playToTime&&(this.togglePause(!0),i=this._playToTime,this.playbackRate=this._oldPlaybackRate,this._playToTime=!1),r>0&&i>=o?(i=o,this.togglePause(!0),this.emit("end")):r<0&&i<=0&&(i=0,this.togglePause(!0),this.emit("end")),this._time=i,this.emit("update",i),this.emit("playback",i),this)}},{key:"progress",get:function(){return this.totalTime>0?this._time/this.totalTime*100:0},set:function(t){this.seek(Math.max(0,t)*this.totalTime/100)}},{key:"time",get:function(){return this._time},set:function(t){this.seek(t)}},{key:"paused",get:function(){return this._paused},set:function(t){this.togglePause(t)}}])&&f(r.prototype,o),a&&f(r,a),e}(o.default)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.getTime,r=t.isPlaying,n=t.onFrame,o=t.getPlaybackRate,a=void 0===o?function(){return 1}:o,u=t.threshold,c=void 0===u?5e3/60:u;if(!e)throw new Error('Must call Syncher with a "getTime" function');if(!r)throw new Error('Must call Syncher with a "isPlaying" function');if(!n)throw new Error('Must call Syncher with a "onFrame" function');var f,s=!1,l=0,p=0,d=function t(){if(!s){window.requestAnimationFrame(t);var o,u=i.default.now(),d=e()||0,y=!!r(),h=+a();if(y&&f)o=p+(u-l)*h,Math.abs(o-d)>c&&(f=o=d);else f=d,o=d;l=u,p=o,n(o,u,{syncTime:d,isPlaying:y,playbackRate:h})}};function y(){s=!0}return d(),y};var n,i=(n=r(0))&&n.__esModule?n:{default:n}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var u=o?Object.getOwnPropertyDescriptor(t,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=t[a]}r.default=t,e&&e.set(t,r);return r}(r(3)));e.default=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Smoothener=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.duration,u=void 0===a?80:a,f=r.keys,s=void 0===f?null:f,l=r.easing,p=void 0===l?i.default.Cubic.Out:l,d=t.state,y=d,h=d,m=0,b=-1,v={duration:u,easing:p,get state(){return d}};return v.setState=function(t){var r=n.default.now();b=(m=e||r)+v.duration,y=n.default.pick(t,s),h=c({},d)},v.update=function(){var r=n.default.now();if(r>b)return e=r,d=y;if(e===r)return d;e=r;var i=(0,o.getTimeFraction)(m,b,r);return d=(0,o.getInterpolatedState)(t._schema,h,y,i,v.easing)},v};var n=a(r(0)),i=a(r(1)),o=r(2);function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){}]).default}));
//# sourceMappingURL=copilot.js.map