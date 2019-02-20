import { timeParser } from '@/parsers/time'

const pctReg = /^((\d{1,3})(\.\d*)?)%$/
const DEFAULT_FRAME_META = { time: 0 }
const META_PARSERS = {
  time: timeParser
  , duration( v ){
    if ( pctReg.test(v) ){ return v }
    return timeParser(v)
  }
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

  let percentDuration = pctReg.exec(meta.duration)

  if ( percentDuration ){
    meta.implicit = true
    meta.fractionalDuration = parseFloat(percentDuration[1]) / 100
  } else {
    if ( !meta.duration ){
      meta.duration = meta.time - meta.startTime
    }

    if ( !meta.startTime ){
      meta.startTime = meta.time - meta.duration
    }
  }

  return {
    state
    , meta
  }
}
