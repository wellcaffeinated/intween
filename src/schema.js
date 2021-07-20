import Easing from 'easing-functions'
import { isExplicit, getType, getTypeCfg } from '@/type'

const DEFAULT_EASING = Easing.Linear.None

export function createSchema( schemaDef ){
  const schema = {}
  const props = Object.keys( schemaDef )

  for ( const prop of props ){
    const def = schemaDef[prop]
    let easing = DEFAULT_EASING
    let interpolator = null
    const interpolatorOpts = def.interpolatorOpts || {}
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

      easing = def.easing || DEFAULT_EASING
      interpolator = def.interpolator || cfg.interpolator

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

      easing = def.easing || DEFAULT_EASING
      interpolator = cfg.interpolator
      defaultVal = isExplicit( type, def ) ? cfg.default : def
    }

    schema[prop] = {
      type
      , easing
      , default: defaultVal
      , interpolator: interpolator
      , interpolatorOpts
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
