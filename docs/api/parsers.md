# Parsers

Helper functions for parsing things like time values or easing names.

## parseEasing()

```js
parseEasing(value) // -> Function
```

Return an easing function for the input.

**Params**

* `{String | Function} value` - The easing name, or compound name. If it's a
  function, then that is simply returned.

**Examples**

```js
Parsers.parseEasing('backIn + quadOut') // -> compound easing function
```

## parseInterpolator()

```js
parseInterpolator(value) // -> Function
```

Return an interpolator function for the input.

**Params**

* `{String | Function} value` - The interpolator name. If it's a
  function, then that is simply returned.

**Examples**

```js
Parsers.parseInterpolator('radians') // -> Interpolators.radians
```

## parseTime()

```js
parseTime(value) // -> Function
```

Return a value for the time in milliseconds (ms) for a time formatted
string.

**Params**

* `{String | Number} value` - The time in an appropriate format. If it's a
  number, then that is simply returned.

**Examples**

```js
Parsers.parseTime('2.5s') // -> 2500
Parsers.parseTime('2:00') // -> 120000
```
