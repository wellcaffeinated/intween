import 'core-js-pure/features/symbol/observable'
import Obs from 'core-js-pure/features/observable'
import { pipeFromArray } from './pipe'
import { identity } from '@/util'

export class Observable extends Obs {
  constructor(subscriber){
    super(subscriber || identity)
  }

  pipe(...ops) {
    return pipeFromArray(ops)(this)
  }

  // needed to interop with rxjs
  lift(operator) {
    return new Observable((sink) => {
      return operator.call(sink, this)
    })
  }
}
Object.assign(Observable.prototype, {
  pipe(...ops) {
    return pipeFromArray(ops)(this)
  }
  // needed to interop with rxjs
  , lift(operator) {
    return new Observable((sink) => {
      return operator.call(sink, this)
    })
  }
})
