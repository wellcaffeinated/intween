import { timeParser } from '@/parsers/time'
import { transitionParser } from '@/parsers/transition'
const DEFAULT_FRAME_META = { time: 0 }
const META_PARSERS = {
  time: timeParser
  , transition: transitionParser
}

const DEFAULT_OPTIONS = {
  sleepTime: 500
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
function parseMeta( meta ){
  let ret = { ...meta } // clone

  for ( let key in META_PARSERS ){
    ret[key] = META_PARSERS( ret[key] )
  }

  return ret
}

export default class {
  constructor( schema, options ){
    this.time = 0
    this.framesById = {}
    this.frames = []

    this._state = { ...schema }
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

    meta = parseMeta( meta )

    // TODO check transition duration doesn't overlap with previous state
    // if it does: warn, and set to max allowable transition time

    if ( meta.id && this.framesById[meta.id] ){
      throw new Error(`Frame with id "${meta.id}" already defined`)
    }

    if ( meta.inherit ){
      let from = this.framesById[meta.inherit]

      if ( !from ){
        throw new Error(`No frame with id "${meta.inherit}" exists to be inherited`)
      }

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

  meddle( sleepTime ){
    // toggle user meddling
  }

  seek( timeOrName ){
    // immediately set correct state
  }

  to( timeOrName ){
    // transition to time, or frame id
  }

  step(){
    // let time = Date.now()

  }

  next(){
    // transition like slideshow
  }

  back(){
    // transition back like slideshow
  }

  getNextState(){
    // look ahead
  }

  getPrevState(){
    // look back
  }
}
