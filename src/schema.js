import Easing from 'easing-functions'
import Interpolators from '@/interpolators'

function getType( val ){
  let type = typeof val

  if ( type === 'string' ){
    return val
  }

  if ( val === Number || type === 'number' ){
    return 'number'
  }

  if ( val === Boolean || type === 'boolean' ){
    return 'boolean'
  }

  if ( val === String ){
    return 'string'
  }

  if ( val === Array || Array.isArray( val ) ){
    return 'array'
  }

  if ( val === Object || type === 'object' ){
    return 'object'
  }

  return type
}

function getDefaultValue( def ){
  let val = def.type === undefined ? def : def.type
  let type = typeof val

  if ( Number.isFinite( val ) ){
    return val
  }

  // non-specific defaults
  if ( val === Number ){
    return 0
  }

  if ( val === Boolean ){
    return false
  }

  if ( val === String ){
    return ''
  }

  if ( val === Array ){
    return []
  }

  if ( val === Object ){
    return {}
  }

  // specific defaults
  if ( Array.isArray( val ) ){
    return val.map( getDefaultValue )
  }

  if ( type === 'object' ){
    let ret = {}
    let keys = Object.keys(val)

    for ( let k of keys ){
      ret[ k ] = getDefaultValue( val[k] )
    }

    return ret
  }

  return val
}

export function createSchema( schemaDef, defaultEasing = Easing.Linear.None ){
  let schema = {}
  let props = Object.keys( schemaDef )

  for ( let prop of props ){
    let def = schemaDef[ prop ]
    let easing = defaultEasing
    let interpolator = null
    let type
    let defaultVal

    if ( typeof def === 'object' && def.type !== undefined ){
      type = getType( def.type )
      easing = def.easing || defaultEasing
      interpolator = def.interpolator || null
      defaultVal = def.default

    } else {
      type = getType( def )
    }

    if ( type === 'array' ){
      interpolator = interpolator || Interpolators.Array
    }

    if ( defaultVal === undefined ){
      defaultVal = getDefaultValue( def )
    }

    schema[ prop ] = {
      type
      , easing
      , default: defaultVal
      , interpolator: interpolator || Interpolators.Linear
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
