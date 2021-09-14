
# class Meddle

```js
new Meddle(tween) // -> Meddle
new Meddle(tween, options) // -> Meddle
// -- or --
Meddle.create(tween) // -> Meddle
Meddle.create(tween, options) // -> Meddle
```

A `Meddle` is the primary way to override an animation in progress conducted by a tween.
It is an [operator](https://rxjs.dev/guide/operators) that can be called with an [Observable](https://rxjs.dev/guide/observable) of times and output an Observable of states.

**Params**

* `{Object} tween` - Tween the meddle is meant to override
* `{Object} options`
  * `{Number | String} options.relaxDuration = 500` - Default duration to return to tween timeline
  * `{Number | String} options.relaxDelay = 1000` - Default duration to wait before transitioning back to tween timeline
  * `{String | Function} options.easing = 'linear'` - Default easing

**Examples**

```js
import { of } from 'rxjs'

const times = of(0, 1000, 2000)
const tween = Tween.create({ x: 1 }).in('2s', { x: 2 })
const meddle = Meddle.create(tween, { relaxDelay: 0, relaxDuration: '2s' })
const states = meddle(times)

meddle.set({ x: 42 })
states.subscribe(state => console.log(state))
// -> { x: 42 }
// -> { x: 22 }
// -> { x: 2 }
```

## Meddle.options

```js
meddle.options // -> Object
```

Get or set the options directly.


## Meddle.at()

```js
meddle.at(time) // -> Object
```

Get the meddle state for a given input time.

**Params**

* `{Number} time` - Time in milliseconds (ms)

## Meddle.clear()

```js
meddle.clear() // -> this
```

Clear the meddle state.

## Meddle.defaults()

```js
meddle.defaults() // -> this
```

Set the `relaxDuration`, `relaxDelay`, and `easing` back to their defaults.

## Meddle.easing()

```js
meddle.easing(easing) // -> this
```

Set the easing function. If no `easing` is provided, it will use the default.

**Params**

* `{String | Function} easing`

## Meddle.freeze()

```js
meddle.freeze() // -> this
meddle.freeze(false) // -> this
```

Freeze the meddle to prevent transitioning back to the tween timeline.

**Params**

* `{Boolean} toggle = true` - Set to false to disable freeze

## Meddle.relaxDelay()

```js
meddle.relaxDelay(delay) // -> this
```

Set the time to wait after the last call to [`Meddle.set()`](#Meddle-set)
before relaxing the override. If no `delay` is provided, it will use the default.

**Params**

* `{Number | String} delay` - The delay time

## Meddle.relaxDuration()

```js
meddle.relaxDuration(duration) // -> this
```

Set the duration of the relax transition. If no `duration`
is provided, it will use the default.

**Params**

* `{Number | String} duration` - The duration time

## Meddle.set()

```js
meddle.set(state) // -> this
```

Set the meddle state. If the meddle has not been fully relaxed
further calls to `.set()` add to the current state. The meddle
will only override and transition between values specified,
even if the tween contains additional values.

**Params**

* `{Object} state`

**Examples**

```js
const tween = Tween.create({ x: 1, y: 50 }).in('2s', { x: 2, y: 55 })
const meddle = Meddle.create(tween)
meddle.set({ x: 42 })
meddle.at(0) // -> { x: 42 }
```

```js
const tween = Tween.create({ x: 1, y: 50 }).in('2s', { x: 2, y: 55 })
const meddle = Meddle.create(tween)
meddle.set({ x: 42 }).set({ y: 0 })
meddle.at(0) // -> { x: 42, y: 0 }
```
