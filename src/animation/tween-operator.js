import { Callable } from '../util/index.js'
import { map } from '../rx/index.js'

export class TweenOperator extends Callable {
  at(t) {
    return t
  }

  __call__(source) {
    return map(t => this.at(t))(source)
  }
}
