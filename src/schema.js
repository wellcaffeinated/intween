import { parseEasing } from '@/parsers/easing'
import { parseInterpolator } from '@/parsers/interpolator'
import { isExplicit, getType, getTypeCfg } from '@/type'

const DEFAULT_EASING = 'linear'

export function createSchema( schemaDef ){
  const schema = {}
  const props = Object.keys( schemaDef )

  for ( const prop of props ){
    const def = schemaDef[prop]
    let easing
    let interpolator
    let type
    let cfg
    let defaultVal

    if ( typeof def === 'object' && def.type !== undefined ){
      type = getType( def.type )
      cfg = getTypeCfg( type )
      if ( !cfg ){
        throw new Error(`Unrecognized type ${type}`)
      }

      if ( isExplicit( type, def.type ) ){
        defaultVal = def.default || cfg.default
      } else {
        defaultVal = def.type
      }

      easing = parseEasing(def.easing || DEFAULT_EASING)
      interpolator = parseInterpolator(def.interpolator || cfg.interpolator)

    } else {
      if ( typeof def === 'string' ){
        type = 'string'
      } else {
        type = getType( def )
      }

      cfg = getTypeCfg( type )
      if ( !cfg ){
        throw new Error(`Unrecognized type ${type}`)
      }

      easing = parseEasing(def.easing || DEFAULT_EASING)
      interpolator = parseInterpolator(cfg.interpolator)
      defaultVal = isExplicit( type, def ) ? cfg.default : def
    }

    schema[prop] = {
      type
      , easing
      , default: defaultVal
      , interpolator: interpolator
      , def
    }
  }

  return schema
}

export function createState( schema ){
  const state = {}
  const props = Object.keys( schema )

  for ( const prop of props ){
    state[prop] = schema[prop].default
  }

  return state
}
