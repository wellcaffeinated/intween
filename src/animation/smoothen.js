// import { linear } from '@/easing'
import { parseEasing } from '@/parsers/easing'
import { createSchema, createState } from '@/schema'
import { getInterpolatedState } from '@/transition'
import { Observable } from '@/rx'
import { animationFrames } from '@/timing/animation-frames'
import { invLerpClamped } from '@/util'

const defaultConfig = { duration: 1000, easing: 'cubicOut' }
// Helper to smooth state changes
// ---------------------------------------
export function Smoothen(
  config = defaultConfig,
  getState,
  schemaDef = null
){
  if (config instanceof Function){
    getState = config
    config = defaultConfig
  }

  return source => new Observable(sink => {
    const _targets = []
    let schema
    let time = 0
    let currentState

    const easing = parseEasing(config.easing)

    if (!getState){
      getState = () => currentState
    }

    const update = t => {
      time = t

      if (!_targets.length){ return null }

      let prev = 1
      const timeFracs = _targets.map(({ startTime, endTime }) => {
        if (prev === 0){ return 0 }

        const tf = invLerpClamped(
          startTime
          , endTime
          , time
        ) / prev

        prev = easing(tf)
        return tf
      })

      currentState = timeFracs.reduceRight((targetState, tf, i) => {
        const { startState } = _targets[i]
        return getInterpolatedState(
          schema
          , startState
          , targetState
          , tf
          , easing
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
        schema = createSchema(schemaDef || getState() || targetState)
        currentState = createState(schema)
        if (!schemaDef){ return }
      }

      const l = _targets.length
      const startState = l ? _targets[l - 1].targetState : { ...getState() }

      _targets.push({
        startTime: time
        , endTime: time + config.duration
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
