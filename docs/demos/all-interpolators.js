import { createPlayer } from '../lib/player-ui'
const { Tween, Interpolators, Player } = InTween

// setup our instance
const tween = new Tween({
  number: 0
  , step: {
    type: Number
    , default: 1
    , interpolator: Interpolators.makeToggle(0.25) // switches 1/4 of the way through
  }
  , angle: {
    type: Number
    , default: 0
    , interpolator: 'degrees'
  }
  , toggle: false
  , text: ''
  , array: [0, 0, 0]
  , object: { x: 0, y: 0, z: 0 }
  , collection: [{ x: 0, y: 0 }, { x: 0, y: 0 }]
})

// transition to...
tween.by('4s', {
  number: 10
  , step: 9000
  , angle: 200
  , toggle: true
  , text: 'Hello World!'
  , array: [ 1, 2, 3 ]
  , object: { x: 1, y: 2, z: 3 }
  , collection: [{ x: 1, y: 1 }, { x: 2, y: 2 }]
})

const results = document.getElementById('results')
const angleView = document.getElementById('angle')

// for more information about creating a "player", see the player tutorial
const player = new Player(tween.duration)
createPlayer( document.getElementById('player-wrap'), player )

player.pipe(tween).subscribe(state => {
  results.innerHTML = JSON.stringify(state, null, 2)

  // negative because css reverses mathematical convention of ccw == +ve
  angleView.style.transform = `rotate(${-state.angle}deg)`
})
