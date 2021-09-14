import { Howl } from 'howler'
import { animationFrames, map, animationSync, Tween, Util, Easing } from 'intween'

const sound = new Howl({
  src: [
    'https://howlerjs.com/assets/howler.js/examples/player/audio/rave_digger.webm'
    , 'https://howlerjs.com/assets/howler.js/examples/player/audio/rave_digger.mp3'
  ]
})

const box = document.querySelector('.howler-example-demo .box')
const playBtn = document.querySelector('.howler-example-demo button')
const scrubber = document.querySelector('.howler-example-demo input[type="range"]')
const timeDisplay = document.querySelector('.howler-example-demo .time')

timeDisplay.innerHTML = '0s'

const easingNames = Object.keys(Easing).filter(k => k.substring(0, 4) !== 'make')
const random = (min, max) => Util.lerp(min, max, Math.random())
const randomEasing = () => easingNames[random(0, easingNames.length) | 0]

const tween = new Tween({
  size: 1
  , radius: 0
  , angle: 0
}).withTime().loop()

for (let i = 0; i < 50; i++){
  // random transitions
  tween.in('2s', {
    size: random(0.5, 3)
    , angle: random(-360, 360)
    , radius: random(0, 50)
  }, randomEasing())
}

animationFrames().pipe(
  map(() => {
    // get the current time
    return sound.seek() * 1000
  })
  , animationSync()
  , tween
).subscribe(state => {
  scrubber.value = state.time / sound.duration() / 10
  timeDisplay.innerHTML = (state.time / 1000).toFixed(2) + 's'
  box.style.borderRadius = state.radius + 'px'
  box.style.transform = `rotate(${state.angle}deg) scale(${state.size})`
})

// listen for change event on scrubber to update the player time
scrubber.addEventListener('input', e => {
  sound.seek(e.target.value * sound.duration() / 100)
})

// hook up the play/pause button
playBtn.addEventListener('click', e => {
  e.stopImmediatePropagation()
  if (sound.playing()){
    sound.pause()
    playBtn.innerHTML = 'play'
  } else {
    sound.play()
    playBtn.innerHTML = 'pause'
  }
})
