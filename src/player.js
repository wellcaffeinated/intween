// Helper for managing play state
//
// ---------------------------------------

import util from '@/util'
import { timeParser } from '@/parsers/time'
import EventEmitter from '@/event-emitter'

const PlayerStack = []

function step(){
  window.requestAnimationFrame( step )
  let now = util.now()

  for ( let l = PlayerStack.length, i = 0; i < l; i++ ){
    PlayerStack[ i ].step( now )
  }
}

step()

class Player extends EventEmitter {
  constructor( { totalTime = 0, playbackRate = 1, manager } = {} ){
    super()

    this.totalTime = timeParser( totalTime )
    this._clockTime = util.now()
    this._time = 0
    this.playbackRate = playbackRate
    this._paused = true

    if ( manager ){
      this.attach(manager)
    }

    PlayerStack.push( this )
  }

  get progress(){
    return this.totalTime > 0 ? this._time / this.totalTime * 100 : 0
  }

  set progress(p){
    this.seek(Math.max(0, p) * this.totalTime / 100)
  }

  get time(){
    return this._time
  }

  set time(t){
    this.seek(t)
  }

  get paused(){
    return this._paused
  }

  set paused(p){
    this.togglePause(p)
  }

  destroy(){
    this.off(true)
    let idx = PlayerStack.indexOf(this)
    PlayerStack.splice(idx, 1)
    this.emit('destroy')
  }

  // attach a copilot manager
  attach( manager ){
    const updateTime = () => {
      this.totalTime = manager.totalTime
    }

    this.on('update', () => {
      manager.seek(this.time)
    })

    manager.on('update', updateTime)

    this.on('destroy', () => {
      manager.off('update', updateTime)
    })

    updateTime()
    return this
  }

  togglePause( paused ){
    if ( paused === undefined ){
      paused = !this._paused
    }

    this._paused = !!paused

    if ( this._paused ){
      this.emit('pause')
    } else {
      this.emit('play')
    }

    this.emit('togglePause')

    return this
  }

  pause(){
    return this.togglePause(true)
  }

  play(){
    return this.togglePause(false)
  }

  // Stops after it reaches time t
  playTo(time){
    if (this._time === time){
      this.seek(time)
      return this
    }

    this._playToTime = time
    this._oldPlaybackRate = this.playbackRate
    this.playbackRate = (time >= this._time) ? 1 : -1
    return this.play()
  }

  seek( time ){
    this._time = time

    this.emit('update', time)
    this.emit('seek', time)
    return this
  }

  step( now ){
    let clockTime = this._clockTime
    let playbackRate = this.playbackRate
    let dt = now - clockTime
    let time = this._time
    let totalTime = this.totalTime

    this._clockTime = now

    this.emit('animate', now)

    // if it's paused, don't step
    if ( this._paused ){
      return this
    }

    time += dt * playbackRate

    // enable stopping at playToTime
    if (
      this._playToTime !== false &&
      (playbackRate * time >= playbackRate * this._playToTime)
    ){
      this.togglePause(true)
      time = this._playToTime
      this.playbackRate = this._oldPlaybackRate
      this._playToTime = false
    }

    if ( playbackRate > 0 && time >= totalTime ){
      time = totalTime
      this.togglePause( true )
      this.emit('end')
    } else if ( playbackRate < 0 && time <= 0 ){
      time = 0
      this.togglePause( true )
      this.emit('end')
    }

    this._time = time
    this.emit('update', time)
    this.emit('playback', time)

    return this
  }
}

export default function( config ){
  return new Player( config )
}
