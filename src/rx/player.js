// Helper for managing play state
//
// ---------------------------------------

import { timeParser } from '@/parsers/time'
import { animationFrames } from './raf'
import { Emitter } from './emitter'

class Player extends Emitter {

  static create(totalTime){
    return new Player(totalTime)
  }

  constructor(totalTime) {
    super(sink => {
      const cb = time => sink.next(time)
      this.on('update', cb)
      this.emit('update', 0)
      return {
        unsubscribe: () => this.off('update', cb)
      }
    })

    this.totalTime = timeParser(totalTime)
    this._clockTime = 0
    this._time = 0
    this.playbackRate = 1
    this._paused = true
    this._sub = animationFrames().subscribe(t => this.step(t))
  }

  get progress() {
    return this.totalTime > 0 ? this._time / this.totalTime * 100 : 0
  }

  set progress(p) {
    this.seek(Math.max(0, p) * this.totalTime / 100)
  }

  get time() {
    return this._time
  }

  set time(t) {
    this.seek(t)
  }

  get paused() {
    return this._paused
  }

  set paused(p) {
    this.togglePause(p)
  }

  destroy() {
    this.off(true)
    this._sub.unsubscribe()
    this.emit('destroy')
  }

  togglePause(paused) {
    if (paused === undefined) {
      paused = !this._paused
    }

    this._paused = !!paused

    if (this._paused) {
      this.emit('pause')
    } else {
      this.emit('play')
    }

    this.emit('togglePause')

    return this
  }

  pause() {
    return this.togglePause(true)
  }

  play() {
    return this.togglePause(false)
  }

  // Stops after it reaches time t
  playTo(time) {
    if (this._time === time) {
      this.seek(time)
      return this
    }

    this._playToTime = time
    this._oldPlaybackRate = this.playbackRate
    this.playbackRate = (time >= this._time) ? 1 : -1
    return this.play()
  }

  seek(time) {
    this._time = time

    this.emit('update', time)
    this.emit('seek', time)
    return this
  }

  step(now) {
    const clockTime = this._clockTime
    const playbackRate = this.playbackRate
    const dt = now - clockTime
    let time = this._time
    const totalTime = this.totalTime

    this._clockTime = now

    // if it's paused, don't step
    if (this._paused) {
      return this
    }

    time += dt * playbackRate

    // enable stopping at playToTime
    if (
      this._playToTime !== false &&
      (playbackRate * time >= playbackRate * this._playToTime)
    ) {
      this.togglePause(true)
      time = this._playToTime
      this.playbackRate = this._oldPlaybackRate
      this._playToTime = false
    }

    if (playbackRate > 0 && time >= totalTime) {
      time = totalTime
      this.togglePause(true)
      this.emit('end')
    } else if (playbackRate < 0 && time <= 0) {
      time = 0
      this.togglePause(true)
      this.emit('end')
    }

    this._time = time
    this.emit('update', time)

    return this
  }
}

export default function (config) {
  return Player.create(config)
}
