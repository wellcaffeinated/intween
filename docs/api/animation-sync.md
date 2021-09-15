# animationSync()

```js
animationSync(config) // -> Operator
```

A way of ensuring that a jittery timesource provides time
input that is smooth enough for animation purposes.

Returns an operator that will transform a jittery time Observable
into a smooth one.

**Params**

* `{Object} config`
  * `{Number} config.threshold = 5000 / 60` - Threshold before it is considered a seek.

**Examples**

```js
const jittery = animationFrames()
  .pipe(map(t => t + Math.random() * 60)) // add a random number of milliseconds

// take this jittery timesource, and ensure smooth animations
jittery.pipe(
  animationSync()
).subscribe(time => {
  // mmm... buttery
})
```
