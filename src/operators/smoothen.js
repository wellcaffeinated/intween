import { linear } from '@/easing'
import { parseEasing } from '@/parsers/easing'
import { createSchema, createState } from '@/schema'
import { getTimeFraction, getInterpolatedState } from '@/transition'
import { Observable, animationFrames } from '@/rx'

// Helper to smooth state changes
// ---------------------------------------
export default function Smoothen(
  { duration = 1000, easing = 'cubicOut' } = {},
  schemaDef = null,
  getState
){
  return source => new Observable(sink => {
    const _targets = []
    let schema
    let time = 0
    let currentState

    easing = parseEasing(easing)

    if (!getState){
      getState = () => currentState
    }

    const update = t => {
      time = t

      if (!_targets.length){ return null }

      let prev = 1
      const timeFracs = _targets.map(({ startTime, endTime }) => {
        if (prev <= 0){ return 0 }

        const tf = easing(
          getTimeFraction(
            startTime
            , endTime
            , time
          )
        ) / prev

        prev = tf
        return tf
      })

      currentState = timeFracs.reduceRight((targetState, tf, i) => {
        const { startState } = _targets[i]
        return getInterpolatedState(
          schema
          , startState
          , targetState
          , tf
          , linear
        )
      }, _targets[_targets.length - 1].targetState)

      // clean
      while (_targets[0]?.endTime <= time){
        _targets.shift()
      }

      return currentState
    }

    const set = targetState => {
      if (!schema) {
        schema = createSchema(schemaDef || targetState)
        currentState = createState(schema)
        if (!schemaDef){ return }
      }

      const l = _targets.length
      const startState = l ? _targets[l - 1].targetState : { ...getState() }

      _targets.push({
        startTime: time
        , endTime: time + duration
        , startState
        , targetState
      })
    }

    let nextTarget = null
    const sub = animationFrames().subscribe(t => {
      if (nextTarget){
        set(nextTarget)
        nextTarget = null
      }
      const state = update(t)
      if (!state){ return }
      sink.next(state)
    })
    const sinkSub = source.subscribe({
      next: state => {
        nextTarget = state
      }
      , error: e => sink.error(e)
      , complete: () => sink.complete()
    })
    const unsubscribe = () => {
      sub.unsubscribe()
      sinkSub.unsubscribe()
    }
    return { unsubscribe }
  })
}
