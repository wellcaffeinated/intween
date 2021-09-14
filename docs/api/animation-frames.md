# animationFrames()

```js
animationFrames() // -> Observable<Number>
```

Create an Observable over the time in milliseconds since
`.subscribe()` was called on every animation frame.

**Examples**

```js
animationFrames().subscribe(time => {
  // time starts at 0
  // runs every animation frame
})
```
