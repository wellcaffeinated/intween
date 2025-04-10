var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/core-js/internals/global-this.js"(exports, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/core-js/internals/path.js
var require_path = __commonJS({
  "node_modules/core-js/internals/path.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    module2.exports = globalThis2;
  }
});

// node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/core-js/internals/fails.js"(exports, module2) {
    "use strict";
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty2 = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty2(toObject(it), key);
    };
  }
});

// node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.41.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/core-js/internals/uid.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString2 = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString2(++id + postfix, 36);
    };
  }
});

// node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/core-js/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/core-js/internals/environment-v8-version.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process2 = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process2 && process2.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js/internals/well-known-symbol-wrapped.js
var require_well_known_symbol_wrapped = __commonJS({
  "node_modules/core-js/internals/well-known-symbol-wrapped.js"(exports) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    exports.f = wellKnownSymbol;
  }
});

// node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/core-js/internals/document-create-element.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js/internals/get-built-in.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js/internals/is-symbol.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/core-js/internals/try-to-string.js"(exports, module2) {
    "use strict";
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/core-js/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/internals/to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/core-js/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/internals/well-known-symbol-define.js
var require_well_known_symbol_define = __commonJS({
  "node_modules/core-js/internals/well-known-symbol-define.js"(exports, module2) {
    "use strict";
    var path = require_path();
    var hasOwn = require_has_own_property();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    var defineProperty = require_object_define_property().f;
    module2.exports = function(NAME) {
      var Symbol2 = path.Symbol || (path.Symbol = {});
      if (!hasOwn(Symbol2, NAME)) defineProperty(Symbol2, NAME, {
        value: wrappedWellKnownSymbolModule.f(NAME)
      });
    };
  }
});

// node_modules/core-js/modules/esnext.symbol.observable.js
var require_esnext_symbol_observable = __commonJS({
  "node_modules/core-js/modules/esnext.symbol.observable.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("observable");
  }
});

// node_modules/core-js/full/symbol/observable.js
var require_observable = __commonJS({
  "node_modules/core-js/full/symbol/observable.js"(exports, module2) {
    "use strict";
    require_esnext_symbol_observable();
    var WrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    module2.exports = WrappedWellKnownSymbolModule.f("observable");
  }
});

// node_modules/core-js/features/symbol/observable.js
var require_observable2 = __commonJS({
  "node_modules/core-js/features/symbol/observable.js"(exports, module2) {
    "use strict";
    module2.exports = require_observable();
  }
});

// node_modules/core-js-pure/internals/global-this.js
var require_global_this2 = __commonJS({
  "node_modules/core-js-pure/internals/global-this.js"(exports, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/core-js-pure/internals/fails.js
var require_fails2 = __commonJS({
  "node_modules/core-js-pure/internals/fails.js"(exports, module2) {
    "use strict";
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/core-js-pure/internals/function-bind-native.js
var require_function_bind_native2 = __commonJS({
  "node_modules/core-js-pure/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails2();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js-pure/internals/function-apply.js
var require_function_apply = __commonJS({
  "node_modules/core-js-pure/internals/function-apply.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native2();
    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var call = FunctionPrototype.call;
    module2.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
      return call.apply(apply, arguments);
    });
  }
});

// node_modules/core-js-pure/internals/function-uncurry-this.js
var require_function_uncurry_this2 = __commonJS({
  "node_modules/core-js-pure/internals/function-uncurry-this.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native2();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js-pure/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js-pure/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this2();
    var toString2 = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString2(it), 8, -1);
    };
  }
});

// node_modules/core-js-pure/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/core-js-pure/internals/function-uncurry-this-clause.js"(exports, module2) {
    "use strict";
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this2();
    module2.exports = function(fn) {
      if (classofRaw(fn) === "Function") return uncurryThis(fn);
    };
  }
});

