# regulatedBy()

```js
regulatedBy(regulator) // -> Operator
regulatedBy(regulator, onlyNew) // -> Operator
```

Get an operator that will transform an observable into
one whose output is emitted only when `regulator` observable
emits a value.

**Params**

* `{Observable} regulator` - The observable whose emissions trigger emissions of
  the output observable.
* `{Boolean} onlyNew = false` - Whether the output observable should only emit
  values when the input observable has provided new ones.

**Examples**

```js
const everySecond = new Observable(sink => {
  const i = setInterval(() => sink.next(), 1000)
  return () => clearInterval(i)
})

player.pipe(
  tween,
  regulatedBy(everySecond, true)
).subscribe(state => {
  // update every second... except when player is paused
})
```
