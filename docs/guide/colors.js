import { createPlayer } from '../lib/player-ui'

// this function is used to interpolate between two chroma objects
function interpolateChroma(from, to, t){
  // https://gka.github.io/chroma.js/#chroma-mix
  // we'll use LAB just because it's nice.
  return chroma.mix(from, to, t, 'lab')
}

// setup our instance
const manager = Copilot({
  color: {
    type: Object
    , default: chroma('red')
    // set our custom interpolator for our custom data types
    , interpolator: interpolateChroma
  }
})

// transition to blue over 2 seconds
manager.add({
  color: chroma('blue')
}, {
  time: '2s'
  , startTime: 0
})

// transition to green
manager.add({
  color: chroma('green')
}, {
  time: '3s'
  // starts at last frame...
  , duration: '100%'
  // ease between them
  , easing: Copilot.Easing.Elastic.Out
})

// let's use a slider... but this could be anything
const box = document.getElementById('box')

// for more information about creating a "player", see the player tutorial
const player = createPlayer( document.getElementById('player-wrap'), manager )

// link the animation to update the slider value
player.on('animate', ( now ) => {
  // this is an animation loop (like requestAnimationFrame())
  let state = manager.state

  box.style.background = state.color.css()
})
