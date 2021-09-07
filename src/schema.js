import { parseEasing } from './parsers/easing.js'
import { parseInterpolator } from './parsers/interpolator.js'
import { makeForArray } from './interpolators/factories.js'
import { getType, getTypeCfg } from './type.js'
import { mapProperties, isPlainObject } from './util/index.js'

const TYPE_DEF_KEYS = ['value', ...Object.keys(getTypeCfg('object'))]
const DEFAULT_EASING = 'linear'

function checkExplicitTypeDefinition(def){
  const extraKeys = Object.keys(def).filter(k => TYPE_DEF_KEYS.indexOf(k) < 0)
  if (extraKeys.length){
    throw new Error('Type definition contains extra keys. Does your definition use "type" as a property name?')
  }
}

function getInterpolator(type, cfg, defaultVal){
  if (type === 'array' && defaultVal && defaultVal.length){
    const subSchema = parseSchemaProp(defaultVal[0])
    return makeForArray(subSchema.interpolator)
  }

  return parseInterpolator(cfg.interpolator)
}

export function parseSchemaProp( def ){
  let easing
  let interpolator
  let type
  let cfg
  let defaultVal

  if (isPlainObject(def) && (def.value !== undefined || def.type !== undefined)) {
    checkExplicitTypeDefinition(def)
    type = def.type || getType(def.value)
    cfg = getTypeCfg(type)

    defaultVal = def.value || cfg.default

    easing = parseEasing(def.easing || DEFAULT_EASING)
    interpolator = parseInterpolator(def.interpolator) || getInterpolator(type, cfg, defaultVal)

  } else {
    type = getType(def)
    cfg = getTypeCfg(type)

    easing = parseEasing(def.easing || DEFAULT_EASING)
    defaultVal = def
    interpolator = getInterpolator(type, cfg, defaultVal)
  }

  return {
    type
    , easing
    , default: defaultVal
    , interpolator
    , def
  }
}

export function createSchema( schemaDef ){
  return mapProperties(schemaDef, parseSchemaProp)
}

export function createState( schema ){
  const state = {}
  const props = Object.keys( schema )

  for ( const prop of props ){
    state[prop] = schema[prop].default
  }

  return state
}
