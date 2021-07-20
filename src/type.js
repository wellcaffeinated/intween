import Interpolators from '@/interpolators'

export const NATIVE_TYPES = {
  'number': {
    type: 'number'
    , default: 0
    , interpolator: Interpolators.Linear
  }
  , 'string': {
    type: 'string'
    , default: ''
    , interpolator: Interpolators.String
  }
  , 'boolean': {
    type: 'boolean'
    , default: false
    , interpolator: Interpolators.Step
  }
  , 'array': {
    type: 'array'
    , default: []
    , interpolator: Interpolators.Array
  }
  , 'object': {
    type: 'object'
    , default: {}
    , interpolator: Interpolators.Object
  }
}

const CUSTOM_TYPES = {}

export function registerType( cfg ){
  const { type, interpolator } = cfg

  if ( !type || !interpolator ){
    throw new Error('Custom types must have "type" and "interpolator" specified')
  }

  if ( CUSTOM_TYPES[type] ){
    throw new Error(`Custom type "${type}" is already registered`)
  }

  CUSTOM_TYPES[type] = {
    type
    , interpolator
    , default: cfg.default
  }
}

export function getType( val ){
  const type = typeof val

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

  if ( val === Object ){
    return 'object'
  }

  if ( type === 'object' ){
    throw new Error('Can not use implicit definition for objects or custom types')
  }

  return type
}

// determine if the schema declaration is an explicit declaration
// of the type. eg: (type: 2) is implicit number
export function isExplicit( type, val ){
  if ( type === 'string' ){
    return val === 'string' || val === String
  }

  if ( type === 'number' ){
    return val === 'number' || val === Number
  }

  if ( type === 'boolean' ){
    return val === 'boolean' || val === Boolean
  }

  if ( type === 'array' ){
    return val === 'array' || val === Array
  }

  if ( type === 'object' ){
    return val === 'object' || val === Object
  }

  return true
}

export function getTypeCfg( type ){
  return NATIVE_TYPES[type] || CUSTOM_TYPES[type]
}
