# frames.js

# ideas

```javascript
const frames = Keyframes({
  x: Number
  , y: Number
  , pos: { 
    type: [ Number, Number ]
    , interpolator: Keyframes.Interpolators.Circular
  }
  , toggle: Boolean
  , binaryValue: {
    type: Number // 0 or 1
    , interpolator: Keyframes.Interpolators.Immediate
  }
  , selectBox: [ 'One', 'Two', 'Three' ] // infers that this is a property that stores one of the following values
}, {
  transition: '1s' // default transition time
})


frames.frame({
  x: 50
  // the rest set to zero
}, {
  name: 'start'
  , time: 0
  , transition: [0, 100] // 0ms transition TO. 100ms transition if scrubbing backwards
})


frames.frame({
  $meta: {
    inherit: 'start'
    , time: '10s'
    , name: 'the next one'
    , transition:
  }
  // x inherited value `50`
  , y: 10
})

frames.to('the next one') // transition to named frame

frames.get() // get the state

frames.set({  }) // set the state

frames.meddle({ }) // user meddling. Tracks changes for future snap back

frames.nextFrame() // state look ahead
frames.prevFrame() // state look back

frames.step( timestep ) // if using like video
frames.next() // if using like slideshow
frames.prev() 

frames.export() // DEVELOPMENT tool. console.copy the current state for easier authoring
```
