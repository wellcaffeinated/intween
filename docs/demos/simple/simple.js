import { Tween, Meddle, spreadAssign, Player } from 'intween'

const tween = new Tween({
  // simple numeric value. Starts with default 50
  sliderVal: 50
}, {
  // set some defaults
  tweenDuration: '1s'
})

// transition to 100 immediately in 2 seconds
tween.to({
  sliderVal: 100
}, {
  endTime: '2s',
  startTime: 0
})

// then transition to 20 at 5 seconds
tween.by('5s', {
  sliderVal: 20
}, 'quadInOut') // use quadratic in-out easing function

// slowly decrease to zero linearly
tween.by('00:09', '100%', { // same as '9s' starting at previous time
  sliderVal: 0
})

// spring animation to 70 at 10s
tween.in('1s', {
  sliderVal: 70
}, 'elasticOut')

const meddle = new Meddle(tween, {
  relaxDelay: 500,
  relaxDuration: 700,
  easing: 'quadOut'
})
// element to display the time
const timeDisplay = document.getElementById('time')
// let's use a slider... but this could be anything
const slider = document.getElementById('slider')
// another slider that we won't hook up through user input
const readonlySlider = document.getElementById('slider-ro')

slider.addEventListener('mousedown', e => {
  const value = e.target.value
  // user grabs slider...
  // freeze this meddle so it doesn't pop back after the timeout
  // indirectly set the slider value through meddle
  meddle.set({ sliderVal: value }).freeze()
})

slider.addEventListener('input', e => {
  const value = e.target.value
  // user grabs slider...
  // freeze this meddle so it doesn't pop back after the timeout
  // indirectly set the slider value through meddle
  meddle.set({ sliderVal: value }).freeze()
})

slider.addEventListener('mouseup', e => {
  const value = e.target.value
  // we DON'T freeze...
  // user grabs slider...
  // indirectly set the slider value through meddle
  meddle.set({ sliderVal: value }).freeze(false)
})

// Setup a player
const player = new Player(tween.duration)

player.pipe(
  spreadAssign(
    tween,
    meddle
  )
).subscribe(state => {
  // NB: this is the ONLY thing that touches the slider value
  slider.value = state.sliderVal

  // let's set our read-only slider with the unmeddled state
  // to illustrate the difference
  const unmeddled = tween.at(player.time)
  readonlySlider.value = unmeddled.sliderVal
})

player.on('update', (time) => {
  // show the time
  timeDisplay.innerHTML = time.toFixed(2) + 'ms'
})

// let's loop the player
player.on('play', () => {
  if (player.time >= player.totalTime) {
    // it will pause when it reaches the end... so...
    // seek to the beginning
    player.seek(0)
  }
})

// hook up the play/pause button
const playBtn = document.getElementById('play')

playBtn.addEventListener('click', e => {
  player.togglePause()
})

