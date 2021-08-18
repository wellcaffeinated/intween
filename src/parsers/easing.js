import * as Easing from '@/easing/core'

export function parseEasing(easing){
  if (easing === undefined || easing === null){ return false }
  if (easing instanceof Function){
    return easing
  } else if (typeof easing === 'string'){
    if (easing in Easing){
      return Easing[easing]
    }
  }

  throw new Error(`Unrecognized easing name "${easing}"`)
}
