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
  constructor( { totalTime, playbackRate = 1 } = {} ){
    super()

    if ( !totalTime ){
      throw new Error('Player: "totalTime" not set')
    }

    this.totalTime = timeParser( totalTime )
    this.clockTime = util.now()
    this.time = 0
    this.playbackRate = playbackRate
    this.paused = true

    PlayerStack.push( this )
  }

  get progress(){
    return (this.time / this.totalTime * 100).toFixed(2)
  }

  togglePause( paused ){
    if ( paused === undefined ){
      paused = !this.paused
    }

    this.paused = !!paused

    if ( this.paused ){
      this.emit('pause')
    } else {
      this.emit('play')
    }

    this.emit('togglePause')

    return this
  }

  seek( time ){
    this.time = time

    this.emit('update', time)
    this.emit('seek', time)
    return this
  }

  step( now ){
    let clockTime = this._clockTime
    let playbackRate = this.playbackRate
    let dt = now - clockTime
    let time = this.time
    let totalTime = this.totalTime

    this._clockTime = now

    this.emit('animate', now)

    // if it's paused, don't step
    if ( this.paused ){
      return this
    }

    time += dt * playbackRate

    if ( time >= totalTime ){
      time = totalTime
      this.togglePause( true )
    }

    this.time = time
    this.emit('update', time)
    this.emit('playback', time)
    return this
  }
}

export default function( config ){
  return new Player( config )
}
