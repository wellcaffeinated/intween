---
sidebar: auto
---
# Guide

## Introduction

**InTween** is ...

## Installation

### ES6 / Webpack / npm

Like most other libraries these days, just install it with yarn/npm.

<code-group>
<code-block title="YARN">
```bash
yarn add intween
```
</code-block>

<code-block title="NPM">
```bash
npm install -s intween
```
</code-block>
</code-group>

Now you can import it and go!

```js
import { Tween, Meddle, Player } from 'intween'
```

### Old-School Script Tags

Feel free to include the library manually with a script tag. All functionality will be
kept inside a global `InTween` variable.

```js
const { Tween, Meddle, Player } = InTween // window.InTween
```

### CDN

::: tip TODO
cdn links
:::

## TLDR; (Too Long Didn't Read)

The sections after this one will go into MUCH more detail. But to quickly get something up and running, this is what you need:

* A Tween
* A Meddle
* A Player
* spreadAssign()
* animationThrottle()

```js
import { Tween, Meddle, Player, spreadAssign, animationThrottle } from 'intween'
```

Here's an example of creating a tween that changes a position from `[0, 0]`
to `[1, 1]` between 1s and 2s with quadratic easing:

```js
const tween = new Tween({
  position: [0, 0]
})

tween.to({
  position: [1, 1]
}, {
  startTime: '1s',
  endTime: '2s',
  easing: 'quadInOut'
})
```

To create a meddle to be able to override the position (eg: by user input)
with `backIn` easing, do this:

```js
const meddle = new Meddle(tween).easing('backIn')

// connect it to some interaction event
window.addEventListener('click', e => {
  const position = [e.clientX, e.clientY]
  meddle.set({ position })
})
```

Now you need to create a player to "play" the tween and the meddle and
subscribe to the output.

```js
const player = new Player(tween.duration)

player.pipe(
  spreadAssign(
    tween,
    meddle
  )
  , animationThrottle()
).subscribe(state => {
  // do stuff with state.position
})

player.play() // go!
```

## What is a Tween, really?

Many coders will be familiar with using tweens in other libraries. The word "tween"
is short for *inbetween*. Tweens are a way of moving through states inbetween a starting
and ending state. A state could be anything; a boolean, a string, a position vector.

InTween formalizes this idea a bit. Think of a Tween as something that takes **time**
as input, and gives **state** as output. They **do not** animate states all on their own.
They simply calculate the inbetween state for a given time.

