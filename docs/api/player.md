# class Player

```js
new Player(totalTime) // -> Player
// -- or --
Player.create(totalTime) // -> Player
```

A time source that extends [Observable](/api/observable) that can be used
to start, stop, seek, and loop the input time at will.

Extends [`Emitter`](/api/emitter) and provides the following events:
`play`, `pause`, `togglePause`, `update`, `seek`, `end`, `destroy`

**Params**

* `{String | Number} totalTime` - The total time of this player

**Examples**

```js
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

## Player.progress

```js
player.progress // -> Number
player.progress = p // set progress
```

Get or set the progress of the player. Progress is the percentage
completion of the player.

## Player.time

```js
player.time // -> Number
player.time = t // set time
```

Get or set the current time of the player in milliseconds.

## Player.paused

```js
player.paused // -> Boolean
player.paused = isPaused // set paused state
```

Get or set the paused state.

## Player.playbackRate

```js
player.playbackRate // -> Number
player.playbackRate = isPaused // set playback rate
```

Get or set the playback rate. A negative value
will play backwards.

## Player.destroy()

```js
player.destroy() // -> void
```

Clean up subscriptions and events.

Emits `'destroy'` event.

## Player.loop()

```js
player.loop() // -> this
player.loop(false) // -> this
```

Enable or disable looping of the player. If looping, the player
begins again at `time = 0` upon completion, but still emits the
`'end'` event.

**Note**: You may want [Tween.loop()](/api/tween#tween-loop)
instead, depending on the situation.

## Player.pause()

```js
player.pause() // -> this
```

Pause.

## Player.play()

```js
player.play() // -> this
```

Play.

## Player.playTo()

```js
player.playTo(time) // -> this
```

Play up until specified time, then pause.

**Note**: If `time < player.time` then it will change
the playbackRate to be `-1` and play backwards to specified time.

**Params**

* `{String | Number} time`

## Player.seek()

```js
player.seek(time) // -> this
```

Seek to specified time in milliseconds.

Emits the `'seek'` event.

**Params**

* `{Number} time` - Time in milliseconds

## Player.togglePause()

```js
player.togglePause() // -> this
player.togglePause(toggle) // -> this
```

Set or toggle paused state.

**Params**

* `{Boolean} toggle` - If specified, sets the pause state. Otherwise,
  toggles or untoggles pause.


