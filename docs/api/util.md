# Util

Namespace for utility functions.

## Util.identity

```js
Util.identity = a => a
```

No op function.

## Util.castArray()

```js
Util.castArray(value) // -> Array
```

**Params**

* `{Array | any} value` - If not an array, wrap value in an array

## Util.clamp()

```js
Util.clamp(min, max, v) // -> Number
```

Clamp value `v` between specified limits

**Params**

* `{Number} min`
* `{Number} max`
* `{Number} v` - Value to be clamped

## Util.filterObjectValues()

```js
Util.filterObjectValues(obj, fn) // -> Object
```

Return an object with properties filtered by filter function.

**Params**

* `{Object} obj`
* `{Function : (value, key) => bool} fn` - The filter function

## Util.getIntersectingPaths()

```js
Util.getIntersectingPaths(first, second) // -> Array
```

Return a list of keys that both objects share.

**Params**

* `{Object} first`
* `{Object} second`

## Util.cloneDeep()

```js
Util.cloneDeep(value) // -> Object | Array | Function
```

Perform a deep clone of value.

**Params**

* `{any} value` - Value to clone

## Util.combineEasing()

```js
Util.combineEasing(...easings) // -> Function
```

Combine all specified easing functions such that
the result is an evenly spaced piecewise combination.

## Util.isObjectLike()

```js
Util.isObjectLike(value) // -> Boolean
```

Check if a value is `typeof` object.

**Params**

* `{any} value` - Value to check

## Util.isPlainObject()

```js
Util.isPlainObject(value) // -> Boolean
```

Check if a value is a plain object.

**Params**

* `{any} value` - Value to check


## Util.invLerp()

```js
Util.invLerp(from, to, x) // -> Number
```

Returns the fraction that `x` is between `from` and `to`.

**Params**

* `{Number} from`
* `{Number} to`
* `{Number} x` - Value between `[from, to]`

## Util.invLerpClamped()

```js
Util.invLerpClamped(from, to, x) // -> Number
```

Clamps the output of [`Util.invLerp()`](#invLerp) between `[0, 1]`.

**Params**

* `{Number} from`
* `{Number} to`
* `{Number} x` - Value between `[from, to]`

## Util.lerp()

```js
Util.lerp(from, to, t) // -> Number
```

Returns the interpolated value between two numbers.

**Params**

* `{Number} from`
* `{Number} to`
* `{Number} t` - Value between `[0, 1]`

## Util.lerpClamped()

```js
Util.lerpClamped(from, to, t) // -> Number
```

Clamps the output of [`Util.lerp()`](#lerp) between `[min, max]`.

**Params**

* `{Number} from`
* `{Number} to`
* `{Number} t` - Value between `[0, 1]`

## Util.mapProperties()

```js
Util.mapProperties(obj, fn) // -> Object
```

Return an object with properties mapped by a mapping function.

**Params**

* `{Object} obj`
* `{Function : (value, key) => any} fn` - The mapping function

## Util.mergeIntersecting()

```js
Util.mergeIntersecting(first, second) // -> Object
```

Merge properties from the second object into the first,
but only take properties that are present in the first.

**Params**

* `{Object} first`
* `{Object} second`

## Util.now()

```js
Util.now() // -> Number
```

Get the current time from `performance.now` or `process.hrtime`.

## Util.pick()

```js
Util.pick(obj, keys) // -> Object
```

Return an object only containing specified keys.

**Params**

* `{Object} obj`
* `{String[]} keys` - Array of keys

## Util.pull()

```js
Util.pull(arr, item) // -> arr
```

Remove item from array if present and return the modified array.

**Params**

* `{Array} arr`
* `{any} item` - The item to remove

## Util.sanitizedObject()

```js
Util.sanitizedObject(obj) // -> Object
```

Remove all keys from object that have `undefined` values.

**Params**

* `{Object} obj`

## Util.shortestModDist()

```js
Util.shortestModDist(a0, a1, modulo) // -> Number
```

Get the shortest distance between `a0` and `a1` on a ring
of mod `modulo`.

**Params**

* `{Number} a0`
* `{Number} a1`
* `{Number} modulo`

## Util.sortedIndex()

```js
Util.sortedIndex(array, value) // -> Number
Util.sortedIndex(array, value, callback) // -> Number
Util.sortedIndex(array, value, retHighest) // -> Number
Util.sortedIndex(array, value, callback, retHighest) // -> Number
```

Implementation of [lodash.sortedIndex](http://lodash.com/docs#sortedIndex).
