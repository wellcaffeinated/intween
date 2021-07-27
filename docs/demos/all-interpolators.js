import { createPlayer } from '../lib/player-ui'

// setup our instance
const manager = Copilot({
  number: {
    type: Number
    , default: 0
  }
  , step: {
    type: Number
    , default: 1
    , interpolator: Copilot.Interpolators.makeToggle(0.25) // switches 1/4 of the way through
  }
  , angle: {
    type: Number
    , default: 0
    , interpolator: Copilot.Interpolators.angle
  }
  // By default boolean values will switch half way between. This can be changed
  // by specifying interpolatorOpts like "step" above
  , toggle: false
  , array: {
    type: Array
    , default: [0, 0, 0]
  }
  , object: {
    type: Object
    , default: { x: 0, y: 0, z: 0 }
  }
  , text: {
    type: String
    , default: ''
  }
})

// transition to...
manager.add({
  number: 10
  , step: 9000
  , angle: 4 // radians... results in just over 1/2 rotation, so it spins the other way
  , toggle: true
  , array: [ 1, 2, 3 ]
  , text: 'Hello World!'
  , object: { x: 1, y: 2, z: 3 }
}, {
  time: '4s'
  , startTime: 0
})

const results = document.getElementById('results')
const angleView = document.getElementById('angle')

// for more information about creating a "player", see the player tutorial
const player = createPlayer( document.getElementById('player-wrap'), manager )

// link the animation to update the slider value
player.on('animate', ( now ) => {
  // this is an animation loop (like requestAnimationFrame())
  let state = manager.state

  results.innerHTML = JSON.stringify(state, null, 2)

  // negative because css reverses mathematical convention of ccw == +ve
  angleView.style.transform = `rotate(${-state.angle}rad)`
})
