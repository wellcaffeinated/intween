import { Observable } from '@/rx'
import { now } from '@/util'

const tickStack = []

function step() {
  window.requestAnimationFrame(step)
  const t = now()

  for (let l = tickStack.length, i = 0; i < l; i++) {
    tickStack[i].next(t)
  }
}

step()

export function fromAnimationFrame() {
  return new Observable(observer => {
    tickStack.push(observer)
    return () => {
      const i = tickStack.indexOf(observer)
      tickStack.splice(i, 1)
    }
  })
}
