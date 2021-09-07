import * as Easing from '../easing/core.js'
import { combineEasing } from '../util/index.js'

export function parseEasing(easing){
  if (easing === undefined || easing === null){ return undefined }
  if (typeof easing === 'string') {
    const easings = easing.replace(' ', '').split('+')
    if (easings.length === 1) {
      easing = easings[0]
      if (easing in Easing){
        return Easing[easing]
      }
    } else {
      return combineEasing(...easings.map(parseEasing))
    }
  } else if (easing instanceof Function){
    return easing
  }

  throw new Error(`Unrecognized easing name "${easing}"`)
}