// node_modules/core-js-pure/internals/is-callable.js
var require_is_callable2 = __commonJS({
  "node_modules/core-js-pure/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js-pure/internals/descriptors.js
var require_descriptors2 = __commonJS({
  "node_modules/core-js-pure/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails2();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/core-js-pure/internals/function-call.js
var require_function_call2 = __commonJS({
  "node_modules/core-js-pure/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native2();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/core-js-pure/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js-pure/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/core-js-pure/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/core-js-pure/internals/create-property-descriptor.js"(exports, module2) {
    "use strict";
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js-pure/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/core-js-pure/internals/indexed-object.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this2();
    var fails = require_fails2();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/core-js-pure/internals/is-null-or-undefined.js
var require_is_null_or_undefined2 = __commonJS({
  "node_modules/core-js-pure/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/core-js-pure/internals/require-object-coercible.js
var require_require_object_coercible2 = __commonJS({
  "node_modules/core-js-pure/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined2();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js-pure/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js-pure/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible2();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/core-js-pure/internals/is-object.js
var require_is_object2 = __commonJS({
  "node_modules/core-js-pure/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable2();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js-pure/internals/path.js
var require_path2 = __commonJS({
  "node_modules/core-js-pure/internals/path.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/core-js-pure/internals/get-built-in.js
var require_get_built_in2 = __commonJS({
  "node_modules/core-js-pure/internals/get-built-in.js"(exports, module2) {
    "use strict";
    var path = require_path2();
    var globalThis2 = require_global_this2();
    var isCallable = require_is_callable2();
    var aFunction = function(variable) {
      return isCallable(variable) ? variable : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis2[namespace]) : path[namespace] && path[namespace][method] || globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/core-js-pure/internals/object-is-prototype-of.js
var require_object_is_prototype_of2 = __commonJS({
  "node_modules/core-js-pure/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this2();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js-pure/internals/environment-user-agent.js
var require_environment_user_agent2 = __commonJS({
  "node_modules/core-js-pure/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this2();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/core-js-pure/internals/environment-v8-version.js
var require_environment_v8_version2 = __commonJS({
  "node_modules/core-js-pure/internals/environment-v8-version.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this2();
    var userAgent = require_environment_user_agent2();
    var process2 = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process2 && process2.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/core-js-pure/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection2 = __commonJS({
  "node_modules/core-js-pure/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_environment_v8_version2();
    var fails = require_fails2();
    var globalThis2 = require_global_this2();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/core-js-pure/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid2 = __commonJS({
  "node_modules/core-js-pure/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection2();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js-pure/internals/is-symbol.js
var require_is_symbol2 = __commonJS({
  "node_modules/core-js-pure/internals/is-symbol.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in2();
    var isCallable = require_is_callable2();
    var isPrototypeOf = require_object_is_prototype_of2();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid2();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js-pure/internals/try-to-string.js
var require_try_to_string2 = __commonJS({
  "node_modules/core-js-pure/internals/try-to-string.js"(exports, module2) {
    "use strict";
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js-pure/internals/a-callable.js
var require_a_callable2 = __commonJS({
  "node_modules/core-js-pure/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable2();
    var tryToString = require_try_to_string2();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js-pure/internals/get-method.js
var require_get_method2 = __commonJS({
  "node_modules/core-js-pure/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable2();
    var isNullOrUndefined = require_is_null_or_undefined2();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/core-js-pure/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive2 = __commonJS({
  "node_modules/core-js-pure/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call2();
    var isCallable = require_is_callable2();
    var isObject = require_is_object2();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js-pure/internals/is-pure.js
var require_is_pure2 = __commonJS({
  "node_modules/core-js-pure/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = true;
  }
});

// node_modules/core-js-pure/internals/define-global-property.js
var require_define_global_property2 = __commonJS({
  "node_modules/core-js-pure/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this2();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js-pure/internals/shared-store.js
var require_shared_store2 = __commonJS({
  "node_modules/core-js-pure/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure2();
    var globalThis2 = require_global_this2();
    var defineGlobalProperty = require_define_global_property2();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.41.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js-pure/internals/shared.js
var require_shared2 = __commonJS({
  "node_modules/core-js-pure/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store2();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/core-js-pure/internals/to-object.js
var require_to_object2 = __commonJS({
  "node_modules/core-js-pure/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible2();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js-pure/internals/has-own-property.js
var require_has_own_property2 = __commonJS({
  "node_modules/core-js-pure/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this2();
    var toObject = require_to_object2();
    var hasOwnProperty2 = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty2(toObject(it), key);
    };
  }
});

// node_modules/core-js-pure/internals/uid.js
var require_uid2 = __commonJS({
  "node_modules/core-js-pure/internals/uid.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this2();
    var id = 0;
    var postfix = Math.random();
    var toString2 = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString2(++id + postfix, 36);
    };
  }
});

// node_modules/core-js-pure/internals/well-known-symbol.js
var require_well_known_symbol2 = __commonJS({
  "node_modules/core-js-pure/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this2();
    var shared = require_shared2();
    var hasOwn = require_has_own_property2();
    var uid = require_uid2();
    var NATIVE_SYMBOL = require_symbol_constructor_detection2();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid2();
    var Symbol2 = globalThis2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js-pure/internals/to-primitive.js
var require_to_primitive2 = __commonJS({
  "node_modules/core-js-pure/internals/to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call2();
    var isObject = require_is_object2();
    var isSymbol = require_is_symbol2();
    var getMethod = require_get_method2();
    var ordinaryToPrimitive = require_ordinary_to_primitive2();
    var wellKnownSymbol = require_well_known_symbol2();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js-pure/internals/to-property-key.js
var require_to_property_key2 = __commonJS({
  "node_modules/core-js-pure/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive2();
    var isSymbol = require_is_symbol2();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/core-js-pure/internals/document-create-element.js
var require_document_create_element2 = __commonJS({
  "node_modules/core-js-pure/internals/document-create-element.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this2();
    var isObject = require_is_object2();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js-pure/internals/ie8-dom-define.js
var require_ie8_dom_define2 = __commonJS({
  "node_modules/core-js-pure/internals/ie8-dom-define.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors2();
    var fails = require_fails2();
    var createElement = require_document_create_element2();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/core-js-pure/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js-pure/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors2();
    var call = require_function_call2();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key2();
    var hasOwn = require_has_own_property2();
    var IE8_DOM_DEFINE = require_ie8_dom_define2();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/core-js-pure/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/core-js-pure/internals/is-forced.js"(exports, module2) {
    "use strict";
    var fails = require_fails2();
    var isCallable = require_is_callable2();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string2) {
      return String(string2).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/core-js-pure/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/core-js-pure/internals/function-bind-context.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this_clause();
    var aCallable = require_a_callable2();
    var NATIVE_BIND = require_function_bind_native2();
    var bind = uncurryThis(uncurryThis.bind);
    module2.exports = function(fn, that) {
      aCallable(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js-pure/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug2 = __commonJS({
  "node_modules/core-js-pure/internals/v8-prototype-define-bug.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors2();
    var fails = require_fails2();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/core-js-pure/internals/an-object.js
var require_an_object2 = __commonJS({
  "node_modules/core-js-pure/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object2();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js-pure/internals/object-define-property.js
var require_object_define_property2 = __commonJS({
  "node_modules/core-js-pure/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors2();
    var IE8_DOM_DEFINE = require_ie8_dom_define2();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug2();
    var anObject = require_an_object2();
    var toPropertyKey = require_to_property_key2();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js-pure/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/core-js-pure/internals/create-non-enumerable-property.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors2();
    var definePropertyModule = require_object_define_property2();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object2, key, value) {
      return definePropertyModule.f(object2, key, createPropertyDescriptor(1, value));
    } : function(object2, key, value) {
      object2[key] = value;
      return object2;
    };
  }
});

// node_modules/core-js-pure/internals/export.js
var require_export = __commonJS({
  "node_modules/core-js-pure/internals/export.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this2();
    var apply = require_function_apply();
    var uncurryThis = require_function_uncurry_this_clause();
    var isCallable = require_is_callable2();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var isForced = require_is_forced();
    var path = require_path2();
    var bind = require_function_bind_context();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property2();
    require_shared_store2();
    var wrapConstructor = function(NativeConstructor) {
      var Wrapper = function(a, b, c) {
        if (this instanceof Wrapper) {
          switch (arguments.length) {
            case 0:
              return new NativeConstructor();
            case 1:
              return new NativeConstructor(a);
            case 2:
              return new NativeConstructor(a, b);
          }
          return new NativeConstructor(a, b, c);
        }
        return apply(NativeConstructor, this, arguments);
      };
      Wrapper.prototype = NativeConstructor.prototype;
      return Wrapper;
    };
    module2.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var PROTO = options.proto;
      var nativeSource = GLOBAL ? globalThis2 : STATIC ? globalThis2[TARGET] : globalThis2[TARGET] && globalThis2[TARGET].prototype;
      var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
      var targetPrototype = target.prototype;
      var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
      var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
      for (key in source) {
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
        targetProperty = target[key];
        if (USE_NATIVE) if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(nativeSource, key);
          nativeProperty = descriptor && descriptor.value;
        } else nativeProperty = nativeSource[key];
        sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
        if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;
        if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, globalThis2);
        else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
        else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
        else resultProperty = sourceProperty;
        if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(resultProperty, "sham", true);
        }
        createNonEnumerableProperty(target, key, resultProperty);
        if (PROTO) {
          VIRTUAL_PROTOTYPE = TARGET + "Prototype";
          if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
            createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
          }
          createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
          if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
            createNonEnumerableProperty(targetPrototype, key, sourceProperty);
          }
        }
      }
    };
  }
});

// node_modules/core-js-pure/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/core-js-pure/internals/define-built-in-accessor.js"(exports, module2) {
    "use strict";
    var defineProperty = require_object_define_property2();
    module2.exports = function(target, name, descriptor) {
      return defineProperty.f(target, name, descriptor);
    };
  }
});

// node_modules/core-js-pure/internals/set-species.js
var require_set_species = __commonJS({
  "node_modules/core-js-pure/internals/set-species.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in2();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var wellKnownSymbol = require_well_known_symbol2();
    var DESCRIPTORS = require_descriptors2();
    var SPECIES = wellKnownSymbol("species");
    module2.exports = function(CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
        defineBuiltInAccessor(Constructor, SPECIES, {
          configurable: true,
          get: function() {
            return this;
          }
        });
      }
    };
  }
});

// node_modules/core-js-pure/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/core-js-pure/internals/an-instance.js"(exports, module2) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of2();
    var $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/core-js-pure/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/core-js-pure/internals/define-built-in.js"(exports, module2) {
    "use strict";
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    module2.exports = function(target, key, value, options) {
      if (options && options.enumerable) target[key] = value;
      else createNonEnumerableProperty(target, key, value);
      return target;
    };
  }
});

// node_modules/core-js-pure/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "node_modules/core-js-pure/internals/define-built-ins.js"(exports, module2) {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    module2.exports = function(target, src, options) {
      for (var key in src) {
        if (options && options.unsafe && target[key]) target[key] = src[key];
        else defineBuiltIn(target, key, src[key], options);
      }
      return target;
    };
  }
});

// node_modules/core-js-pure/internals/host-report-errors.js
var require_host_report_errors = __commonJS({
  "node_modules/core-js-pure/internals/host-report-errors.js"(exports, module2) {
    "use strict";
    module2.exports = function(a, b) {
      try {
        arguments.length === 1 ? console.error(a) : console.error(a, b);
      } catch (error) {
      }
    };
  }
});

// node_modules/core-js-pure/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/core-js-pure/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this2();
    var isCallable = require_is_callable2();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/core-js-pure/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js-pure/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared2();
    var uid = require_uid2();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/core-js-pure/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/core-js-pure/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/core-js-pure/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/core-js-pure/internals/internal-state.js"(exports, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis2 = require_global_this2();
    var isObject = require_is_object2();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property2();
    var shared = require_shared_store2();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = globalThis2.TypeError;
    var WeakMap = globalThis2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module2.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/core-js-pure/modules/esnext.observable.constructor.js
var require_esnext_observable_constructor = __commonJS({
  "node_modules/core-js-pure/modules/esnext.observable.constructor.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call2();
    var DESCRIPTORS = require_descriptors2();
    var setSpecies = require_set_species();
    var aCallable = require_a_callable2();
    var anObject = require_an_object2();
    var anInstance = require_an_instance();
    var isCallable = require_is_callable2();
    var isNullOrUndefined = require_is_null_or_undefined2();
    var isObject = require_is_object2();
    var getMethod = require_get_method2();
    var defineBuiltIn = require_define_built_in();
    var defineBuiltIns = require_define_built_ins();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var hostReportErrors = require_host_report_errors();
    var wellKnownSymbol = require_well_known_symbol2();
    var InternalStateModule = require_internal_state();
    var $$OBSERVABLE = wellKnownSymbol("observable");
    var OBSERVABLE = "Observable";
    var SUBSCRIPTION = "Subscription";
    var SUBSCRIPTION_OBSERVER = "SubscriptionObserver";
    var getterFor = InternalStateModule.getterFor;
    var setInternalState = InternalStateModule.set;
    var getObservableInternalState = getterFor(OBSERVABLE);
    var getSubscriptionInternalState = getterFor(SUBSCRIPTION);
    var getSubscriptionObserverInternalState = getterFor(SUBSCRIPTION_OBSERVER);
    var SubscriptionState = function(observer) {
      this.observer = anObject(observer);
      this.cleanup = null;
      this.subscriptionObserver = null;
    };
    SubscriptionState.prototype = {
      type: SUBSCRIPTION,
      clean: function() {
        var cleanup = this.cleanup;
        if (cleanup) {
          this.cleanup = null;
          try {
            cleanup();
          } catch (error) {
            hostReportErrors(error);
          }
        }
      },
      close: function() {
        if (!DESCRIPTORS) {
          var subscription = this.facade;
          var subscriptionObserver = this.subscriptionObserver;
          subscription.closed = true;
          if (subscriptionObserver) subscriptionObserver.closed = true;
        }
        this.observer = null;
      },
      isClosed: function() {
        return this.observer === null;
      }
    };
    var Subscription = function(observer, subscriber) {
      var subscriptionState = setInternalState(this, new SubscriptionState(observer));
      var start;
      if (!DESCRIPTORS) this.closed = false;
      try {
        if (start = getMethod(observer, "start")) call(start, observer, this);
      } catch (error) {
        hostReportErrors(error);
      }
      if (subscriptionState.isClosed()) return;
      var subscriptionObserver = subscriptionState.subscriptionObserver = new SubscriptionObserver(subscriptionState);
      try {
        var cleanup = subscriber(subscriptionObserver);
        var subscription = cleanup;
        if (!isNullOrUndefined(cleanup)) subscriptionState.cleanup = isCallable(cleanup.unsubscribe) ? function() {
          subscription.unsubscribe();
        } : aCallable(cleanup);
      } catch (error) {
        subscriptionObserver.error(error);
        return;
      }
      if (subscriptionState.isClosed()) subscriptionState.clean();
    };
    Subscription.prototype = defineBuiltIns({}, {
      unsubscribe: function unsubscribe() {
        var subscriptionState = getSubscriptionInternalState(this);
        if (!subscriptionState.isClosed()) {
          subscriptionState.close();
          subscriptionState.clean();
        }
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Subscription.prototype, "closed", {
      configurable: true,
      get: function closed() {
        return getSubscriptionInternalState(this).isClosed();
      }
    });
    var SubscriptionObserver = function(subscriptionState) {
      setInternalState(this, {
        type: SUBSCRIPTION_OBSERVER,
        subscriptionState
      });
      if (!DESCRIPTORS) this.closed = false;
    };
    SubscriptionObserver.prototype = defineBuiltIns({}, {
      next: function next(value) {
        var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
        if (!subscriptionState.isClosed()) {
          var observer = subscriptionState.observer;
          try {
            var nextMethod = getMethod(observer, "next");
            if (nextMethod) call(nextMethod, observer, value);
          } catch (error) {
            hostReportErrors(error);
          }
        }
      },
      error: function error(value) {
        var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
        if (!subscriptionState.isClosed()) {
          var observer = subscriptionState.observer;
          subscriptionState.close();
          try {
            var errorMethod = getMethod(observer, "error");
            if (errorMethod) call(errorMethod, observer, value);
            else hostReportErrors(value);
          } catch (err) {
            hostReportErrors(err);
          }
          subscriptionState.clean();
        }
      },
      complete: function complete() {
        var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
        if (!subscriptionState.isClosed()) {
          var observer = subscriptionState.observer;
          subscriptionState.close();
          try {
            var completeMethod = getMethod(observer, "complete");
            if (completeMethod) call(completeMethod, observer);
          } catch (error) {
            hostReportErrors(error);
          }
          subscriptionState.clean();
        }
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(SubscriptionObserver.prototype, "closed", {
      configurable: true,
      get: function closed() {
        return getSubscriptionObserverInternalState(this).subscriptionState.isClosed();
      }
    });
    var $Observable = function Observable2(subscriber) {
      anInstance(this, ObservablePrototype);
      setInternalState(this, {
        type: OBSERVABLE,
        subscriber: aCallable(subscriber)
      });
    };
    var ObservablePrototype = $Observable.prototype;
    defineBuiltIns(ObservablePrototype, {
      subscribe: function subscribe(observer) {
        var length = arguments.length;
        return new Subscription(isCallable(observer) ? {
          next: observer,
          error: length > 1 ? arguments[1] : void 0,
          complete: length > 2 ? arguments[2] : void 0
        } : isObject(observer) ? observer : {}, getObservableInternalState(this).subscriber);
      }
    });
    defineBuiltIn(ObservablePrototype, $$OBSERVABLE, function() {
      return this;
    });
    $({ global: true, constructor: true, forced: true }, {
      Observable: $Observable
    });
    setSpecies(OBSERVABLE);
  }
});

// node_modules/core-js-pure/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/core-js-pure/internals/to-string-tag-support.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol2();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/core-js-pure/internals/classof.js
var require_classof = __commonJS({
  "node_modules/core-js-pure/internals/classof.js"(exports, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable2();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol2();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
      return arguments;
    }()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/core-js-pure/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/core-js-pure/internals/inspect-source.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this2();
    var isCallable = require_is_callable2();
    var store = require_shared_store2();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// node_modules/core-js-pure/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "node_modules/core-js-pure/internals/is-constructor.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this2();
    var fails = require_fails2();
    var isCallable = require_is_callable2();
    var classof = require_classof();
    var getBuiltIn = require_get_built_in2();
    var inspectSource = require_inspect_source();
    var noop = function() {
    };
    var construct = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
    var isConstructorModern = function isConstructor(argument) {
      if (!isCallable(argument)) return false;
      try {
        construct(noop, [], argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor(argument) {
      if (!isCallable(argument)) return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module2.exports = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// node_modules/core-js-pure/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js-pure/internals/iterators.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/core-js-pure/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/core-js-pure/internals/get-iterator-method.js"(exports, module2) {
    "use strict";
    var classof = require_classof();
    var getMethod = require_get_method2();
    var isNullOrUndefined = require_is_null_or_undefined2();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol2();
    var ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it) {
      if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/core-js-pure/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/core-js-pure/internals/get-iterator.js"(exports, module2) {
    "use strict";
    var call = require_function_call2();
    var aCallable = require_a_callable2();
    var anObject = require_an_object2();
    var tryToString = require_try_to_string2();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module2.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
      throw new $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/core-js-pure/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/core-js-pure/internals/is-array-iterator-method.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol2();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol("iterator");
    var ArrayPrototype = Array.prototype;
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// node_modules/core-js-pure/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/core-js-pure/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/core-js-pure/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/core-js-pure/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/core-js-pure/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js-pure/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js-pure/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/core-js-pure/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/core-js-pure/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/core-js-pure/internals/iterator-close.js"(exports, module2) {
    "use strict";
    var call = require_function_call2();
    var anObject = require_an_object2();
    var getMethod = require_get_method2();
    module2.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
          if (kind === "throw") throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw") throw value;
      if (innerError) throw innerResult;
      anObject(innerResult);
      return value;
    };
  }
});

// node_modules/core-js-pure/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/core-js-pure/internals/iterate.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind_context();
    var call = require_function_call2();
    var anObject = require_an_object2();
    var tryToString = require_try_to_string2();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike = require_length_of_array_like();
    var isPrototypeOf = require_object_is_prototype_of2();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError = TypeError;
    var Result = function(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module2.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step3;
      var stop = function(condition) {
        if (iterator) iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
      };
      var callFn = function(value) {
        if (AS_ENTRIES) {
          anObject(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result)) return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step3 = call(next, iterator)).done) {
        try {
          result = callFn(step3.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
      }
      return new Result(false);
    };
  }
});

// node_modules/core-js-pure/modules/esnext.observable.from.js
var require_esnext_observable_from = __commonJS({
  "node_modules/core-js-pure/modules/esnext.observable.from.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in2();
    var call = require_function_call2();
    var anObject = require_an_object2();
    var isConstructor = require_is_constructor();
    var getIterator = require_get_iterator();
    var getMethod = require_get_method2();
    var iterate = require_iterate();
    var wellKnownSymbol = require_well_known_symbol2();
    var $$OBSERVABLE = wellKnownSymbol("observable");
    $({ target: "Observable", stat: true, forced: true }, {
      from: function from(x) {
        var C = isConstructor(this) ? this : getBuiltIn("Observable");
        var observableMethod = getMethod(anObject(x), $$OBSERVABLE);
        if (observableMethod) {
          var observable = anObject(call(observableMethod, x));
          return observable.constructor === C ? observable : new C(function(observer) {
            return observable.subscribe(observer);
          });
        }
        var iterator = getIterator(x);
        return new C(function(observer) {
          iterate(iterator, function(it, stop) {
            observer.next(it);
            if (observer.closed) return stop();
          }, { IS_ITERATOR: true, INTERRUPTED: true });
          observer.complete();
        });
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.observable.of.js
var require_esnext_observable_of = __commonJS({
  "node_modules/core-js-pure/modules/esnext.observable.of.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in2();
    var isConstructor = require_is_constructor();
    var Array2 = getBuiltIn("Array");
    $({ target: "Observable", stat: true, forced: true }, {
      of: function of() {
        var C = isConstructor(this) ? this : getBuiltIn("Observable");
        var length = arguments.length;
        var items = Array2(length);
        var index = 0;
        while (index < length) items[index] = arguments[index++];
        return new C(function(observer) {
          for (var i = 0; i < length; i++) {
            observer.next(items[i]);
            if (observer.closed) return;
          }
          observer.complete();
        });
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.observable.js
var require_esnext_observable = __commonJS({
  "node_modules/core-js-pure/modules/esnext.observable.js"() {
    "use strict";
    require_esnext_observable_constructor();
    require_esnext_observable_from();
    require_esnext_observable_of();
  }
});

// node_modules/core-js-pure/internals/well-known-symbol-wrapped.js
var require_well_known_symbol_wrapped2 = __commonJS({
  "node_modules/core-js-pure/internals/well-known-symbol-wrapped.js"(exports) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol2();
    exports.f = wellKnownSymbol;
  }
});

// node_modules/core-js-pure/internals/well-known-symbol-define.js
var require_well_known_symbol_define2 = __commonJS({
  "node_modules/core-js-pure/internals/well-known-symbol-define.js"(exports, module2) {
    "use strict";
    var path = require_path2();
    var hasOwn = require_has_own_property2();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped2();
    var defineProperty = require_object_define_property2().f;
    module2.exports = function(NAME) {
      var Symbol2 = path.Symbol || (path.Symbol = {});
      if (!hasOwn(Symbol2, NAME)) defineProperty(Symbol2, NAME, {
        value: wrappedWellKnownSymbolModule.f(NAME)
      });
    };
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.observable.js
var require_esnext_symbol_observable2 = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.observable.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define2();
    defineWellKnownSymbol("observable");
  }
});

// node_modules/core-js-pure/modules/es.object.to-string.js
var require_es_object_to_string = __commonJS({
  "node_modules/core-js-pure/modules/es.object.to-string.js"() {
  }
});

// node_modules/core-js-pure/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/core-js-pure/internals/to-string.js"(exports, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/core-js-pure/internals/string-multibyte.js
var require_string_multibyte = __commonJS({
  "node_modules/core-js-pure/internals/string-multibyte.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this2();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var toString2 = require_to_string();
    var requireObjectCoercible = require_require_object_coercible2();
    var charAt = uncurryThis("".charAt);
    var charCodeAt = uncurryThis("".charCodeAt);
    var stringSlice = uncurryThis("".slice);
    var createMethod = function(CONVERT_TO_STRING) {
      return function($this, pos) {
        var S = toString2(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
        first = charCodeAt(S, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
      };
    };
    module2.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    };
  }
});

// node_modules/core-js-pure/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/core-js-pure/internals/function-name.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors2();
    var hasOwn = require_has_own_property2();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/core-js-pure/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js-pure/internals/to-absolute-index.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/core-js-pure/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js-pure/internals/array-includes.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// node_modules/core-js-pure/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js-pure/internals/object-keys-internal.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this2();
    var hasOwn = require_has_own_property2();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object2, names) {
      var O = toIndexedObject(object2);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i) if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/core-js-pure/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js-pure/internals/enum-bug-keys.js"(exports, module2) {
    "use strict";
    module2.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/core-js-pure/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js-pure/internals/object-keys.js"(exports, module2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js-pure/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/core-js-pure/internals/object-define-properties.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors2();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug2();
    var definePropertyModule = require_object_define_property2();
    var anObject = require_an_object2();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/core-js-pure/internals/html.js
var require_html = __commonJS({
  "node_modules/core-js-pure/internals/html.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in2();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/core-js-pure/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js-pure/internals/object-create.js"(exports, module2) {
    "use strict";
    var anObject = require_an_object2();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element2();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module2.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/core-js-pure/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/core-js-pure/internals/correct-prototype-getter.js"(exports, module2) {
    "use strict";
    var fails = require_fails2();
    module2.exports = !fails(function() {
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
  }
});

// node_modules/core-js-pure/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/core-js-pure/internals/object-get-prototype-of.js"(exports, module2) {
    "use strict";
    var hasOwn = require_has_own_property2();
    var isCallable = require_is_callable2();
    var toObject = require_to_object2();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module2.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
      var object2 = toObject(O);
      if (hasOwn(object2, IE_PROTO)) return object2[IE_PROTO];
      var constructor = object2.constructor;
      if (isCallable(constructor) && object2 instanceof constructor) {
        return constructor.prototype;
      }
      return object2 instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// node_modules/core-js-pure/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/core-js-pure/internals/iterators-core.js"(exports, module2) {
    "use strict";
    var fails = require_fails2();
    var isCallable = require_is_callable2();
    var isObject = require_is_object2();
    var create = require_object_create();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol2();
    var IS_PURE = require_is_pure2();
    var ITERATOR = wellKnownSymbol("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype;
    var PrototypeOfArrayIteratorPrototype;
    var arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
      var test = {};
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
    else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      defineBuiltIn(IteratorPrototype, ITERATOR, function() {
        return this;
      });
    }
    module2.exports = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    };
  }
});

// node_modules/core-js-pure/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "node_modules/core-js-pure/internals/object-to-string.js"(exports, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var classof = require_classof();
    module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString2() {
      return "[object " + classof(this) + "]";
    };
  }
});

// node_modules/core-js-pure/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/core-js-pure/internals/set-to-string-tag.js"(exports, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var defineProperty = require_object_define_property2().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property2();
    var toString2 = require_object_to_string();
    var wellKnownSymbol = require_well_known_symbol2();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    module2.exports = function(it, TAG, STATIC, SET_METHOD) {
      var target = STATIC ? it : it && it.prototype;
      if (target) {
        if (!hasOwn(target, TO_STRING_TAG)) {
          defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
        }
        if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
          createNonEnumerableProperty(target, "toString", toString2);
        }
      }
    };
  }
});

// node_modules/core-js-pure/internals/iterator-create-constructor.js
var require_iterator_create_constructor = __commonJS({
  "node_modules/core-js-pure/internals/iterator-create-constructor.js"(exports, module2) {
    "use strict";
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var create = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var setToStringTag = require_set_to_string_tag();
    var Iterators = require_iterators();
    var returnThis = function() {
      return this;
    };
    module2.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
      var TO_STRING_TAG = NAME + " Iterator";
      IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
      Iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };
  }
});

// node_modules/core-js-pure/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "node_modules/core-js-pure/internals/function-uncurry-this-accessor.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this2();
    var aCallable = require_a_callable2();
    module2.exports = function(object2, key, method) {
      try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object2, key)[method]));
      } catch (error) {
      }
    };
  }
});

// node_modules/core-js-pure/internals/is-possible-prototype.js
var require_is_possible_prototype = __commonJS({
  "node_modules/core-js-pure/internals/is-possible-prototype.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object2();
    module2.exports = function(argument) {
      return isObject(argument) || argument === null;
    };
  }
});

// node_modules/core-js-pure/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "node_modules/core-js-pure/internals/a-possible-prototype.js"(exports, module2) {
    "use strict";
    var isPossiblePrototype = require_is_possible_prototype();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isPossiblePrototype(argument)) return argument;
      throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
  }
});

// node_modules/core-js-pure/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "node_modules/core-js-pure/internals/object-set-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var isObject = require_is_object2();
    var requireObjectCoercible = require_require_object_coercible2();
    var aPossiblePrototype = require_a_possible_prototype();
    module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return function setPrototypeOf(O, proto) {
        requireObjectCoercible(O);
        aPossiblePrototype(proto);
        if (!isObject(O)) return O;
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
      };
    }() : void 0);
  }
});

// node_modules/core-js-pure/internals/iterator-define.js
var require_iterator_define = __commonJS({
  "node_modules/core-js-pure/internals/iterator-define.js"(exports, module2) {
    "use strict";
    var $ = require_export();
    var call = require_function_call2();
    var IS_PURE = require_is_pure2();
    var FunctionName = require_function_name();
    var isCallable = require_is_callable2();
    var createIteratorConstructor = require_iterator_create_constructor();
    var getPrototypeOf = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag = require_set_to_string_tag();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol2();
    var Iterators = require_iterators();
    var IteratorsCore = require_iterators_core();
    var PROPER_FUNCTION_NAME = FunctionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR = wellKnownSymbol("iterator");
    var KEYS = "keys";
    var VALUES = "values";
    var ENTRIES = "entries";
    var returnThis = function() {
      return this;
    };
    module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);
      var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS:
            return function keys() {
              return new IteratorConstructor(this, KIND);
            };
          case VALUES:
            return function values() {
              return new IteratorConstructor(this, KIND);
            };
          case ENTRIES:
            return function entries() {
              return new IteratorConstructor(this, KIND);
            };
        }
        return function() {
          return new IteratorConstructor(this);
        };
      };
      var TO_STRING_TAG = NAME + " Iterator";
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY;
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
              defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
          }
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
      }
      if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty(IterablePrototype, "name", VALUES);
        } else {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values() {
            return call(nativeIterator, this);
          };
        }
      }
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
          }
        }
        else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
      }
      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
      }
      Iterators[NAME] = defaultIterator;
      return methods;
    };
  }
});

// node_modules/core-js-pure/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "node_modules/core-js-pure/internals/create-iter-result-object.js"(exports, module2) {
    "use strict";
    module2.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/core-js-pure/modules/es.string.iterator.js
var require_es_string_iterator = __commonJS({
  "node_modules/core-js-pure/modules/es.string.iterator.js"() {
    "use strict";
    var charAt = require_string_multibyte().charAt;
    var toString2 = require_to_string();
    var InternalStateModule = require_internal_state();
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var STRING_ITERATOR = "String Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
    defineIterator(String, "String", function(iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString2(iterated),
        index: 0
      });
    }, function next() {
      var state = getInternalState(this);
      var string2 = state.string;
      var index = state.index;
      var point;
      if (index >= string2.length) return createIterResultObject(void 0, true);
      point = charAt(string2, index);
      state.index += point.length;
      return createIterResultObject(point, false);
    });
  }
});

// node_modules/core-js-pure/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/core-js-pure/internals/add-to-unscopables.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
    };
  }
});

// node_modules/core-js-pure/modules/es.array.iterator.js
var require_es_array_iterator = __commonJS({
  "node_modules/core-js-pure/modules/es.array.iterator.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var addToUnscopables = require_add_to_unscopables();
    var Iterators = require_iterators();
    var InternalStateModule = require_internal_state();
    var defineProperty = require_object_define_property2().f;
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var IS_PURE = require_is_pure2();
    var DESCRIPTORS = require_descriptors2();
    var ARRAY_ITERATOR = "Array Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
    module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        // target
        index: 0,
        // next index
        kind
        // kind
      });
    }, function() {
      var state = getInternalState(this);
      var target = state.target;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = null;
        return createIterResultObject(void 0, true);
      }
      switch (state.kind) {
        case "keys":
          return createIterResultObject(index, false);
        case "values":
          return createIterResultObject(target[index], false);
      }
      return createIterResultObject([index, target[index]], false);
    }, "values");
    var values = Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
    if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
      defineProperty(values, "name", { value: "values" });
    } catch (error) {
    }
  }
});

