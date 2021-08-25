---
sidebar: auto
---
# Guide

## Introduction

**InTween** is ...

## Quick Start

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

```js
import { Tween, Meddle, Player, spreadAssign } from 'intween'
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
  const position = [e.pageX, e.pageY]
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




```
tween = new Tween({ x: 0 }, { tweenDuration: '1s' })
tween.to({ x: 1 }) // to x = 1 at 1s
tween.to({ x: 2 }) // to x = 2 at 2s

tween.by('3s', { x: 3 }) // to x = 3 at 3s
tween.in('2s', { x: 5 }) // to x = 5 at 5s
tween.to({ x: 7 }, { start: '6s', end: '7s' }) // to x = 7 at 7s (start at 6s)
tween.by('10s', '50%', { x: 10 }) // to x = 10 at 10s (start at 8.5s)
tween.in('2s', '50%', { x: 12 }) // to x = 12 at 12s (start at 11s)
```
