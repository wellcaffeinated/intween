import './player-ui.css'

export function createPlayer( parentEl, player ){
  // Setup a player
  const el = document.createElement('div')
  el.className = 'player'
  // element to display the time
  const timeDisplay = document.createElement('div')
  timeDisplay.className = 'time'
  timeDisplay.innerHTML = '0s'
  el.appendChild(timeDisplay)

  const playBtn = document.createElement('button')
  playBtn.innerHTML = 'play'
  el.appendChild(playBtn)

  const scrubber = document.createElement('input')
  scrubber.type = 'range'
  scrubber.className = 'scrubber'
  scrubber.min = 0
  scrubber.max = player.totalTime
  scrubber.value = 0
  el.appendChild(scrubber)

  // listen for change event on scrubber to update the player time
  scrubber.addEventListener('input', e => {
    player.seek( +e.target.value )
  })

  player.on('update', ( time ) => {
    // show the time
    timeDisplay.innerHTML = (time / 1000).toFixed(2) + 's'
    scrubber.value = time
  })

  // let's loop the player
  player.on('play', () => {
    if ( player.time >= player.totalTime ){
      // it will pause when it reaches the end... so...
      // seek to the beginning
      player.seek( 0 )
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

  // inject the player into the parent element
  parentEl.appendChild(el)
  return player
}