:::tip
Tweens need to be paired with a [time source](#time-sources) to actually do animation.
:::

```
time -> Tween -> state
```

So by specifying **what** you want the state to be, and when you want it to get there,
a tween will calculate all the inbetween steps. This makes animation easy!

Example:

```js
const tween = new Tween({ value: 0 }).by('5s', { value: 5 })
// NB: time is in ms
tween.at(0) // => { value: 0 }
tween.at(1000) // => { value: 1 }
tween.at(2000) // => { value: 2 }
// ...
tween.at(5000) // => { value: 5 }
```

### Frames

Some libraries let you chain their version of tweens into timelines to get a more
complex multi-stage animation... This isn't necessary with InTween. Just keep
specifying more frames and the tween will connect the dots.

::: tip
Tweens can have many steps (aka "frames") to them. You'll almost never need
more than one tween for one whole animation.
:::

There are three main methods to specify frames:

* `Tween.by()`: By a certain time, the state should be...
* `Tween.in()`: In a certain time from the end of the last frame...
* `Tween.to()`: Set the state, and manually specify the timing information.

```js
tween.by('6s', { value: 6 }) // by t = 6s, value should be 6
tween.in('1s', { value: 7 }) // in 1s (t = 7s), value should be 7
tween.to(
  { value: 8 },
  { startTime: '7.5s', endTime: '8s' }
) // starting at 7.5s and ending at 8s transition the value from 7 to 8
```

### Durations

By default tweens use the full time between frames to transition (`duration = "100%"`).
But it doesn't need to! You can specify different durations.

```js
tween.to(
  { value: 8 },
  { startTime: '10s', duration: '0.5s' }
)
// ... same as ...
tween.by('8s', '0.5s', { value: 8 })
```

You can even specify durations as **percentages**.

```js
tween.by('1s', { value: 1 })
// use 10% of the time (1s) to transition to this next frame
tween.by('11s', '10%', { value: 2 })
```

### Time Formats

Times can be specified in many formats. If specified as a primitive number,
it will be interpreted to be in milliseconds (ms). If specified as a string,
you can use the following formats:

```js
"##:##" // minutes:seconds
"##:##:##" // hours:minutes:seconds
"#.#s" // # of seconds
"#.#m" // # of minutes
"#.#h" // # of hours
// durations can be expressed as percentages
"#.#%" // percentage of time between two frames
```

**Examples:**

```js
tween.in(2000, 1000, { value: 1 }) // in 2s (2000ms), transition duration 1s
tween.in('2s', '1s', { value: 1 }) // ... same
tween.in('10:10', '3:00', { value: 1 }) // in 10 minutes 10 seconds, duration 3 minutes
tween.in('10:10', '20%', { value: 1 }) // same with duration of 2 minutes 2 seconds (20%)
```

## Easing

Animation would be pretty boring without easing. Easing is the quality of the
transition between two states.

::: tip
For more details, see the [In Depth Documentation on State Transitions](/in-depth/#state-transitions)
:::

The simplest easing function is linear, which is also the default:

```js
// Behold, the linear easing function
const linear = n => n
```

But there are so many more possible ways to get from point A to point B.
For a nice visual reference of standard easing functions,
check out [easings.net](https://easings.net/).

InTween contains a set of easing functions adapted from the
[Phaser HTML5 game framework](https://github.com/photonstorm/phaser).

The easiest way to use them is to just specify their name as a string
for any InTween object methods.

For example:

```js
tween.by('1s', { value: 1 }, 'bounceOut') // use bounce easing
tween.to({ value: 1 }, { endTime: '1s', easing: 'bounceOut' })
```

However you can also import and use them directly...

```js
import { Easing } from 'intween'
tween.by('1s', { value: 1 }, Easing.bounceOut) // use bounce easing
```

Some easing functions can be *constructed* to customize them more.
For example, to take discrete steps, you can use the `makeSteps(n)`
easing *factory*.

```js
import { Easing } from 'intween'
tween.by('1s', { value: 1 }, Easing.makeSteps(5)) // take 5 discrete steps
```

## Time Sources

In the InTween library, Tween objects by themselves don't do anything.
They are just a way of mapping time to state. If you want an inbetween
state for a given time, you can call `Tween.at(t)` for a given time
to get the state.

If you really wanted you could do something like this:

```js
// a cumbersome way of animating...
const tween = new Tween({ x: 0 })
  .by('2s', { x: 2 }, 'quadInOut')
  .by('4s', { x: 0 }, 'quadInOut')
  .loop()

const startTime = window.performance.now()
const onAnimationFrame = () => {
  const time = window.performance.now() - startTime
  const state = tween.at(time)
  // update display using state
  // ...
  window.requestAnimationFrame(onAnimationFrame)
}

onAnimationFrame() // start
```

The above code sets up a tween, and gets the current state
every frame using requestAnimationFrame. If you want, you could
use InTween like this. **But there is a much nicer way...**

### Observables

Tweens are meant to be used as Operators for time [Observables](https://github.com/tc39/proposal-observable), which we'll elaborate on here.

::: tip
InTween is built on top of the concept of [Observables](https://rxjs.dev/guide/observable)
and works very well with [RXJS](https://rxjs.dev/).
:::

An Observable is very similar to a data stream. Most of the core
Observables in InTween are time-based. So you can subscribe to
changes in time. The most basic time Observable is created by calling
`animationFrames()`.

```js
// Every animation frame, this prints out the
// current time since subscribe was called
const subscription = animationFrames().subscribe(time => {
  console.log(time)
})

// later... we can cleanup
subscription.unsubscribe() // stop
```

::: warning
Be sure to clean up your subscriptions once you're done by calling
the subscription's `.unsubscribe()` method.
:::

So `animationFrames()` creates a time Observable that gives us
the current time every animation frame. If we want the tween
state, we just need to convert that time into state using the tween.
We mentioned earlier that a Tween is just an Operator. What this means
is that we can *pipe* the time through the tween operator to
get the state every animation frame, like so:

```js
import { animationFrames } from 'intween'
animationFrames()
  .pipe(tween)
  .subscribe(state => {
    // update display using state
  })
```

Wow! So much nicer. And also, much more versatile. But that's not all...

### Player

Sometimes all you need is a quick animation that plays all the
way through... but other times, you want to be able to pause,
seek, and replay your animation.

For more fine-grained control over the timing we can use a `Player`.

```js
import { Player } from 'intween'
// create a player to match the duration of our tween
const player = new Player(tween.duration)

const subscription = player.pipe(tween)
  .subscribe(state => {
    // update display using state
  })

// elsewhere...
player.pause()
player.seek(2000) // seek to 2s
player.playTo(3000) // play until 3s
player.on('end', () => {
  player.seek(0) // go back to start once ended
})
// cleanup when finished
subscription.unsubscribe()
player.destroy()
```

## Data Types and Interpolators

InTween was built to animate *anything*. In addition to connecting
the dots for numbers, InTween can handle all kinds of primitive types;
*Number, Boolean, String*. It can also handle arrays of numbers and
objects with numeric properties!

For example:

```js
const tween = new Tween({
  number: 0,
  boolean: false,
  string: "Hello",
  array: {
    type: Array,
    default: [0, 0, 0]
  },
  object: {
    type: Object,
    default: { x: 0, y: 0, z: 0 }
  }
})
.by('1s', {
  number: 1,
  boolean: true,
  string: "Hello World!",
  array: [1, 1, 1],
  object: { x: 1, y: 1, z: 1 }
})
```

::: tip
See [this example of tweening all kinds of types](/demos/all-interpolators).
:::

### Interpolators

You can read [In Depth about Interpolators](/in-depth/#state-transitions) but
the short version is this:

Interpolators tell you how to get the inbetween values for a given
type. All primitive types have default interpolators associated
with them. Most of the time, you won't need to worry about
interpolators for primitive types.

The boolean type is a bit of an exception, of course, because
there is no value between `true` and `false`. The boolean
type uses the `toggle` interpolator.

If we want we can use the toggle interpolator with numbers
by specifying it when we create a tween.

The following example creates a tween with a `myNumber`
property that only changes to its final value once the
10 seconds is up.

```js
new Tween({
  myNumber: {
    type: Number,
    default: 0,
    interpolator: 'toggle'
  }
})
.by('10s', { myNumber: 11 })
```

:::tip Angular Interpolators
When dealing with angles, sometimes it can be useful to use
either the `degrees` or `radians` interpolators to automatically
transition the shortest distance around the circle.
:::

Just as with [easing](#easing) functions, interpolators can be
referenced by name, or accessed by importing them:

```js
import { Interpolators } from 'intween'
```

And some interpolators can be created for more customizability:

```js
import { Interpolators } from 'intween'
new Tween({
  clock: {
    type: Number,
    default: 0,
    interpolator: Interpolators.makeCyclic(12) // mod 12
  },
  halfWay: {
    type: String,
    default: 'Hello',
    interpolator: Interpolators.makeToggle(0.5) // change half-way through
  }
})
```

### Custom Types

Although animations mostly revolve around changing numbers,
those numbers can be abstracted into concepts like vectors,
complex numbers, even quaternions. InTween can handle these
by defining custom interpolators.

But instead of specifying the interpolator on every state
property you need it for, you can just define your own custom
type using `registerType()`.

Let's say you had an [amazing 3D library](https://threejs.org/docs/index.html#api/en/math/Vector3)
and wanted to animate position vectors from that library.
You could create a custom type like so:

```js
import { registerType } from 'intween'
registerType({
  type: 'Vector3'
  , default: new THREE.Vector3()
  , interpolator: (from, to, k) => {
    return from.clone().lerp( to, k )
  }
})

const tween = new Tween({
  cubePos: { type: 'Vector3' }
})
.by('1s', { cubePos: new THREE.Vector3(1, 2, 3) })
```

## Interactive Tweens (Meddling)

## Extras

### Interoperation with D3 Interpolate

https://github.com/medikoo/memoizee

### Using Audio Players (like SoundCloud) as Time Sources

### Creating Slideshows
