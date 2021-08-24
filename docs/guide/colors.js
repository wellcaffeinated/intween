import { createPlayer } from '../lib/player-ui'
import chroma from '../lib/chroma'
const { Tween, Easing, Player, Interpolators, registerType } = InTween

// this function is used to interpolate between two chroma objects
function interpolateChroma(from, to, t) {
  // https://gka.github.io/chroma.js/#chroma-mix
  // we'll use LAB just because it's nice.
  return chroma.mix(from, to, t, 'lab')
}

registerType({
  type: 'color'
  , default: 'white'
  , interpolator: interpolateChroma
})

// setup our instance
const tween = new Tween({
  color: {
    type: 'color'
    , default: chroma('tomato')
  }
})

// transition to blue over 2 seconds
tween.by('2s', {
  color: chroma('steelblue')
})

// transition to gold
tween.by('4s', {
  color: chroma('gold')
}, Easing.makeSteps(5))

// let's use a slider... but this could be anything
const box = document.getElementById('box')

// for more information about creating a "player", see the player tutorial
const player = new Player(tween.duration)
player.pipe(tween).subscribe(state => {
  box.style.background = state.color.css()
})

createPlayer(document.getElementById('player-wrap'), player)
