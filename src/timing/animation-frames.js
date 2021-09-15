import { Observable } from '../rx/observable.js'
import { now } from '../util/index.js'
import window from 'global/window'

const requestAnimationFrame = ((window) => {
  return window.requestAnimationFrame || (fn => setTimeout(fn, 16))
})(window)

const tickStack = []

function step() {
  const l = tickStack.length
  if (l === 0){ return }

  requestAnimationFrame(step)
  const t = now()

  for (let i = 0; i < l; i++) {
    const fn = tickStack[i]
    fn && fn(t)
  }
}

function add(fn){
  tickStack.push(fn)
  if (tickStack.length === 1) { step() }
}

function remove(fn){
  const i = tickStack.indexOf(fn)
  tickStack.splice(i, 1)
}

export function animationFrames() {
  return new Observable(observer => {
    const to = now()
    const cb = (t) => observer.next(t - to)
    add(cb)
    return () => {
      remove(cb)
    }
  })
}
