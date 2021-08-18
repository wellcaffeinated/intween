import * as Interpolators from '@/interpolators/core'

export function parseInterpolator(interp) {
  if (interp === undefined || interp === null) { return false }
  if (interp instanceof Function) {
    return interp
  } else if (typeof interp === 'string') {
    if (interp in Interpolators) {
      return Interpolators[interp]
    }
  }

  throw new Error(`Unrecognized interpolator name "${interp}"`)
}
