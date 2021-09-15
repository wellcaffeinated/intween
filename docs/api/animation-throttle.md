# animationThrottle()

```js
animationThrottle() // -> Operator
```

Get an operator that will transform an observable into
one whose output is throttled to animation frame timing.

This is useful for avoiding unnecessary draws and view updates.

**Examples**

```js
player.pipe(
  // normally this would output whenever any tween
  // or meddle updates
  spreadAssign(
    tween,
    tween2,
    tween3,
    meddle1,
    meddle2
  ),
  // ... but this fixes that!
  animationThrottle()
).subscribe(state => {
  // combined state at requestAnimationFrame timing
})
```
