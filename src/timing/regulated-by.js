import { Observable } from '../rx/observable.js'

export const regulatedBy = (regulator, onlyNew = false) => source => new Observable(sink => {
  let isFresh = false
  let value = null
  let isComplete = false

  const regSub = regulator.subscribe({
    next: () => {
      if (onlyNew && !isFresh){ return }
      sink.next(value)
      isFresh = false

      if (isComplete) {
        sink.complete()
        regSub.unsubscribe()
      }
    }
    , complete: () => {
      sink.complete()
    }
    , error: e => {
      sink.error(e)
    }
  })

  const sub = source.subscribe({
    next: v => {
      value = v
      isFresh = true
    }
    , complete: () => {
      isComplete = true
    }
    , error: e => {
      sink.error(e)
      isFresh = false
      value = null
      regSub.unsubscribe()
    }
  })

  return () => {
    sub.unsubscribe()
    regSub.unsubscribe()
  }
})
