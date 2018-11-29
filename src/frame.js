import { timeParser } from '@/parsers/time'

const DEFAULT_FRAME_META = { time: 0 }
const META_PARSERS = {
  time: timeParser
  , duration: timeParser
}

// parse meta to standardized format
function parseMeta( meta, defaults ){
  let ret = { ...defaults, ...meta } // clone

  for ( let key in META_PARSERS ){
    ret[key] = META_PARSERS[key]( ret[key] )
  }

  return ret
}

export function createFrame( state, meta, defaultMetaOptions ){
  if ( !state ){
    throw new Error('Can not create frame without state')
  }

  state = { ...state }
  meta = parseMeta( meta || state.$meta, { ...defaultMetaOptions, ...DEFAULT_FRAME_META } )

  delete state.$meta

  if ( !meta.duration ){
    meta.duration = meta.time - meta.startTime
  }

  if ( !meta.startTime ){
    meta.startTime = meta.time - meta.duration
  }

  return {
    state
    , meta
  }
}
