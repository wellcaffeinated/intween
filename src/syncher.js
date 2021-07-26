import * as util from '@/util'

export default function Syncher( {
  getTime
  , isPlaying
  , onFrame
  , getPlaybackRate = () => 1
  , threshold = 5000 / 60 // 5 frames
} = {} ){
  if ( !getTime ){
    throw new Error('Must call Syncher with a "getTime" function')
  }
  if ( !isPlaying ){
    throw new Error('Must call Syncher with a "isPlaying" function')
  }
  if ( !onFrame ){
    throw new Error('Must call Syncher with a "onFrame" function')
  }

  let stop = false
  let lastClockTime = 0
  let timeStarted
  let lastTime = 0
  const update = () => {
    if ( stop ){ return }
    window.requestAnimationFrame( update )

    const now = util.now()
    const syncTime = getTime() || 0
    const isPlayingVal = !!isPlaying()
    const playbackRate = +getPlaybackRate()
    let time

    if ( !isPlayingVal || !timeStarted ){
      timeStarted = syncTime
      time = syncTime
    } else {
      // extrapolate
      const dt = (now - lastClockTime) * playbackRate

      time = lastTime + dt

      if ( Math.abs(time - syncTime) > threshold ){
        // resync
        time = syncTime
        timeStarted = time
      }
    }

    lastClockTime = now
    lastTime = time
    onFrame( time, now, { syncTime, isPlaying: isPlayingVal, playbackRate } )
  }

  update()

  function destroy(){
    stop = true
  }

  return destroy
}
