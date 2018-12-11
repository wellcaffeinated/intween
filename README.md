# Copilot

# ideas

```javascript
const manager = Copilot({
  x: Number
  , y: Number
  , pos: {
    type: [ Number, Number ]
    , interpolator: Keymanager.Interpolators.Circular
  }
  , toggle: Boolean
  , binaryValue: {
    type: Number // 0 or 1
    , interpolator: Keymanager.Interpolators.Immediate
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
```
