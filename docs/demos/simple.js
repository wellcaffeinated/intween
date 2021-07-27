// setup our instance
const manager = Copilot({
  // simple numeric value. Starts with default 50
  sliderVal: 50
}, {
  // set some defaults
  defaultTransitionDuration: '1s'
})

// transition to 100 immediately in 2 seconds
manager.add({
  sliderVal: 100
}, {
  time: '2s',
  startTime: 0
})

// then transition to 20 at 5 seconds
manager.add({
  sliderVal: 20
}, {
  time: '5s',
  // use quadratic in-out easing function
  easing: Copilot.Easing.quadInOut
})

// slowly decrease to zero linearly
manager.add({
  sliderVal: 0
}, {
  // just a different syntax
  time: '00:09', // same as '9s'
  startTime: '00:05'
})

manager.add({
  sliderVal: 70
}, {
  time: '10s',
  // spring animation to 70 at 10s
  easing: Copilot.Easing.elasticOut
})

// Setup a player
const player = Copilot.Player({ totalTime: manager.totalTime })
// element to display the time
const timeDisplay = document.getElementById('time')

player.on('update', ( time ) => {
  // this triggers when the player's time changes
  // so we seek the manager to that time
  manager.seek( time )

  // show the time
  timeDisplay.innerHTML = time.toFixed(2) + 'ms'
})

// let's use a slider... but this could be anything
const slider = document.getElementById('slider')

// another slider that we won't hook up through user input
const readonlySlider = document.getElementById('slider-ro')

// link the animation to update the slider value
player.on('animate', ( now ) => {
  // this is an animation loop (like requestAnimationFrame())
  let state = manager.state

  // NB: this is the ONLY thing that touches the slider value
  slider.value = state.sliderVal

  // let's set our read-only slider with the unmeddled state
  // to illustrate the difference
  let unmeddled = manager.getStateAt( player.time )
  readonlySlider.value = unmeddled.sliderVal
})

// let's loop the player
player.on('play', () => {
  if ( player.time >= player.totalTime ){
    // it will pause when it reaches the end... so...
    // seek to the beginning
    player.seek( 0 )
  }
})

slider.addEventListener('mousedown', e => {
  let value = e.target.value
  // freeze this meddle so it doesn't pop back after the timeout
  let options = { freeze: true }
  // user grabs slider...
  // indirectly set the slider value through copilot
  manager.meddle({ sliderVal: value }, options)
})

slider.addEventListener('input', e => {
  let value = e.target.value
  // freeze this meddle so it doesn't pop back after the timeout
  let options = { freeze: true }
  // user grabs slider...
  // indirectly set the slider value through copilot
  manager.meddle({ sliderVal: value }, options)
})

slider.addEventListener('mouseup', e => {
  let value = e.target.value
  // we DON'T freeze...
  // instead we wait 500ms before giving control back to our copilot
  // then we transition back to the copilot state over 700ms
  let options = {
    relaxDelay: 500,
    relaxDuration: 700,
    easing: Copilot.Easing.quadOut
  }
  // user grabs slider...
  // indirectly set the slider value through copilot
  manager.meddle({ sliderVal: value }, options)
})

// hook up the play/pause button
const playBtn = document.getElementById('play')

playBtn.addEventListener('click', e => {
  player.togglePause()
})
