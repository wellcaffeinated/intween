# Interpolators

All interpolators are contained in this namespace.

All interpolators take the form

```js
(from, to, t) => result
```

* `from` - start value
* `to` - end value
* `t` - fractional time `[0, 1]`

## Pre-defined Interpolators

### array

Interpolates arrays of numbers.

### degrees

Interpolates in the direction of shortest angle in degrees.

**Example**

```js
// goes clockwise, since that is shortest path
Interpolators.degrees(0, 270, 0.5) // -> -45
```

### linear

Interpolates numbers. (same as lerp())

### object

Interpolates objects with numeric properties.

### radians

Interpolates in the direction of shortest angle in radians.

**Example**

```js
// goes clockwise, since that is shortest path
Interpolators.radians(0, 3 * Math.PI / 2, 0.5) // -> -0.7853981633974483
```

### string

Interpolates strings by starting with an empty string and building up to
the end.

**Example**

```js
Interpolators.string('start', 'ending', 0.5) // -> 'end'
```

### toggle

For arbitrary types. Immediately switches to the end state upon completion.

```js
Interpolators.toggle('Hello', 'World', 0.5) // -> 'Hello'
Interpolators.toggle('Hello', 'World', 1) // -> 'World'
```

## Interpolator Factory Functions

This set of functions is used to create interpolators.

### makeCyclic()

```js
makeCyclic(len) // -> Function
```

Make a cyclic iterator (similar to [degrees](#degrees) or [radians](#radians))
with a specified cycle length. It will transition taking the shortest
path between the start and end values.

**Params**

* `{Number} len` - The length of the cycle

### makeForArray()

```js
makeForArray(interp) // -> Function
```

Make an interpolator for arrays of a custom type.

**Params**

* `{Function} interp` - The function to use to interpolate the array's members

**Examples**

```js
// for arrays of strings...
Interpolators.makeForArray(Interpolators.string)
```

### makeToggle()

```js
makeToggle(threshold) // -> Function
```

Create a toggle interpolator that changes at a custom time

**Params**

* `{Number} threshold` - The fractional time (`[0, 1]`) to switch
