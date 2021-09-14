import chroma from 'chroma'
import { Tween, Easing, Player, registerType } from 'intween'

// this function is used to interpolate between two chroma objects
function interpolateChroma(from, to, t) {
  // https://gka.github.io/chroma.js/#chroma-mix
  // we'll use LAB just because it's nice.
  return chroma.mix(from, to, t, 'lab')
}

registerType({
  type: 'color'
  , default: chroma('white')
  , interpolator: interpolateChroma
})

// setup our instance
const tween = new Tween({
  color: chroma('tomato')
})

// transition to blue over 2 seconds
tween.in('2s', {
  color: chroma('steelblue')
})

tween.in('2s', {
  color: chroma('forestgreen')
})

// transition to gold
tween.in('2s', {
  color: chroma('gold')
}, Easing.makeSteps(5))

// and back to the start
tween.in('2s', {
  color: chroma('tomato')
}, 'bounceOut') // have you ever seen a color bounce before?

// let's use a slider... but this could be anything
const box = document.querySelector('.colors-example .box')

// for more information about creating a "player", see the player tutorial
const player = new Player(tween.duration)
player.pipe(tween).subscribe(state => {
  box.style.background = state.color.css()
})

player.loop().play()
