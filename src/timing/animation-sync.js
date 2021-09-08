import { Observable } from '../rx/observable.js'
import { animationFrames } from './animation-frames.js'

const defaultThreshold = 5000 / 60 // 5 frames

export const animationSync = (config = {}) => timeSource => new Observable(sink => {
  let syncTime = 0
  let isFresh = false
  let isComplete = false
  let lastFrameTime = 0
  let lastTime = 0
  let paused = true

  const timeSub = animationFrames().subscribe((frameTime) => {
    const playbackRate = Number.isFinite(config.playbackRate) ? config.playbackRate : 1
    const isPlaying = !paused && playbackRate !== 0
    const threshold = config.threshold || defaultThreshold

    let time = frameTime
    if (!isPlaying) {
      time = isFresh ? syncTime : lastTime
    } else {
      // extrapolate
      const dt = (frameTime - lastFrameTime) * playbackRate

      time = lastTime + dt

      if (Math.abs(time - syncTime) > threshold) {
        if (isFresh){
          // resync
          time = syncTime
        } else {
          paused = true
        }
      }
      isFresh = false
    }

    lastFrameTime = frameTime
    if (time !== lastTime){
      lastTime = time
      sink.next(time)
    }

    if (isComplete) {
      sink.complete()
      timeSub.unsubscribe()
    }
  })

  const sub = timeSource.subscribe({
    next: time => {
      paused = (time === syncTime)
      syncTime = time
      isFresh = true
    }
    , complete: () => {
      isComplete = true
    }
    , error: e => {
      sink.error(e)
      timeSub.unsubscribe()
    }
  })

  return () => {
    sub.unsubscribe()
    timeSub.unsubscribe()
  }
})
