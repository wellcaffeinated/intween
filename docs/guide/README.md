---
sidebar: auto
---

# Guide

## Introduction

**InTween** is a toolkit for creating interactive animations by [tweening](https://en.wikipedia.org/wiki/Inbetweening).
It performs similar functionality to other libraries like
[TWEENJS](https://createjs.com/tweenjs),
[animejs](https://animejs.com/), and
[tween.js](https://github.com/tweenjs/tween.js/).

**However InTween excels at creating interactive, and interrupted tweens.**
A great example of where you would do this is in creating
[interactive videos, like this one](https://labs.minutelabs.io/what-is-a-day/#/welcome).

The fastest way to get started is to [install InTween](#installation) and follow the
[TLDR instructions](#tldr-too-long-didn-t-read).

Many seasoned tweeners will be familiar with a
[tween.js](https://github.com/tweenjs/tween.js/) style of animating
things, so let's see how the self-contained example in their readme
would be implemented with InTween:

:::details The Tween.js Code

```js
const box = document.createElement('div')
box.style.setProperty('background-color', '#008800')
box.style.setProperty('width', '100px')
box.style.setProperty('height', '100px')
document.body.appendChild(box)

// Setup the animation loop.
function animate(time) {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}
requestAnimationFrame(animate)

const coords = {x: 0, y: 0} // Start at (0, 0)
const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
  .to({x: 300, y: 200}, 1000) // Move to (300, 200) in 1 second.
  .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
  .onUpdate(() => {
    // Called after tween.js updates 'coords'.
    // Move 'box' to the position described by 'coords' with a CSS translation.
    box.style.setProperty('transform', `translate(${coords.x}px, ${coords.y}px)`)
  })
  .start() // Start the tween immediately.
```

:::

Here's the InTween way to do it:

```js
const box = document.createElement('div')
box.style.setProperty('background-color', '#008800')
box.style.setProperty('width', '100px')
box.style.setProperty('height', '100px')
document.body.appendChild(box)

const tween = new InTween.Tween({ x: 0, y: 0 })
  .by('1s', { x: 300, y: 200 }, 'quadOut') // Move to (300, 200) in 1 second.
  // ...using an easing function to make the animation smooth.

// Start the tween immediately.
InTween.animationFrames()
  .pipe(tween)
  .subscribe((state) => {
    // Move 'box' to the position described by 'state' with a CSS translation.
    box.style.setProperty('transform', `translate(${state.x}px, ${state.y}px)`)
  })
```

## Installation

### ES6 / Webpack / npm

Like most other libraries these days, just install it with yarn/npm and bundle it with [webpack](https://webpack.js.org/) or [rollup](https://rollupjs.org/guide/en/).

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

```html
<script src="path/to/intween.min.js"></script>
<script>
const { Tween, Meddle, Player } = InTween // window.InTween
</script>
```

### CDN

You can also get InTween from a CDN:

```
https://unpkg.com/intween/dist/intween.min.js
```

```html
<script src="https://unpkg.com/intween/dist/intween.min.js"></script>
```

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

:::tip Takeaway
A `Tween` (in InTween) can be used to transition properties between many states with easing functions.
:::

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
const tween = new Tween({ x: 0 }).by('5s', { x: 5 })
// NB: time is in ms
tween.at(0)    // => { x: 0 }
tween.at(1000) // => { x: 1 }
tween.at(2000) // => { x: 2 }
// ...
tween.at(5000) // => { x: 5 }
```

### Frames

:::tip Takeaway
A Frame is a target state that tweens transition between.
:::

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

:::tip Takeaway
Easing functions modify how a transition "feels". They change the way
that one state transitions to another.
:::

Animation would be pretty boring without easing. Easing is the quality of the
transition between two states.

You can try out some easing functions here to see what they look like:

<EasingDemo />

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

<EasingDemo :easing="InTween.Easing.makeSteps(5)" />

:::tip
It's also possible to combine easing functions using `pipe` or `Util.combineEasing`.
:::

You can also combine easing functions for more complex behaviour. Although,
success can be a bit hit or miss in terms of smoothness. To combine easing
functions using them one after another, you can reference them by name:

```js
tween.by('1s', { value: 1 }, 'quadIn + backOut')
```

<EasingDemo easing="quadIn + backOut" />

or use `Util.combineEasing`:

```js
import { Util, Easing } from 'intween'
const combined = Util.combineEasing(
  Easing.quadIn,
  Easing.backOut
)
tween.by('1s', { value: 1 }, combined)
```

Sometimes you can get better results by using `pipe()`, which is the same as
doing `k => Easing.bounceOut(Easing.quadIn(k))`.

```js
import { pipe, Easing } from 'intween'
const fall = pipe(
  Easing.quadIn,
  Easing.bounceOut
)
tween.by('1s', { value: 1 }, fall)
```

<EasingDemo :easing="InTween.pipe(InTween.Easing.quadIn, InTween.Easing.bounceOut)" />

## Time Sources

:::tip Takeaway
Time sources like `Player` and `animationFrames` provide the time
input used by `Tween` and `Meddle`.
:::

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
Observables in InTween are time-based. So you can subscribe to them to react to
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

Here's a little demo showing how you could build your own
UI for a player and attach the player instance to a
play/pause button, a scrubber, and a time display.

<ClientOnly>
  <TweenDemo name="player-controls" />
</ClientOnly>

<code-group>
<code-block title="js">
<<< @/docs/demos/player-controls/player-controls.js
</code-block>

<code-block title="html">
<<< @/docs/demos/player-controls/player-controls.html
</code-block>

<code-block title="css">
<<< @/docs/demos/player-controls/player-controls.css
</code-block>
</code-group>

## Data Types and Interpolators

InTween was built to animate *anything*. In addition to connecting
the dots for numbers, InTween can handle all kinds of primitive types;
*Number, Boolean, String*. It can also handle objects with numeric properties
and arrays of any known type!

For example:

```js
const tween = new Tween({
  number: 0,
  boolean: false,
  string: "Hello",
  array: {
    type: Array,
    value: [0, 0, 0]
  },
  object: {
    type: Object,
    value: { x: 0, y: 0, z: 0 }
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
the short version is this: **Interpolators tell you how to get the inbetween
values for a given type.**

All primitive types have default interpolators associated
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
    value: 0,
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
    value: 0,
    interpolator: Interpolators.makeCyclic(12) // mod 12
  },
  halfWay: {
    type: String,
    value: 'Hello',
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

:::tip Takeaway
A `Meddle` can be used to override a Tween state temporarily
and gracefully return to the correct Tween state at a later time.
:::

So far we have been creating non-interactive animations. The main
strength of InTween is its ability to **interactively** tween things.

The main idea behind interactive tweening is this: A tween's state
is overriden by user interaction (called meddling), and then
seemlessly returned to the main tween timeline.

Here's a cartoon depiction of the process:

```
        (interaction)
              x------[Meddle]---\
                                 \
x-------[Tween]-------------------`-------x
```

The way we achieve this is by using a `Meddle` object. A `Meddle`
object needs awareness of the tween it will be "meddling" with
so that it can peek ahead at the state it needs to merge back with
in future.

```js
const meddle = new Meddle(tween)
```

Like the `Tween` object, it also operates on time Observables... that is
to say, you can `pipe()` a time Observable through it like this:

```js
player
  .pipe(meddle)
  .subscribe(state => {
    // use the meddled state
  })
```

The default meddle state is empty (`{}`), so this alone wouldn't do much.
However if we call `meddle.set()` we can influence the current meddle state.

```js
// on user interaction...
meddle.set({ x: userX })
```

Some things to note:

1. Any call to `.set()` will trigger an override and the internal timer
tracking when to rejoin the tween will reset.
2. The property definitions of the meddle should match the tween it's meddling.
3. The properties specified in a `.set()` call will be merged into the meddle's
current state. So calling `.set({ x: 1 }).set({ y: 2 })` is equivalent to
`.set({ x: 1, y: 2 })`.

We can also influence how long we want to override the state, and how
it should return to the tween state. We can do this ahead of time
or when interaction happens.

```js
const meddle = new Meddle(tween, {
  relaxDelay: '1s',
  relaxDuration: '2s',
  easing: 'bounceOut',
})
// -- and/or --
meddle.relaxDelay('1s')
  .relaxDuration('2s')
  .easing('quadInOut')
```

We can also prevent the meddle state from returning to the tween entirely
by freezing the meddle where it is.

```js
meddle.freeze() // stay like this
meddle.freeze(false) // release
```

### Merging Tween and Meddle States with spreadAssign()

:::tip Takeaway
The `spreadAssign()` function spreads the time input
across several time Operators and then merges their
resulting states together.

```
spreadAssign(A, B, C, ...): t -> A(t) ∪ B(t) ∪ C(t) ∪ ...
```
:::

The Tween and Meddle states need to be used together and merged together.
The way we can do this is by using a function called `spreadAssign()`.
What it does is take the time input from a [Time Source](#time-sources),
feed it into multiple operators and use `Object.assign()` to merge
the states together.

The standard way of combining a tween and a meddle would be something like
this:

```js
player.pipe(
  spreadAssign(
    tween,
    meddle
  )
).subscribe(state => {
  // combined state
})
```

And if you need more meddles, just add them!

```js
spreadAssign(
  tween,
  meddle,
  meddle2,
  /// ...
)
```

### Optimizing rendering with animationThrottle()

:::tip Takeaway
Placing `animationThrottle()` at the end of your state stream will
prevent unnecessary reactions to state changes. (IE: it limits
updates to the speed of `window.requestAnimationFrame`)
:::

Normally, any changes to state will feed into the final `subscribe()`
callback. If you have a bunch of `meddle.set()` calls, this may mean
that the subscribe callback will get called faster than a normal
60 frames per second. This is unnecessarily wasteful on resources.

To correct this, we can use a special operator called `animationThrottle()`
which simply removes the unnecessary extra updates. This makes it good practice
to place it at the end of your `pipe()` right before you update the visuals
of your animation.

```js
player.pipe(
  spreadAssign(
    tween,
    meddle
  ),
  animationThrottle()
).subscribe(state => {
  // combined state
})
```

## Smoothing User Interaction

:::tip Takeaway
By using ``smoothen()`` you can transition smoothly to
target states on demand.
:::

So far, the user interaction has overridden the state instantly. But
often we'd like that to be a smooth transition from the tween state
to the override state.

For example, if a user clicks on the screen we might want to
move an object there smoothly. And if they click elsewhere
_during_ the transition, we'd like to respond to that smoothly too.

To do this we use `smoothen()`. Technically, this creates an operator
that maps an Observable over [Frames](#frames) to animation states.

An example is called for...

<ClientOnly>
  <TweenDemo name="smoothen-demo" />
</ClientOnly>

<code-group>
<code-block title="js">
<<< @/docs/demos/smoothen-demo/smoothen-demo.js
</code-block>

<code-block title="html">
<<< @/docs/demos/smoothen-demo/smoothen-demo.html
</code-block>

<code-block title="css">
<<< @/docs/demos/smoothen-demo/smoothen-demo.css
</code-block>
</code-group>

:::tip
A `Subject` is a quick way of creating observables.
For more information on `Subject`, see the [rxjs documentation on Subject](https://rxjs.dev/guide/subject).
:::

The above code would move a div element whenever you click on the
page. And if you click while the div is currently moving, it will
compensate for the new end position in a smooth way.

:::warning
When using this with a `Meddle` you'll need to provide a state
getter function to ensure that smoothen knows where to start from.
:::

You can easily send the output of smoothen into a Meddle to
make the meddling smooth! However, when using `smoothen()`
to meddle with a tween, there's an extra step that needs to happen.
Since a tween may change the state without `smoothen()`
knowing about it, we need to provide a getter function so that
it is aware of these changes.

```js{10,18,20}
// elsewhere...
let animationState
player.pipe(
  spreadAssign(
    tween,
    meddle
  ),
  animationThrottle()
).subscribe(state => {
  animationState = state
  // update views...
})

/// smooth our meddles
clicks.pipe(
  smoothen(
    { duration: '1s', easing: 'quadOut' },
    () => animationState
  )
).subscribe(state => meddle.set({ position: state.position }))
```

## Recipes and Extras

### Tweening Colors

When tweening colors, a nice way to do it is by using the amazing
[chromajs library](https://gka.github.io/chroma.js/) and registering
a new type for it.

<ClientOnly>
  <TweenDemo name="colors-example" />
</ClientOnly>

<code-group>
<code-block title="js">
<<< @/docs/demos/colors-example/colors-example.js
</code-block>

<code-block title="html">
<<< @/docs/demos/colors-example/colors-example.html
</code-block>

<code-block title="css">
<<< @/docs/demos/colors-example/colors-example.css
</code-block>
</code-group>

### Using Audio Players (like Howler or SoundCloud) as Time Sources

As long as the audio player's api can tell you what
time the audio is at (which is almost always the case)
then you can create a timesource from it by using a
combination of `animationSync()`, `animationFrames()` and `map()`.
The `animationSync()` function ensures that even if there are
small jumps in the precision of the reporting of the time, the animation
will still come out smooth on the other side. The `animationSync`
will also only report new time values which reduces costly rendering
when paused.

Here's a funky demo that does this with [Howler](https://howlerjs.com/).

<ClientOnly>
  <TweenDemo name="howler-example" />
</ClientOnly>

<code-group>
<code-block title="js">
<<< @/docs/demos/howler-example/howler-example.js
</code-block>

<code-block title="html">
<<< @/docs/demos/howler-example/howler-example.html
</code-block>

<code-block title="css">
<<< @/docs/demos/howler-example/howler-example.css
</code-block>
</code-group>

If the audio player api provides a playback
event (like SoundCloud does) then you can plug into that.

Here's how you might do use the soundcloud widget as a
time source:

```js
import { Subject spreadAssign, animationThrottle } from 'intween'

const scTimeSource = new Subject()

// somehow create a soundcloud widget, then...
widget.bind(SC.Widget.Events.PLAY_PROGRESS, e => {
  const time = e.currentPosition
  scTimeSource.next(time)
})

scTimeSource.pipe(
  spreadAssign(
    tween,
    meddle
  )
  , animationThrottle()
).subscribe(state => {
  // ...
})
```

### Creating Slideshows

Here's a demo that shows a very easy way to create slideshows!
The trick is to use `player.playTo()` so that it plays until
the next slide. You can go all out and animate the slide content
too, of course!

<ClientOnly>
  <TweenDemo name="slideshow-example" />
</ClientOnly>

<code-group>
<code-block title="js">
<<< @/docs/demos/slideshow-example/slideshow-example.js
</code-block>

<code-block title="html">
<<< @/docs/demos/slideshow-example/slideshow-example.html
</code-block>

<code-block title="css">
<<< @/docs/demos/slideshow-example/slideshow-example.css
</code-block>
</code-group>
