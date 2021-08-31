import { parseEasing } from '@/parsers/easing'
import { parseTime } from '@/parsers/time'
import { sanitizedObject, cloneDeep } from '@/util'

const pctReg = /^((\d{1,3})(\.\d*)?)%$/
const META_PARSERS = {
  endTime(v){
    if (v === undefined) { return undefined }
    return parseTime(v)
  }
  , startTime: parseTime
  , duration( v ){
    if ( v === undefined ){ return undefined }
    if ( pctReg.test(v) ){ return v }
    return parseTime(v)
  }
  , easing: parseEasing
}

// parse meta to standardized format
function parseMeta( meta, defaults ){
  const ret = { ...defaults, ...sanitizedObject(meta) } // clone

  for ( const key in META_PARSERS ){
    ret[key] = META_PARSERS[key]( ret[key] )
  }

  return ret
}

export function createFrame( state, meta, defaultMetaOptions ){
  if ( !state ){
    throw new Error('Can not create frame without state object')
  }

  if ( typeof state !== 'object' ){
    throw new Error('States must be plain objects')
  }

  state = cloneDeep(state)
  meta = parseMeta( meta || state.$meta, defaultMetaOptions )

  delete state.$meta

  const percentDuration = pctReg.exec(meta.duration)

  if ( percentDuration ){
    meta.implicit = true
    meta.fractionalDuration = parseFloat(percentDuration[1]) / 100
  } else if (meta.endTime !== undefined) {
    if ( meta.startTime !== undefined ){
      meta.duration = meta.endTime - meta.startTime
    } else {
      meta.startTime = meta.endTime - meta.duration
    }
  } else {
    meta.endTime = meta.startTime + meta.duration
  }

  return {
    state
    , meta
  }
}