// node_modules/core-js-pure/internals/dom-iterables.js
var require_dom_iterables = __commonJS({
  "node_modules/core-js-pure/internals/dom-iterables.js"(exports, module2) {
    "use strict";
    module2.exports = {
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
  }
});

// node_modules/core-js-pure/modules/web.dom-collections.iterator.js
var require_web_dom_collections_iterator = __commonJS({
  "node_modules/core-js-pure/modules/web.dom-collections.iterator.js"() {
    "use strict";
    require_es_array_iterator();
    var DOMIterables = require_dom_iterables();
    var globalThis2 = require_global_this2();
    var setToStringTag = require_set_to_string_tag();
    var Iterators = require_iterators();
    for (COLLECTION_NAME in DOMIterables) {
      setToStringTag(globalThis2[COLLECTION_NAME], COLLECTION_NAME);
      Iterators[COLLECTION_NAME] = Iterators.Array;
    }
    var COLLECTION_NAME;
  }
});

// node_modules/core-js-pure/full/observable/index.js
var require_observable3 = __commonJS({
  "node_modules/core-js-pure/full/observable/index.js"(exports, module2) {
    "use strict";
    require_esnext_observable();
    require_esnext_symbol_observable2();
    require_es_object_to_string();
    require_es_string_iterator();
    require_web_dom_collections_iterator();
    var path = require_path2();
    module2.exports = path.Observable;
  }
});

// node_modules/core-js-pure/features/observable/index.js
var require_observable4 = __commonJS({
  "node_modules/core-js-pure/features/observable/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_observable3();
  }
});

