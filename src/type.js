import * as Interpolators from './interpolators/index.js'

export const NATIVE_TYPES = {
  'number': {
    type: 'number'
    , default: 0
    , interpolator: Interpolators.linear
  }
  , 'string': {
    type: 'string'
    , default: ''
    , interpolator: Interpolators.string
  }
  , 'boolean': {
    type: 'boolean'
    , default: false
    , interpolator: Interpolators.toggle
  }
  , 'array': {
    type: 'array'
    , default: []
    , interpolator: Interpolators.array
  }
  , 'object': {
    type: 'object'
    , default: {}
    , interpolator: Interpolators.object
  }
}

const CUSTOM_TYPES = {}

function getCustomTypeByVal(val){
  return Object.values(CUSTOM_TYPES)
    .find(({ constructor }) => val instanceof constructor)
}

export function registerType( cfg ){
  const { type, interpolator } = cfg

  if ( !type || !interpolator || cfg.default === undefined ){
    throw new Error('Custom types must have "type", "default", and "interpolator" specified')
  }

  if ( CUSTOM_TYPES[type] ){
    throw new Error(`Custom type "${type}" is already registered`)
  }

  CUSTOM_TYPES[type] = {
    type
    , interpolator
    , default: cfg.default
  }

  if (cfg.default.constructor){
    CUSTOM_TYPES[type].constructor = cfg.default.constructor
  }
}

export function getType( val ){
  if (val === null){
    throw new Error('Can not determine type of null value')
  }

  const type = typeof val

  if ( type === 'string' ){
    if ( val in CUSTOM_TYPES ){
      return val
    }
    return 'string'
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

  // check custom types
  const custom = getCustomTypeByVal(val)
  if (custom){
    return custom.type
  }

  if ( val === Object || type === 'object' ){
    return 'object'
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

  return type === val
}

export function getTypeCfg( type ){
  const cfg = NATIVE_TYPES[type] || CUSTOM_TYPES[type]

  if (!cfg) {
    throw new Error(`Unrecognized type ${type}`)
  }

  return cfg
}
