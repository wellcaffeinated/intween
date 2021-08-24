# InTween

# ideas

Should have 'auto' duration setting to make duration since last frame

```javascript
const manager = InTween({
  x: Number
  , y: Number
  , pos: {
    type: [ Number, Number ]
    , interpolator: InTween.Interpolators.Circular
  }
  , angle: {
    type: Number
    , modulo: Math.PI * 2 // allows for transitioning around a cyclic property
  }
  , toggle: Boolean
  , binaryValue: {
    type: Number // 0 or 1
    , interpolator: InTween.Interpolators.Immediate
  }
  , selectBox: [ 'One', 'Two', 'Three' ] // infers that this is a property that stores one of the following values
}, {
  transition: '1s' // default transition time
})


manager.frame({
  x: 50
  // the rest set to zero
}, {
  name: 'start'
  , time: 0
  , transition: [0, 100] // 0ms transition TO. 100ms transition if scrubbing backwards
})


manager.frame({
  $meta: {
    inherit: 'start'
    , time: '10s'
    , name: 'the next one'
    , transition:
  }
  // x inherited value `50`
  , y: 10
})

manager.frame({
  x: 10
}, {
  time: '20s'
  , duration: '88%' // takes up 88% of time between previous frame end and
                    // this frame to transition
})

manager.to('the next one') // transition to named frame

manager.get() // get the state

manager.set({  }) // set the state

manager.meddle({ }) // user meddling. Tracks changes for future snap back

manager.nextFrame() // state look ahead
manager.prevFrame() // state look back

manager.step( timestep ) // if using like video
manager.next() // if using like slideshow
manager.prev()

manager.export() // DEVELOPMENT tool. console.copy the current state for easier authoring

// Syncher helper for jittery audio players (eg: howler)
let cleanup = InTween.Syncher({
  getPlaybackRate: () => howl.rate()
  , isPlaying: () => howl.playing()
  , getTime: () => howl.seek() * 1000
  , onFrame: ( time, now, { isPlaying } ) => {
    // do stuff eg...
    manager.seek( time )
  }
})

```


## Todo

[ ] A way to quickly add "activate/deactivate" keyframes for booleans, say
[ ] duration: 0 has bugs
[ ] duration: 100% has bugs
