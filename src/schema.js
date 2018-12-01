import Easing from 'easing-functions'
import { isExplicit, getType, getTypeCfg } from '@/type'

const DEFAULT_EASING = Easing.Linear.None

export function createSchema( schemaDef ){
  let schema = {}
  let props = Object.keys( schemaDef )

  for ( let prop of props ){
    let def = schemaDef[ prop ]
    let easing = DEFAULT_EASING
    let interpolator = null
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

    schema[ prop ] = {
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
  let state = {}
  let props = Object.keys( schema )

  for ( let prop of props ){
    state[ prop ] = schema[ prop ].default
  }

  return state
}
