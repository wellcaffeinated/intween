import { timeParser } from '@/parsers/time'

const pctReg = /^((\d{1,3})(\.\d*)?)%$/
const DEFAULT_FRAME_META = { time: 0 }
const META_PARSERS = {
  time: timeParser
  , startTime: timeParser
  , duration( v ){
    if ( v === undefined ){ return undefined }
    if ( pctReg.test(v) ){ return v }
    return timeParser(v)
  }
}

// parse meta to standardized format
function parseMeta( meta, defaults ){
  const ret = { ...defaults, ...meta } // clone

  for ( const key in META_PARSERS ){
    ret[key] = META_PARSERS[key]( ret[key] )
  }

  return ret
}

export function createFrame( state, meta, defaultMetaOptions ){
  if ( !state ){
    throw new Error('Can not create frame without state object')
  }

  state = { ...state }
  meta = parseMeta( meta || state.$meta, { ...defaultMetaOptions, ...DEFAULT_FRAME_META } )

  delete state.$meta

  const percentDuration = pctReg.exec(meta.duration)

  if ( percentDuration ){
    meta.implicit = true
    meta.fractionalDuration = parseFloat(percentDuration[1]) / 100
  } else {
    if ( meta.startTime !== undefined ){
      meta.duration = meta.time - meta.startTime
    } else {
      meta.startTime = meta.time - meta.duration
    }
  }

  return {
    state
    , meta
  }
}
