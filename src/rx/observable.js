import 'core-js/features/symbol/observable'
import { pipeFromArray } from './pipe'

export const Observable = ((window) => {
  try {
    const { Observable } = require('rxjs')
    return Observable
  } catch (e) {
    if (window.rxjs && window.rxjs.Observable) {
      return window.rxjs.Observable
    }
    const Obs = require('core-js-pure/features/observable')
    Obs.prototype.pipe = function (...ops) {
      return pipeFromArray(ops)(this)
    }
    return Obs
  }
})(self)
