import { Callable } from '@/util'
import { map } from '@/rx'

export class TweenOperator extends Callable {
  at(t) {
    return t
  }

  __call__(source) {
    return map(t => this.at(t))(source)
  }
}