// node_modules/global/window.js
var require_window = __commonJS({
  "node_modules/global/window.js"(exports, module2) {
    var win;
    if (typeof window !== "undefined") {
      win = window;
    } else if (typeof global !== "undefined") {
      win = global;
    } else if (typeof self !== "undefined") {
      win = self;
    } else {
      win = {};
    }
    module2.exports = win;
  }
});

// src/index.js
var index_exports = {};
__export(index_exports, {
  Easing: () => easing_exports,
  Interpolators: () => interpolators_exports,
  Meddle: () => Meddle,
  Observable: () => Observable,
  Parsers: () => parsers_exports,
  Player: () => Player,
  Subject: () => Subject,
  Tween: () => Tween,
  Util: () => util_exports,
  animationFrames: () => animationFrames,
  animationSync: () => animationSync,
  animationThrottle: () => animationThrottle,
  combineLatest: () => combineLatest,
  map: () => map,
  merge: () => merge,
  pipe: () => pipe,
  pipeFromArray: () => pipeFromArray,
  registerType: () => registerType,
  regulatedBy: () => regulatedBy,
  smoothen: () => smoothen,
  spreadAssign: () => spreadAssign,
  spreadCombineLatest: () => spreadCombineLatest,
  zip: () => zip
});
module.exports = __toCommonJS(index_exports);

