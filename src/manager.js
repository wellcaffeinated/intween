import util from '@/util'
import { createSchema, createState } from '@/schema'
import { getInterpolatedState } from '@/transition'
import { timeParser } from '@/parsers/time'
import { transitionParser } from '@/parsers/transition'
const DEFAULT_FRAME_META = { time: 0 }
const META_PARSERS = {
  time: timeParser
  , transition: transitionParser
  , duration: timeParser
}

const DEFAULT_OPTIONS = {
  playbackRate: 1
  , defaultTransitionDuration: 1000
  , meddleTimeout: 500
}

// sorted add by time index
function addByTime( arr, obj ){
  let idx = 0

  while ( idx < arr.length ){
    if ( arr[0].time >= obj.time ){
      // insert at idx
      arr.splice( idx, 0, obj )
      return arr
    }
    idx++
  }
  arr.push( obj )
  return arr
}

// parse meta to standardized format
function parseMeta( meta, defaults ){
  let ret = { ...defaults, ...meta } // clone

  for ( let key in META_PARSERS ){
    ret[key] = META_PARSERS[key]( ret[key] )
  }

  return ret
}

export default class {
  constructor( schema, options ){
    this.time = 0
    this.framesById = {}
    this.frames = []

    this._schema = createSchema( schema )
    this._state = {}

    this._defaultFrame = {
      state: createState( this._schema )
      , meta: parseMeta({})
    }

    this._targetState = null

    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
  }

  get state(){
    return this._state
  }

  // add a frame
  add( state, meta ){
    if ( !state ){ return this }
    if ( !meta ){
      meta = state.$meta || { ...DEFAULT_FRAME_META }
    }

    meta = parseMeta( meta, {
      duration: this.options.defaultTransitionDuration
    })

    // TODO check transition duration doesn't overlap with previous state
    // if it does: warn, and set to max allowable transition time

    if ( meta.id && this.framesById[meta.id] ){
      throw new Error(`Frame with id "${meta.id}" already defined`)
    }

    // inherit from previous state
    state = { ...this.getPrevFrame(meta.time).state, ...state }

    if ( meta.inherit ){
      let from = this.getFrame( meta.inherit )

      state = { ...from.state, ...state }
      // cleanup
      delete state.$meta
    }

    let frame = {
      state
      , meta
    }

    // add to id list
    if ( meta.id ){
      this.framesById[ meta.id ] = frame
    }
    // add in order
    addByTime( this.frames, frame )
    return this
  }

  meddle( meddleTimeout ){
    // toggle user meddling
  }

  getFrame( id ){
    let frame = this.framesById[id]

    if ( !frame ){
      throw new Error(`No frame with id "${id}" exists to be inherited`)
    }

    return frame
  }

  seek( timeOrId ){
    if ( typeof timeOrId === 'string' ){
      let frame = this.getFrame( timeOrId )

      return this.seek( frame.meta.time )
    }

    this.time = timeOrId

    let bounds = this.getBoundingFrames()

    this._state = getInterpolatedState( this._schema, bounds.prev, bounds.next, this.time )

    return this
  }

  to( timeOrId ){
    // transition to time, or frame id
  }

  step(){
    let now = util.now()
    let clockTime = this._clockTime || now
    let playbackRate = this.options.playbackRate
    let dt = now - clockTime
    let time = this.time

    this._clockTime = now

    // if it's paused, don't step
    if ( this.paused ){
      return this
    }

    time += dt * playbackRate
    this.seek( time )

    return this
  }

  next(){
    // transition like slideshow
  }

  back(){
    // transition back like slideshow
  }

  getNextFrame( time ){
    return this.getBoundingFrames( time ).next
  }

  getPrevFrame( time ){
    return this.getBoundingFrames( time ).prev
  }

  getBoundingFrames( time ){
    time = time || this.time
    let next = null
    let prev = null

    for ( let i = 0, l = this.frames.length; i < l; i++ ){
      next = this.frames[ i ]

      if ( next.meta.time > time ){
        break;
      }

      prev = next
    }

    if ( prev === next ){
      next = null
    }

    if ( !prev ){
      prev = this._defaultFrame
    }

    return { prev, next }
  }
}
