import { Player } from 'intween'

// This player could be used for any tween... player.pipe(tween).subscribe(...)
const player = new Player('5s')

const playBtn = document.querySelector('.player-controls-demo button')
const scrubber = document.querySelector('.player-controls-demo input[type="range"]')
const timeDisplay = document.querySelector('.player-controls-demo .time')

timeDisplay.innerHTML = '0s'

// listen for change event on scrubber to update the player time
scrubber.addEventListener('input', e => {
  player.progress = +e.target.value
})

player.on('update', (time) => {
  // show the time
  timeDisplay.innerHTML = (time / 1000).toFixed(2) + 's'
  scrubber.value = player.progress
})

// restart at beginning if done.
player.on('play', () => {
  if (player.time >= player.totalTime) {
    player.seek(0)
  }
})

// hook up the play/pause button
playBtn.addEventListener('click', e => {
  e.stopImmediatePropagation()
  player.togglePause()
})

player.on('togglePause', () => {
  playBtn.innerHTML = player.paused ? 'play' : 'pause'
})