// src/util/utils.js
var identity = (a) => a;
var objectCtorString = Function.prototype.toString.call(Object);
var toString = Object.prototype.toString;
var typeName = (v) => toString.call(v).slice(8, -1);
var now = (() => {
  if (typeof window === "undefined" && typeof process !== "undefined") {
    return function now2() {
      var time = process.hrtime();
      return time[0] * 1e3 + time[1] / 1e6;
    };
  } else if (typeof window !== "undefined" && window.performance !== void 0 && window.performance.now !== void 0) {
    return window.performance.now.bind(window.performance);
  } else if (Date.now !== void 0) {
    return Date.now;
  } else {
    return function now2() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  }
})();
var castArray = function(thing) {
  return Array.isArray(thing) ? thing : [thing];
};
var lerp = function(from, to, t) {
  return from * (1 - t) + to * t;
};
var invLerp = function(from, to, x) {
  const diff = to - from;
  return diff ? (x - from) / diff : 1;
};
var clamp = function(min, max, v) {
  return Math.min(Math.max(v, min), max);
};
var lerpClamped = function(from, to, t) {
  return lerp(from, to, clamp(0, 1, t));
};
var invLerpClamped = function(from, to, x) {
  return clamp(0, 1, invLerp(from, to, x));
};
var cloneDeep = (obj) => {
  if (typeof obj === "function") {
    return obj;
  }
  const out = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    const value = obj[key];
    const type = typeName(value);
    if (type === "Array" || type === "Object") {
      out[key] = cloneDeep(value);
    } else if (type === "Date") {
      out[key] = new Date(value.getTime());
    } else {
      out[key] = value;
    }
  }
  return out;
};
var isObjectLike = (v) => v !== null && typeof v === "object";
var isPlainObject = (value) => {
  if (!isObjectLike(value)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.toString.call(Ctor) === objectCtorString;
};
var filterObjectValues = function(obj, fn) {
  const out = {};
  for (const key in obj) {
    const value = obj[key];
    if (fn(value, key)) {
      out[key] = value;
    }
  }
  return out;
};
var sanitizedObject = function(obj) {
  return filterObjectValues(obj, (v) => v !== void 0);
};
var mapProperties = function(obj, fn) {
  const out = {};
  for (const key in obj) {
    out[key] = fn(obj[key], key);
  }
  return out;
};
var pick = function(obj, keys = []) {
  if (!keys) {
    return __spreadValues({}, obj);
  }
  const out = {};
  for (const key of keys) {
    out[key] = obj[key];
  }
  return out;
};
var mergeIntersecting = function(first, second) {
  return __spreadValues(__spreadValues({}, first), pick(
    second,
    Object.keys(first)
  ));
};
var sortedIndex = function(array2, value, callback, retHighest) {
  let low = 0;
  let high = array2 ? array2.length : low;
  callback = callback || identity;
  value = callback(value);
  while (low < high) {
    const mid = low + high >>> 1;
    const computed = callback(array2[mid]);
    if (retHighest ? computed <= value : computed < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};
var getIntersectingPaths = function(o1, o2) {
  return Object.keys(o1).filter(
    Object.prototype.hasOwnProperty.bind(o2)
  );
};
var pull = function(arr, o) {
  const idx = arr.indexOf(o);
  arr.splice(idx, 1);
  return arr;
};
function shortestModDist(a0, a1, modulo) {
  const da = a1 - a0;
  const frac = da / modulo;
  const cycles = Math.floor(frac);
  const d = frac - cycles;
  const fix = d > 0.5 ? -1 : d < -0.5 ? 1 : 0;
  return (d + fix + cycles) * modulo;
}
var combineEasing = (...easings) => {
  const num = easings.length;
  if (num === 1) {
    return easings[0];
  }
  const invNum = 1 / num;
  return (t) => {
    const p = t * num;
    const i = clamp(0, num - 1, Math.floor(p));
    return (easings[i](p - i) + i) * invNum;
  };
};

// src/rx/pipe.js
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}
function pipe(...ops) {
  return pipeFromArray(ops);
}

// src/rx/observable.js
var import_observable = __toESM(require_observable2());
var import_observable2 = __toESM(require_observable4());
var Observable = class _Observable extends import_observable2.default {
  constructor(subscriber) {
    super(subscriber || identity);
  }
  pipe(...ops) {
    return pipeFromArray(ops)(this);
  }
  // needed to interop with rxjs
  lift(operator) {
    return new _Observable((sink) => {
      return operator.call(sink, this);
    });
  }
  ["@@observable"]() {
    return this;
  }
};

// src/rx/subject.js
var Subject = class extends Observable {
  constructor() {
    super(...arguments);
    __publicField(this, "closed", false);
    __publicField(this, "observers", []);
  }
  unsubscribe() {
    this.isStopped = this.closed = true;
    this.observers = null;
  }
  next(value) {
    this._throwIfClosed();
    if (!this.isStopped) {
      const copy = this.observers.slice();
      for (const observer of copy) {
        observer.next(value);
      }
    }
  }
  error(err) {
    this._throwIfClosed();
    if (!this.isStopped) {
      this.hasError = this.isStopped = true;
      this.thrownError = err;
      const { observers } = this;
      while (observers.length) {
        observers.shift().error(err);
      }
    }
  }
  complete() {
    this._throwIfClosed();
    if (!this.isStopped) {
      this.isStopped = true;
      const { observers } = this;
      while (observers.length) {
        observers.shift().complete();
      }
    }
  }
  subscribe(subscriber) {
    const len = this.observers.push(subscriber);
    return {
      unsubscribe: () => {
        this.observers.splice(len - 1, 1);
      }
    };
  }
  _throwIfClosed() {
    if (this.closed) {
      throw new Error("Subscription closed!");
    }
  }
};

// src/rx/index.js
var map = (fn) => (source) => new Observable(
  (sink) => source.subscribe({
    next(value) {
      try {
        value = fn(value);
        sink.next(value);
      } catch (e) {
        sink.error(e);
      }
    },
    error(e) {
      sink.error(e);
    },
    complete() {
      sink.complete();
    }
  })
);
function merge(...sources) {
  return new Observable((observer) => {
    if (sources.length === 0) {
      return Observable.from([]);
    }
    let count = sources.length;
    const subscriptions = sources.map((source) => Observable.from(source).subscribe({
      next(v) {
        observer.next(v);
      },
      error(e) {
        observer.error(e);
      },
      complete() {
        if (--count === 0) {
          observer.complete();
        }
      }
    }));
    return () => subscriptions.forEach((s) => s.unsubscribe());
  });
}
function combineLatest(...sources) {
  return new Observable((observer) => {
    if (sources.length === 0) {
      return Observable.from([]);
    }
    let count = sources.length;
    let seen = /* @__PURE__ */ new Set();
    let seenAll = false;
    const values = sources.map(() => void 0);
    const subscriptions = sources.map((source, index) => Observable.from(source).subscribe({
      next(v) {
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
      error(e) {
        observer.error(e);
      },
      complete() {
        if (--count === 0) {
          observer.complete();
        }
      }
    }));
    return () => subscriptions.forEach((s) => s.unsubscribe());
  });
}
function zip(...sources) {
  return new Observable((observer) => {
    if (sources.length === 0) {
      return Observable.from([]);
    }
    const queues = sources.map(() => []);
    function done() {
      return queues.some((q, i) => q.length === 0 && subscriptions[i].closed);
    }
    const subscriptions = sources.map((source, index) => Observable.from(source).subscribe({
      next(v) {
        queues[index].push(v);
        if (queues.every((q) => q.length > 0)) {
          observer.next(queues.map((q) => q.shift()));
          if (done()) {
            observer.complete();
          }
        }
      },
      error(e) {
        observer.error(e);
      },
      complete() {
        if (done()) {
          observer.complete();
        }
      }
    }));
    return () => subscriptions.forEach((s) => s.unsubscribe());
  });
}
var spreadCombineLatest = (...operators) => (source) => new Observable((sink) => {
  const subject = new Subject();
  const observables = operators.map((o) => o(subject));
  const sub = combineLatest(...observables).subscribe(sink);
  const sub2 = source.subscribe(subject);
  return () => {
    sub.unsubscribe();
    sub2.unsubscribe();
  };
});
var spreadAssign = (...operators) => (source) => pipe(
  map((results) => Object.assign({}, ...results))
)(spreadCombineLatest(...operators)(source));

// src/util/index.js
var util_exports = {};
__export(util_exports, {
  Callable: () => Callable,
  Emitter: () => Emitter,
  castArray: () => castArray,
  clamp: () => clamp,
  cloneDeep: () => cloneDeep,
  combineEasing: () => combineEasing,
  filterObjectValues: () => filterObjectValues,
  getIntersectingPaths: () => getIntersectingPaths,
  identity: () => identity,
  invLerp: () => invLerp,
  invLerpClamped: () => invLerpClamped,
  isObjectLike: () => isObjectLike,
  isPlainObject: () => isPlainObject,
  lerp: () => lerp,
  lerpClamped: () => lerpClamped,
  mapProperties: () => mapProperties,
  mergeIntersecting: () => mergeIntersecting,
  now: () => now,
  pick: () => pick,
  pull: () => pull,
  sanitizedObject: () => sanitizedObject,
  shortestModDist: () => shortestModDist,
  sortedIndex: () => sortedIndex,
  typeName: () => typeName
});

// src/util/callable.js
var Callable = class extends Function {
  constructor() {
    super("...args", "return this._bound.__call__(...args)");
    this._bound = this.bind(this);
    return this._bound;
  }
  __call__() {
  }
};

// src/util/emitter.js
var defaultPriority = 1;
function getPriority(val) {
  return val._priority_;
}
var Emitter = class extends Observable {
  constructor(subscriber) {
    super(subscriber);
    this._topics = this._topics || (this._topics = {});
  }
  fromEvent(topic, priority) {
    return new Observable((sink) => {
      const callback = (v) => sink.next(v);
      this.on(topic, callback, priority);
      return () => {
        this.off(topic, callback);
      };
    });
  }
  /**
  * Emitter#on( topic, fn( data, event )[, scope, priority] ) -> this
  * Emitter#on( topicConfig[, scope, priority] ) -> this
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
  on(topic, fn, scope, priority) {
    if (typeof topic === "object") {
      for (const t in topic) {
        this.on(t, topic[t], fn, scope);
      }
      return this;
    }
    const listeners = this._topics[topic] || (this._topics[topic] = []);
    const orig = fn;
    if (typeof scope === "object") {
      fn = fn.bind(scope);
      fn._bindfn_ = orig;
      fn._one_ = orig._one_;
      fn._scope_ = scope;
    } else if (priority === void 0) {
      priority = scope;
    }
    fn._priority_ = priority === void 0 ? defaultPriority : priority;
    const idx = sortedIndex(listeners, fn, getPriority);
    listeners.splice(idx, 0, fn);
    return this;
  }
  /**
  * Emitter#off( topic, fn[, scope] ) -> this
  * Emitter#off( topicCfg ) -> this
  * - topic (String): topic The topic name. Specify `true` to remove all listeners for all topics
  * - topicCfg (Object): A config with key/value pairs of `{ topic: callbackFn, ... }`
  * - fn (Function): The original callback function. Specify `true` to remove all listeners for specified topic
  * - scope (Object): The scope the callback was bound to. This is important if you are
  *   binding methods that come from object prototypes.
  *
  * Unsubscribe callback(s) from topic(s).
  **/
  off(topic, fn, scope) {
    if (topic === true) {
      this._topics = {};
      return this;
    }
    if (typeof topic === "object") {
      for (const t in topic) {
        this.off(t, topic[t], fn);
      }
      return this;
    }
    const listeners = this._topics[topic];
    if (!listeners) {
      return this;
    }
    if (fn === true) {
      this._topics[topic] = [];
      return this;
    }
    for (let i = 0, l = listeners.length; i < l; i++) {
      const listn = listeners[i];
      if ((listn._bindfn_ === fn || listn === fn) && (!scope || listn._scope_ === scope)) {
        listeners.splice(i, 1);
        break;
      }
    }
    return this;
  }
  /**
  * Emitter#emit( topic[, data] ) -> this
  * - topic (String): The topic name
  * - data (Mixed): The data to send
  *
  * Publish data to a topic.
  **/
  emit(topic, data) {
    const listeners = this._topics[topic];
    let l = listeners && listeners.length;
    if (!l) {
      return this;
    }
    const e = {};
    e.topic = topic;
    while (l--) {
      const handler = listeners[l];
      handler(data, e);
      if (handler._one_) {
        listeners.splice(l, 1);
      }
    }
    return this;
  }
  /**
  * Emitter#one( topic, fn( data, event )[, scope, priority] ) -> this
  * Emitter#one( topicConfig[, scope, priority] ) -> this
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
  one(topic, fn, scope) {
    if (typeof topic === "object") {
      for (const t in topic) {
        this.one(t, topic[t], fn, scope);
      }
      return this;
    }
    fn._one_ = true;
    this.on(topic, fn, scope);
    return this;
  }
};

// src/easing/index.js
var easing_exports = {};
__export(easing_exports, {
  backIn: () => backIn,
  backInOut: () => backInOut,
  backOut: () => backOut,
  bounceIn: () => bounceIn,
  bounceInOut: () => bounceInOut,
  bounceOut: () => bounceOut,
  circularIn: () => circularIn,
  circularInOut: () => circularInOut,
  circularOut: () => circularOut,
  cubicIn: () => cubicIn,
  cubicInOut: () => cubicInOut,
  cubicOut: () => cubicOut,
  elasticIn: () => elasticIn,
  elasticInOut: () => elasticInOut,
  elasticOut: () => elasticOut,
  expIn: () => expIn,
  expInOut: () => expInOut,
  expOut: () => expOut,
  flashIn: () => flashIn,
  flashInOut: () => flashInOut,
  flashOut: () => flashOut,
  linear: () => linear,
  makeBackIn: () => makeBackIn,
  makeBackInOut: () => makeBackInOut,
  makeBackOut: () => makeBackOut,
  makeElasticIn: () => makeElasticIn,
  makeElasticInOut: () => makeElasticInOut,
  makeElasticOut: () => makeElasticOut,
  makeFlashIn: () => makeFlashIn,
  makeFlashInOut: () => makeFlashInOut,
  makeFlashOut: () => makeFlashOut,
  makeSteps: () => makeSteps,
  quadIn: () => quadIn,
  quadInOut: () => quadInOut,
  quadOut: () => quadOut,
  quartIn: () => quartIn,
  quartInOut: () => quartInOut,
  quartOut: () => quartOut,
  quintIn: () => quintIn,
  quintInOut: () => quintInOut,
  quintOut: () => quintOut,
  sinIn: () => sinIn,
  sinInOut: () => sinInOut,
  sinOut: () => sinOut,
  step: () => step
});

// src/easing/factories.js
var Pi2 = Math.PI * 2;
var makeElasticIn = (a = 0.1, p = 0.1) => {
  let s = p / 4;
  if (a < 1) {
    a = 1;
  } else {
    s = p * Math.asin(1 / a) / Pi2;
  }
  const w = Pi2 / p;
  return (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * w));
  };
};
var makeElasticOut = (a = 0.1, p = 0.1) => {
  let s = p / 4;
  if (a < 1) {
    a = 1;
  } else {
    s = p * Math.asin(1 / a) / Pi2;
  }
  const w = Pi2 / p;
  return (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return a * Math.pow(2, -10 * t) * Math.sin((t - s) * w) + 1;
  };
};
var makeElasticInOut = (a = 0.1, p = 0.1) => {
  let s = p / 4;
  if (a < 1) {
    a = 1;
  } else {
    s = p * Math.asin(1 / a) / Pi2;
  }
  const w = Pi2 / p;
  return (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if ((t *= 2) < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * w));
    } else {
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * w) * 0.5 + 1;
    }
  };
};
var makeBackIn = (overshoot = 1.70158) => (t) => t * t * ((overshoot + 1) * t - overshoot);
var makeBackOut = (overshoot = 1.70158) => (t) => --t * t * ((overshoot + 1) * t + overshoot) + 1;
var makeBackInOut = (overshoot = 1.70158) => (t) => {
  const s = overshoot * 1.525;
  if ((t *= 2) < 1) {
    return 0.5 * (t * t * ((s + 1) * t - s));
  } else {
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
  }
};
var makeSteps = (steps = 1) => (t) => ((steps * t | 0) + 1) * (1 / steps);
var makeFlashIn = (count, easing) => (t) => easing(t * count % 1);
var makeFlashOut = (count, easing) => (t) => easing(1 - t * count % 1);
var makeFlashInOut = (count, easing) => (t) => {
  t = t * count % 1;
  if (t > 0.5) {
    t = 1 - t;
  }
  return easing(t);
};

// src/easing/core.js
var core_exports = {};
__export(core_exports, {
  backIn: () => backIn,
  backInOut: () => backInOut,
  backOut: () => backOut,
  bounceIn: () => bounceIn,
  bounceInOut: () => bounceInOut,
  bounceOut: () => bounceOut,
  circularIn: () => circularIn,
  circularInOut: () => circularInOut,
  circularOut: () => circularOut,
  cubicIn: () => cubicIn,
  cubicInOut: () => cubicInOut,
  cubicOut: () => cubicOut,
  elasticIn: () => elasticIn,
  elasticInOut: () => elasticInOut,
  elasticOut: () => elasticOut,
  expIn: () => expIn,
  expInOut: () => expInOut,
  expOut: () => expOut,
  flashIn: () => flashIn,
  flashInOut: () => flashInOut,
  flashOut: () => flashOut,
  linear: () => linear,
  quadIn: () => quadIn,
  quadInOut: () => quadInOut,
  quadOut: () => quadOut,
  quartIn: () => quartIn,
  quartInOut: () => quartInOut,
  quartOut: () => quartOut,
  quintIn: () => quintIn,
  quintInOut: () => quintInOut,
  quintOut: () => quintOut,
  sinIn: () => sinIn,
  sinInOut: () => sinInOut,
  sinOut: () => sinOut,
  step: () => step
});
var halfPi = Math.PI / 2;
var linear = (t) => t;
var quadIn = (t) => t * t;
var quadOut = (t) => t * (2 - t);
var quadInOut = (t) => (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
var cubicIn = (t) => t * t * t;
var cubicOut = (t) => --t * t * t + 1;
var cubicInOut = (t) => (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
var quartIn = (t) => t * t * t * t;
var quartOut = (t) => 1 - --t * t * t * t;
var quartInOut = (t) => (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
var quintIn = (t) => t * t * t * t * t;
var quintOut = (t) => --t * t * t * t * t + 1;
var quintInOut = (t) => (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
var sinIn = (t) => 1 - Math.cos(t * halfPi);
var sinOut = (t) => Math.sin(t * halfPi);
var sinInOut = (t) => 0.5 * (1 - Math.cos(Math.PI * t));
var expIn = (t) => t === 0 ? 0 : Math.pow(1024, t - 1);
var expOut = (t) => t === 0 ? 0 : 1 - Math.pow(1024, -t);
var expInOut = (t) => {
  if (t === 0) return 0;
  if (t === 1) return 1;
  if ((t *= 2) < 1) return 0.5 * Math.pow(1024, t - 1);
  return 0.5 * (2 - Math.pow(1024, 1 - t));
};
var elasticIn = makeElasticIn();
var elasticOut = makeElasticOut();
var elasticInOut = makeElasticInOut();
var circularIn = (t) => 1 - Math.sqrt(1 - t * t);
var circularOut = (t) => Math.sqrt(1 - --t * t);
var circularInOut = (t) => (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
var bounceIn = (t) => {
  t = 1 - t;
  if (t < 1 / 2.75) return 1 - 7.5625 * t * t;
  else if (t < 2 / 2.75) return 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);
  else if (t < 2.5 / 2.75) return 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375);
  else return 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
};
var bounceOut = (t) => {
  if (t < 1 / 2.75) return 7.5625 * t * t;
  else if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  else if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  else return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
};
var bounceInOut = (t) => {
  let reverse = false;
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
var backIn = makeBackIn();
var backOut = makeBackOut();
var backInOut = makeBackInOut();
var step = makeSteps();
var flashIn = makeFlashIn(3, quadInOut);
var flashOut = makeFlashOut(3, quadInOut);
var flashInOut = makeFlashInOut(3, quadInOut);

// src/interpolators/index.js
var interpolators_exports = {};
__export(interpolators_exports, {
  array: () => array,
  degrees: () => degrees,
  linear: () => linear2,
  makeCyclic: () => makeCyclic,
  makeForArray: () => makeForArray,
  makeToggle: () => makeToggle,
  object: () => object,
  radians: () => radians,
  string: () => string,
  toggle: () => toggle
});

// src/interpolators/factories.js
var makeToggle = (threshold) => (from, to, t) => t >= threshold ? to : from;
var makeCyclic = (len) => (from, to, t) => from + shortestModDist(from, to, len) * t;
var makeForArray = (interp) => (from, to, t) => to.map((toVal, idx) => interp(from[idx], toVal, t));

// src/interpolators/core.js
var core_exports2 = {};
__export(core_exports2, {
  array: () => array,
  degrees: () => degrees,
  linear: () => linear2,
  object: () => object,
  radians: () => radians,
  string: () => string,
  toggle: () => toggle
});
var Pi22 = Math.PI * 2;
var linear2 = (from, to, t) => lerp(from, to, t);
var radians = (from, to, t) => from + shortestModDist(from, to, Pi22) * t;
var degrees = (from, to, t) => from + shortestModDist(from, to, 360) * t;
var array = makeForArray(lerp);
var object = (from, to, t) => mapProperties(
  from,
  (val, key) => lerp(val, to[key], t)
);
var string = (from, to, t) => {
  if (t <= 0) {
    return from;
  }
  const length = lerp(0, to.length, t) | 0;
  return to.substr(0, length);
};
var toggle = makeToggle(1);

// src/parsers/easing.js
function parseEasing(easing) {
  if (easing === void 0 || easing === null) {
    return void 0;
  }
  if (typeof easing === "string") {
    const easings = easing.replace(" ", "").split("+");
    if (easings.length === 1) {
      easing = easings[0];
      if (easing in core_exports) {
        return core_exports[easing];
      }
    } else {
      return combineEasing(...easings.map(parseEasing));
    }
  } else if (easing instanceof Function) {
    return easing;
  }
  throw new Error(`Unrecognized easing name "${easing}"`);
}

// src/parsers/interpolator.js
function parseInterpolator(interp) {
  if (interp === void 0 || interp === null) {
    return false;
  }
  if (interp instanceof Function) {
    return interp;
  } else if (typeof interp === "string") {
    if (interp in core_exports2) {
      return core_exports2[interp];
    }
  }
  throw new Error(`Unrecognized interpolator name "${interp}"`);
}

// src/type.js
var NATIVE_TYPES = {
  "number": {
    type: "number",
    default: 0,
    interpolator: linear2
  },
  "string": {
    type: "string",
    default: "",
    interpolator: string
  },
  "boolean": {
    type: "boolean",
    default: false,
    interpolator: toggle
  },
  "array": {
    type: "array",
    default: [],
    interpolator: array
  },
  "object": {
    type: "object",
    default: {},
    interpolator: object
  }
};
var CUSTOM_TYPES = {};
function getCustomTypeByVal(val) {
  return Object.values(CUSTOM_TYPES).find(({ constructor }) => val instanceof constructor);
}
function getCustomTypeByConstructor(val) {
  return Object.values(CUSTOM_TYPES).find(({ constructor }) => val === constructor);
}
function registerType(cfg) {
  const { type, interpolator } = cfg;
  if (!type || !interpolator || cfg.default === void 0) {
    throw new Error('Custom types must have "type", "default", and "interpolator" specified');
  }
  if (CUSTOM_TYPES[type]) {
    throw new Error(`Custom type "${type}" is already registered`);
  }
  CUSTOM_TYPES[type] = {
    type,
    interpolator,
    default: cfg.default
  };
  if (cfg.default.constructor) {
    CUSTOM_TYPES[type].constructor = cfg.default.constructor;
  }
}
function inferType(val) {
  if (val === null) {
    throw new Error("Can not determine type of null value");
  }
  const type = typeof val;
  if (type === "string") {
    if (val in CUSTOM_TYPES) {
      return val;
    }
    return "string";
  }
  if (type === "number") {
    return "number";
  }
  if (type === "boolean") {
    return "boolean";
  }
  if (Array.isArray(val)) {
    return "array";
  }
  const custom = getCustomTypeByVal(val);
  if (custom) {
    return custom.type;
  }
  if (type === "object") {
    return "object";
  }
  return type;
}
function getType(type) {
  if (type === null) {
    throw new Error("Can not determine type of null value");
  }
  if (typeof type === "string") {
    if (type in CUSTOM_TYPES) {
      return type;
    }
    return type;
  }
  if (type === Number || type === "number") {
    return "number";
  }
  if (type === Boolean || type === "boolean") {
    return "boolean";
  }
  if (type === String) {
    return "string";
  }
  if (type === Array) {
    return "array";
  }
  const custom = getCustomTypeByConstructor(type);
  if (custom) {
    return custom.type;
  }
  if (type === Object || type === "object") {
    return "object";
  }
  return type;
}
function getTypeCfg(type) {
  const cfg = NATIVE_TYPES[type] || CUSTOM_TYPES[type];
  if (!cfg) {
    throw new Error(`Unrecognized type ${type}`);
  }
  return cfg;
}

// src/schema.js
var TYPE_DEF_KEYS = ["value", ...Object.keys(getTypeCfg("object"))];
var DEFAULT_EASING = "linear";
function checkExplicitTypeDefinition(def) {
  const extraKeys = Object.keys(def).filter((k) => TYPE_DEF_KEYS.indexOf(k) < 0);
  if (extraKeys.length) {
    throw new Error('Type definition contains extra keys. Does your definition use "type" as a property name?');
  }
}
function getInterpolator(type, cfg, defaultVal) {
  if (type === "array" && defaultVal && defaultVal.length) {
    const subSchema = parseSchemaProp(defaultVal[0]);
    return makeForArray(subSchema.interpolator);
  }
  return parseInterpolator(cfg.interpolator);
}
function parseSchemaProp(def) {
  let easing;
  let interpolator;
  let type;
  let cfg;
  let defaultVal;
  if (isPlainObject(def) && (def.value !== void 0 || def.type !== void 0)) {
    checkExplicitTypeDefinition(def);
    type = getType(def.type) || inferType(def.value);
    cfg = getTypeCfg(type);
    defaultVal = def.value || cfg.default;
    easing = parseEasing(def.easing || DEFAULT_EASING);
    interpolator = parseInterpolator(def.interpolator) || getInterpolator(type, cfg, defaultVal);
  } else {
    type = inferType(def);
    cfg = getTypeCfg(type);
    easing = parseEasing(def.easing || DEFAULT_EASING);
    defaultVal = def;
    interpolator = getInterpolator(type, cfg, defaultVal);
  }
  return {
    type,
    easing,
    default: defaultVal,
    interpolator,
    def
  };
}
function createSchema(schemaDef) {
  return mapProperties(schemaDef, parseSchemaProp);
}
function createState(schema) {
  const state = {};
  const props = Object.keys(schema);
  for (const prop of props) {
    state[prop] = schema[prop].default;
  }
  return state;
}

// src/parsers/time.js
var timeDecReg = /([0-9.]+)(s|m|h)?/;
var timeStdReg = /((\d\d):)?((\d\d):(\d\d))/;
var MINUTES = 60;
var HOURS = 60 * 60;
function getTime(h, m, s) {
  h = parseFloat(h || 0);
  m = parseFloat(m || 0);
  s = parseFloat(s || 0);
  return Math.round((h * HOURS + m * MINUTES + s) * 1e3);
}
function parseTime(strOrNumber) {
  if (typeof strOrNumber !== "string") {
    return strOrNumber;
  }
  let parsed = strOrNumber.match(timeStdReg);
  if (parsed) {
    return getTime(parsed[2], parsed[4], parsed[5]);
  }
  parsed = strOrNumber.match(timeDecReg);
  if (parsed) {
    const unit = ("" + parsed[2]).toLowerCase();
    if (!parsed[1] || unit === "s") {
      return getTime(0, 0, parsed[1]);
    }
    if (unit === "m") {
      return getTime(0, parsed[1], 0);
    }
    if (unit === "h") {
      return getTime(parsed[1], 0, 0);
    }
  }
  return 0;
}

// src/frame.js
var pctReg = /^((\d{1,3})(\.\d*)?)%$/;
var META_PARSERS = {
  endTime(v) {
    if (v === void 0) {
      return void 0;
    }
    return parseTime(v);
  },
  startTime: parseTime,
  duration(v) {
    if (v === void 0) {
      return void 0;
    }
    if (pctReg.test(v)) {
      return v;
    }
    return parseTime(v);
  },
  easing: parseEasing
};
function parseMeta(meta, defaults) {
  const ret = __spreadValues(__spreadValues({}, defaults), sanitizedObject(meta));
  for (const key in META_PARSERS) {
    ret[key] = META_PARSERS[key](ret[key]);
  }
  return ret;
}
function createFrame(state, meta, defaultMetaOptions) {
  if (!state) {
    throw new Error("Can not create frame without state object");
  }
  if (typeof state !== "object") {
    throw new Error("States must be plain objects");
  }
  state = cloneDeep(state);
  meta = parseMeta(meta || state.$meta, defaultMetaOptions);
  delete state.$meta;
  const percentDuration = pctReg.exec(meta.duration);
  if (percentDuration) {
    meta.implicit = true;
    meta.fractionalDuration = parseFloat(percentDuration[1]) / 100;
  } else if (meta.endTime !== void 0) {
    if (meta.startTime !== void 0) {
      meta.duration = meta.endTime - meta.startTime;
    } else {
      meta.startTime = meta.endTime - meta.duration;
    }
  } else {
    meta.endTime = meta.startTime + meta.duration;
  }
  return {
    state,
    meta
  };
}

// src/transition.js
function createTransitionFromFrame(startTime, endTime, frame, previousState) {
  const endState = frame.state;
  const startState = pick(previousState, Object.keys(endState));
  const easing = frame.meta.easing;
  return {
    startTime,
    endTime,
    startState,
    endState,
    easing,
    frame
  };
}
function interpolateProperty(fn, from, to, progress) {
  return fn(from, to, progress);
}
function getInterpolatedState(schema, startState, endState, timeFraction, easing) {
  if (timeFraction <= 0) {
    return cloneDeep(startState);
  }
  if (timeFraction >= 1) {
    return cloneDeep(endState);
  }
  const nextState = cloneDeep(startState);
  for (const prop in endState) {
    const def = schema[prop];
    let val;
    if (!def) {
      val = endState[prop];
    } else {
      easing = easing || def.easing;
      const progress = easing(timeFraction);
      val = interpolateProperty(
        def.interpolator,
        startState[prop],
        endState[prop],
        progress
      );
    }
    nextState[prop] = val;
  }
  return nextState;
}

// src/timeline.js
function getConflictingFrames(timeline) {
  const markers = [];
  let idx;
  for (let l = timeline.length, i = 0; i < l; i++) {
    const m = timeline[i];
    if (m.type === "start") {
      markers.push(m);
    } else {
      idx = markers.indexOf(m.start);
      markers.splice(idx, 1);
    }
    for (let l2 = markers.length, i2 = 0; i2 < l2; i2++) {
      const m2 = markers[i2];
      for (let j = i2 + 1; j < l2; j++) {
        const paths = getIntersectingPaths(
          m2.transition.endState,
          markers[j].transition.endState
        );
        if (paths.length) {
          return {
            paths,
            frames: [
              m2.frame,
              markers[j].frame
            ]
          };
        }
      }
    }
  }
  return false;
}
function getPrevEndTime(timeline, idx, currTime) {
  for (let i = idx - 1; i >= 0; i--) {
    const ep = timeline[i];
    if (ep.type === "end" && currTime !== ep.time) {
      return ep.time;
    }
  }
  return 0;
}
function createTimeline(schema, frames = []) {
  if (!frames.length) {
    return [];
  }
  const getTime2 = (v) => v.time;
  const defaultState = createState(schema);
  const timeline = [];
  const implicitFrames = frames.filter((f) => f.meta.implicit).sort((a, b) => a.meta.endTime - b.meta.endTime);
  frames = frames.filter((f) => !f.meta.implicit);
  frames.forEach((frame) => {
    let idx;
    const start = { type: "start", frame, time: frame.meta.endTime - frame.meta.duration };
    const end = { type: "end", frame, time: frame.meta.endTime };
    start.end = end;
    end.start = start;
    idx = sortedIndex(timeline, end, getTime2);
    timeline.splice(idx, 0, end);
    idx = Math.min(idx, sortedIndex(timeline, start, getTime2, true));
    timeline.splice(idx, 0, start);
  });
  implicitFrames.forEach((frame) => {
    const end = { type: "end", frame, time: frame.meta.endTime };
    let idx = sortedIndex(timeline, end, getTime2);
    const prevEndTime = getPrevEndTime(timeline, idx, end.time);
    const startTime = lerp(end.time, prevEndTime, frame.meta.fractionalDuration);
    const start = { type: "start", frame, time: startTime };
    start.end = end;
    end.start = start;
    timeline.splice(idx, 0, end);
    idx = Math.min(idx, sortedIndex(timeline, start, getTime2, true));
    timeline.splice(idx, 0, start);
  });
  let prevState = defaultState;
  timeline.forEach((m, idx) => {
    if (m.type !== "end") {
      return;
    }
    const transition = createTransitionFromFrame(m.start.time, m.time, m.frame, prevState);
    m.transition = transition;
    m.start.transition = transition;
    prevState = __spreadValues(__spreadValues({}, prevState), transition.endState);
  });
  prevState = defaultState;
  timeline.forEach((m) => {
    if (m.type !== "end") {
      return;
    }
    const transitions = getTransitionsAtTime(timeline, m.time);
    prevState = reduceTransitions(schema, transitions, m.time, prevState);
    m.state = prevState;
  });
  const conflicts = getConflictingFrames(timeline);
  if (conflicts) {
    throw new Error(
      `The following overlapping frames modify the same state paths:
paths: ${conflicts.paths}
frames: ${JSON.stringify(conflicts.frames, null, 2)}`
    );
  }
  return timeline;
}
function getTransitionsAtTime(timeline, time) {
  const markers = [];
  let idx;
  for (let l = timeline.length, i = 0; i < l; i++) {
    const m = timeline[i];
    if (m.time > time) {
      break;
    }
    if (m.type === "start") {
      markers.push(m);
    } else if (m.time !== time) {
      idx = markers.indexOf(m.start);
      markers.splice(idx, 1);
    }
  }
  return markers.map((a) => a.transition);
}
function getStartState(timeline, time, defaultState) {
  let state = defaultState;
  for (let l = timeline.length, i = 0; i < l; i++) {
    const m = timeline[i];
    if (m.time > time) {
      return state;
    }
    if (m.type === "end") {
      state = m.state;
    }
  }
  return state;
}
function reduceTransitions(schema, transitions = [], time = 0, initialState = {}) {
  return transitions.reduce((state, tr) => {
    const progress = invLerpClamped(tr.startTime, tr.endTime, time);
    return Object.assign(
      state,
      getInterpolatedState(schema, tr.startState, tr.endState, progress, tr.easing)
    );
  }, cloneDeep(initialState));
}

// src/animation/tween-operator.js
var TweenOperator = class extends Callable {
  at(t) {
    return t;
  }
  __call__(source) {
    return map((t) => this.at(t))(source);
  }
};

// src/animation/tween.js
var DEFAULT_OPTIONS = {
  tweenDuration: "100%",
  easing: "linear"
};
var Tween = class _Tween extends TweenOperator {
  static create(schema, options) {
    return new _Tween(schema, options);
  }
  constructor(schema, options) {
    super();
    this.framesById = {};
    this.frames = [];
    this.timeline = [];
    this._schema = createSchema(schema);
    this._startingState = createState(this._schema);
    this._timeLabel = null;
    this._loop = false;
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    this._refreshTimeline();
  }
  get duration() {
    var _a;
    return ((_a = this.timeline[this.timeline.length - 1]) == null ? void 0 : _a.time) || 0;
  }
  withTime(label = "time") {
    this._timeLabel = label || null;
    return this;
  }
  by(endTime, duration, state, easing) {
    const meta = {
      endTime
    };
    if (typeof duration === "object") {
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
  in(dt, duration, state, easing) {
    const meta = {
      endTime: this.duration + parseTime(dt)
    };
    if (typeof duration === "object") {
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
  // add a frame
  to(state, opts) {
    const meta = {};
    if (typeof opts === "string") {
      meta.easing = opts;
    } else if (opts) {
      Object.assign(meta, opts);
    }
    if (meta.startTime === void 0 && meta.endTime === void 0) {
      meta.startTime = this.duration;
    }
    const frame = createFrame(state, meta, {
      duration: this.options.tweenDuration,
      easing: this.options.easing
    });
    if (frame.meta.id && this.framesById[frame.meta.id]) {
      throw new Error(`Frame with id "${frame.meta.id}" already defined`);
    }
    if (frame.meta.id) {
      this.framesById[frame.meta.id] = frame;
    }
    this.frames.push(frame);
    this._refreshTimeline();
    return this;
  }
  loop(toggle2 = true) {
    this._loop = toggle2;
    return this;
  }
  _refreshTimeline() {
    this.timeline = createTimeline(this._schema, this.frames);
    return this;
  }
  getFrame(id) {
    const frame = this.framesById[id];
    return frame;
  }
  at(time) {
    if (this._loop) {
      time = time % this.duration;
    }
    let state;
    if (time >= this.duration) {
      const m = this.timeline[this.timeline.length - 1];
      state = cloneDeep(m.state);
    } else {
      const transitions = getTransitionsAtTime(this.timeline, time);
      const startState = getStartState(this.timeline, time, this._startingState);
      state = reduceTransitions(this._schema, transitions, time, startState);
    }
    if (this._timeLabel) {
      if (state[this._timeLabel] !== void 0) {
        throw new Error(`State already has a property that would be overriden by time variable "${this._timeLabel}"`);
      }
      state[this._timeLabel] = time;
    }
    return state;
  }
  // getTransitions(time) {
  //   return getTransitionsAtTime(this.timeline, time)
  // }
};

// src/animation/meddle.js
var DEFAULT_OPTIONS2 = {
  relaxDuration: 500,
  relaxDelay: 1e3,
  easing: "linear"
};
var Meddle = class _Meddle extends TweenOperator {
  static create(tween, options) {
    return new _Meddle(tween, options);
  }
  constructor(tween, options) {
    super();
    this._subject = new Subject();
    this._tween = tween;
    this.options = options;
    this.lastTime = 0;
    this.defaults();
    this.clear();
  }
  get options() {
    return this._options;
  }
  set options(o) {
    this._options = Object.assign({}, DEFAULT_OPTIONS2, o);
    this.defaults();
  }
  // toggle freezing of meddle states
  freeze(toggle2 = true) {
    this.frozen = toggle2;
    return this;
  }
  relaxDelay(time) {
    this._relaxDelay = parseTime(
      time === void 0 ? this.options.relaxDelay : time
    );
    return this;
  }
  relaxDuration(time) {
    this._relaxDuration = parseTime(
      time === void 0 ? this.options.relaxDuration : time
    );
    return this;
  }
  easing(e) {
    this._easing = parseEasing(
      e === void 0 ? this.options.easing : e
    );
    return this;
  }
  // Use the default timing/easing set at construction
  defaults() {
    this.relaxDelay();
    this.relaxDuration();
    this.easing();
    return this;
  }
  // toggle user meddling
  set(meddleState) {
    this.state = __spreadValues(__spreadValues({}, this.state), meddleState);
    this.started = false;
    this.startTime = false;
    this.relaxState = null;
    this.active = true;
    this._subject.next(this.lastTime);
    return this;
  }
  // force meddling to reset
  clear() {
    this.state = {};
    this.started = false;
    this.active = false;
    this.frozen = false;
    this.startTime = false;
    this.lastTime = 0;
    return this;
  }
  at(time) {
    this.lastTime = time;
    if (!this.active || this.frozen) {
      return Object.assign({}, this.state);
    }
    if (!this.started) {
      this.startTime = time;
      this.started = true;
      this.endTime = this.startTime + this._relaxDelay + this._relaxDuration;
      this.relaxState = pick(
        this._tween.at(this.endTime),
        Object.keys(this.state)
      );
    }
    if (this.startTime === time) {
      return Object.assign({}, this.state);
    }
    if (time >= this.endTime || time < this.startTime) {
      this.clear();
    }
    if (time > this.totalTime) {
      this.clear();
    }
    const timeFraction = invLerpClamped(
      this.startTime + this._relaxDelay,
      this.endTime,
      time
    );
    const meddleTransitionState = getInterpolatedState(
      this._tween._schema,
      this.state,
      this.relaxState,
      timeFraction,
      this._easing
    );
    return meddleTransitionState;
  }
  __call__(source) {
    return map((t) => this.at(t))(merge(this._subject, source));
  }
};

// src/timing/animation-frames.js
var import_window = __toESM(require_window());
var requestAnimationFrame = ((window3) => {
  return window3.requestAnimationFrame || ((fn) => {
    const t = setTimeout(fn, 16);
    t.unref && t.unref();
    return t;
  });
})(import_window.default);
var tickStack = [];
function step2() {
  const l = tickStack.length;
  if (l === 0) {
    return;
  }
  requestAnimationFrame(step2);
  const t = now();
  for (let i = 0; i < l; i++) {
    const fn = tickStack[i];
    fn && fn(t);
  }
}
function add(fn) {
  tickStack.push(fn);
  if (tickStack.length === 1) {
    step2();
  }
}
function remove(fn) {
  const i = tickStack.indexOf(fn);
  tickStack.splice(i, 1);
}
function animationFrames() {
  return new Observable((observer) => {
    const to = now();
    const cb = (t) => observer.next(t - to);
    add(cb);
    return () => {
      remove(cb);
    };
  });
}

// src/animation/smoothen.js
var defaultConfig = { duration: 1e3, easing: "cubicOut" };
function smoothen(config, getState, schemaDef = null) {
  if (config instanceof Function) {
    getState = config;
    config = defaultConfig;
  }
  config = Object.assign({}, defaultConfig, config);
  return (source) => new Observable((sink) => {
    const _targets = [];
    let schema;
    let time = 0;
    let currentState;
    const easing = parseEasing(config.easing);
    if (!getState) {
      getState = () => currentState;
    }
    const update = (t) => {
      var _a;
      time = t;
      if (!_targets.length) {
        return null;
      }
      let prev = 1;
      const timeFracs = _targets.map(({ startTime, endTime }) => {
        if (prev === 0) {
          return 0;
        }
        const tf = invLerpClamped(
          startTime,
          endTime,
          time
        ) / prev;
        prev = easing(tf);
        return tf;
      });
      currentState = timeFracs.reduceRight((targetState, tf, i) => {
        const { startState } = _targets[i];
        return getInterpolatedState(
          schema,
          startState,
          targetState,
          tf,
          easing
        );
      }, _targets[_targets.length - 1].targetState);
      while (((_a = _targets[0]) == null ? void 0 : _a.endTime) <= time) {
        _targets.shift();
      }
      return currentState;
    };
    const set = (targetState) => {
      if (!schema) {
        schema = createSchema(schemaDef || getState() || targetState);
        currentState = createState(schema);
        if (!schemaDef) {
          return;
        }
      }
      const l = _targets.length;
      const startState = l ? _targets[l - 1].targetState : __spreadValues({}, getState());
      _targets.push({
        startTime: time,
        endTime: time + parseTime(config.duration),
        startState,
        targetState
      });
    };
    let nextTarget = null;
    const sub = animationFrames().subscribe((t) => {
      if (nextTarget) {
        set(nextTarget);
        nextTarget = null;
      }
      const state = update(t);
      if (!state) {
        return;
      }
      sink.next(state);
    });
    const sinkSub = source.subscribe({
      next: (state) => {
        nextTarget = state;
      },
      error: (e) => sink.error(e),
      complete: () => sink.complete()
    });
    const unsubscribe = () => {
      sub.unsubscribe();
      sinkSub.unsubscribe();
    };
    return { unsubscribe };
  });
}

// src/timing/player.js
var Player = class _Player extends Emitter {
  static create(totalTime) {
    return new _Player(totalTime);
  }
  constructor(totalTime) {
    super((sink) => {
      const cb = (time) => sink.next(time);
      this.on("update", cb);
      this.emit("update", this._time);
      return () => this.off("update", cb);
    });
    this.totalTime = parseTime(totalTime);
    this._clockTime = 0;
    this._time = 0;
    this.playbackRate = 1;
    this._paused = true;
    this._loop = false;
    this._sub = animationFrames().subscribe((t) => this.step(t));
  }
  get progress() {
    return this.totalTime > 0 ? this._time / this.totalTime * 100 : 0;
  }
  set progress(p) {
    this.seek(Math.max(0, p) * this.totalTime / 100);
  }
  get time() {
    return this._time;
  }
  set time(t) {
    this.seek(t);
  }
  get paused() {
    return this._paused;
  }
  set paused(p) {
    this.togglePause(p);
  }
  destroy() {
    this.off(true);
    this._sub.unsubscribe();
    this.emit("destroy");
  }
  togglePause(paused) {
    if (paused === void 0) {
      paused = !this._paused;
    }
    this._paused = !!paused;
    if (this._paused) {
      this.emit("pause");
    } else {
      this.emit("play");
    }
    this.emit("togglePause", this._paused);
    return this;
  }
  pause() {
    return this.togglePause(true);
  }
  play() {
    return this.togglePause(false);
  }
  loop(toggle2 = true) {
    this._loop = toggle2;
    return this;
  }
  // Stops after it reaches time t
  playTo(time) {
    time = parseTime(time);
    if (this._time === time) {
      return this;
    }
    this._playToTime = time;
    this._oldPlaybackRate = this.playbackRate;
    this.playbackRate = time >= this._time ? 1 : -1;
    return this.play();
  }
  seek(time) {
    this._time = time;
    this.emit("update", time);
    this.emit("seek", time);
    return this;
  }
  step(now2) {
    const clockTime = this._clockTime;
    const playbackRate = this.playbackRate;
    const dt = now2 - clockTime;
    let time = this._time;
    const totalTime = this.totalTime;
    this._clockTime = now2;
    if (this._paused) {
      return this;
    }
    time += dt * playbackRate;
    if (this._playToTime !== false && playbackRate * time >= playbackRate * this._playToTime) {
      this.togglePause(true);
      time = this._playToTime;
      this.playbackRate = this._oldPlaybackRate;
      this._playToTime = false;
    }
    this._time = time;
    if (playbackRate > 0 && time >= totalTime) {
      if (this._loop) {
        this._time = time = 0;
        this.emit("update", time);
        this.emit("end");
      } else {
        this._time = time = totalTime;
        this.emit("update", time);
        this.togglePause(true);
        this.emit("end");
      }
    } else if (playbackRate < 0 && time <= 0) {
      if (this._loop) {
        this._time = time = totalTime;
        this.emit("update", time);
        this.emit("end");
      } else {
        this._time = time = 0;
        this.emit("update", time);
        this.togglePause(true);
        this.emit("end");
      }
    } else {
      this.emit("update", time);
    }
    return this;
  }
};

// src/timing/regulated-by.js
var regulatedBy = (regulator, onlyNew = false) => (source) => new Observable((sink) => {
  let isFresh = false;
  let value = null;
  let isComplete = false;
  const regSub = regulator.subscribe({
    next: () => {
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
    complete: () => {
      sink.complete();
    },
    error: (e) => {
      sink.error(e);
    }
  });
  const sub = source.subscribe({
    next: (v) => {
      value = v;
      isFresh = true;
    },
    complete: () => {
      isComplete = true;
    },
    error: (e) => {
      sink.error(e);
      isFresh = false;
      value = null;
      regSub.unsubscribe();
    }
  });
  return () => {
    sub.unsubscribe();
    regSub.unsubscribe();
  };
});

// src/timing/animation-throttle.js
var animationThrottle = () => (source) => {
  return regulatedBy(animationFrames(), true)(source);
};

// src/timing/animation-sync.js
var defaultThreshold = 5e3 / 60;
var animationSync = (config = {}) => (timeSource) => new Observable((sink) => {
  let syncTime = 0;
  let isFresh = false;
  let isComplete = false;
  let lastFrameTime = 0;
  let lastTime = 0;
  let paused = true;
  const timeSub = animationFrames().subscribe((frameTime) => {
    const playbackRate = Number.isFinite(config.playbackRate) ? config.playbackRate : 1;
    const isPlaying = !paused && playbackRate !== 0;
    const threshold = config.threshold || defaultThreshold;
    let time = frameTime;
    if (!isPlaying) {
      time = isFresh ? syncTime : lastTime;
    } else {
      const dt = (frameTime - lastFrameTime) * playbackRate;
      time = lastTime + dt;
      if (Math.abs(time - syncTime) > threshold) {
        if (isFresh) {
          time = syncTime;
        } else {
          paused = true;
        }
      }
      isFresh = false;
    }
    lastFrameTime = frameTime;
    if (time !== lastTime) {
      lastTime = time;
      sink.next(time);
    }
    if (isComplete) {
      sink.complete();
      timeSub.unsubscribe();
    }
  });
  const sub = timeSource.subscribe({
    next: (time) => {
      paused = time === syncTime;
      syncTime = time;
      isFresh = true;
    },
    complete: () => {
      isComplete = true;
    },
    error: (e) => {
      sink.error(e);
      timeSub.unsubscribe();
    }
  });
  return () => {
    sub.unsubscribe();
    timeSub.unsubscribe();
  };
});

// src/parsers/index.js
var parsers_exports = {};
__export(parsers_exports, {
  parseEasing: () => parseEasing,
  parseInterpolator: () => parseInterpolator,
  parseTime: () => parseTime
});
