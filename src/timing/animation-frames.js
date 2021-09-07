import { Observable } from '../rx/observable.js'
import { now } from '../util/index.js'

const tickStack = []

function step() {
  window.requestAnimationFrame(step)
  const t = now()

  for (let l = tickStack.length, i = 0; i < l; i++) {
    const fn = tickStack[i]
    fn && fn(t)
  }
}

step()

export function animationFrames() {
  return new Observable(observer => {
    const to = now()
    const cb = (t) => observer.next(t - to)
    tickStack.push(cb)
    return () => {
      const i = tickStack.indexOf(cb)
      tickStack.splice(i, 1)
    }
  })
}
