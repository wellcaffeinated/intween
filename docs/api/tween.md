
# class Tween

```js
new Tween(schema) // -> Tween
new Tween(schema, options) // -> Tween
// -- or --
Tween.create(schema) // -> Tween
Tween.create(schema, options) // -> Tween
```

A `Tween` is the primary tool for creating animations. It is an
[operator](https://rxjs.dev/guide/operators) that can be called with an
[Observable](https://rxjs.dev/guide/observable) of times and output an
Observable of states.

**Params**

* `{Object} schema`
* `{Object} options`
  * `{Number | String} options.tweenDuration = '100%'` - Default duration
  * `{String | Function} options.easing = 'linear'` - Default easing

**Examples**

```js
import { of } from 'rxjs'

const times = of(0, 1000, 2000)
const tween = Tween.create({ x: 1 }).in('2s', { x: 2 })
const states = tween(times)
states.subscribe(state => console.log(state))
// -> { x: 1 }
// -> { x: 1.5 }
// -> { x: 2 }
```

## Tween.duration

```js
tween.duration // -> Number
```

The current total duration of the tween. (read only)


## Tween.at()

```js
tween.at(time) // -> Object
```

Get the tween state for a given input time.

**Params**

* `{Number} time` - Time in milliseconds (ms)


## Tween.by()

```js
tween.by(endTime, frame) // -> this
tween.by(endTime, frame, easing) // -> this
tween.by(endTime, duration, frame) // -> this
tween.by(endTime, duration, frame, easing) // -> this
```

Specify a transition ending at `endTime`.

**Params**

* `{Number | String} endTime`
* `{Object} frame` - The target frame
* `{Number | String} duration`
* `{String | Function} easing`

**Examples**

```js
tween.by('1s', { x: 1 })
tween.by('1s', '50%', { x: 1 })
tween.by('1s', '0.5s', { x: 1 }, 'quadOut')
```

## Tween.in()

```js
tween.in(delay, frame) // -> this
tween.in(delay, frame, easing) // -> this
tween.in(delay, duration, frame) // -> this
tween.in(delay, duration, frame, easing) // -> this
```

Specify a transition ending `delay` time after current tween duration.

**Params**

* `{Number | String} delay` - Time after "now" (current tween duration) to end the transition
* `{Object} frame` - The target frame
* `{Number | String} duration`
* `{String | Function} easing`

**Examples**

```js
// a steady increase
tween
  .in('1s', { x: 1 })
  .in('1s', { x: 2 })
  .in('2s', { x: 4 })
```

## Tween.loop()

```js
tween.loop() // -> this
tween.loop(false) // -> this
```

Enable or disable looping of the tween. By default, tweens do not progress
past their duration and remain fixed at the last frame. Looping restarts
the tween at the beginning when the input time is longer than the tween
duration.

**Params**

* `{Boolean} toggle = true` - Set to false to disable looping.

**Examples**

```js
// a smooth oscillation
Tween.create({ x: 1 }, { easing: 'quadInOut' }) // start at x = 1
  .in('1s', { x: 2 }) // transition to x = 2
  .in('1s', { x: 1 }) // transition back to x = 1
  .loop()
```

## Tween.to()

```js
tween.to(frame, options) // -> this
```

Specify a transition with the target state and timing information.

**Params**

* `{Object} frame` - The target frame
* `{Object} options` - Two of the following specified
  * `{Number | String} options.startTime`
  * `{Number | String} options.endTime`
  * `{Number | String} options.duration`
* `{String | Function} options.easing` - The easing function

**Examples**

```js
tween.to({ x: 1 }, { startTime: '1s', endTime: '2s' })
tween.to({ x: 1 }, { startTime: '1s', duration: '1s' })
tween.to({ x: 1 }, { duration: '1s', endTime: '2s', easing: 'quadOut' })
tween.to({ x: 1 }, { duration: '50%', endTime: '2s' })
tween.to({ x: 1 }, { duration: '0:01', endTime: 2000 })
```

## Tween.withTime()

```js
tween.withTime() // -> this
```

Includes the time in the state output.

**Params**

* `{String} label = 'time'` - The property label to use for the time variable

**Examples**

```js
const tween = Tween.create({ x: 1 }).withTime().in('2s', { x: 2 })
animationFrames().pipe(tween).subscribe(state => {
  const currentTime = state.time
})
```

