# smoothen()

```js
smoothen(config) // -> Observable<Object>
smoothen(getState => {}) // -> Observable<Object>
smoothen(config, getState => {}, schema) // -> Observable<Object>
```

`smoothen` creates an operator that maps an Observable over
target states (frames) to an Observable over animation states.

Use `smoothen()` to smoothly transition between target states in
real-time.

**Params**

* `{Object} config`
  * `{Number | String} config.duration = 1000` - Transition duration
  * `{String | Function} config.easing = 'cubicOut'` - Transition easing
* `{Function} getState` - Getter function to get current state. Useful
  when the state is being overriden by something else (like a [Meddle](/api/meddle))
* `{Object} schema` - If specified, will be used to create the schema
  used in transitions. Otherwise, the first observed state will be used.

**Examples**

```js
const targets = new Subject()
const animationStates = smoothen({ easing: 'quadOut' })(targets)

animationStates.subscribe(state => {
  // update view using state.x, state.y
})

window.addEventListener('click', event => {
  const { x, y } = getMousePositionSomehow(event)
  targets.next({ x, y })
})
```

```js
const clicks = new Subject()
window.addEventListener('click', event => {
  const { x, y } = getMousePositionSomehow(event)
  clicks.next({ x, y })
})

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
    { easing: 'quadOut' },
    () => animationState
  )
).subscribe(state => {
  const { x, y } = state
  meddle.set({ x, y })
})
```
