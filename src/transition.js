import { pick, clamp } from '@/util'

export function createTransitionFromFrame( startTime, endTime, frame, previousState ){
  const endState = frame.state
  const startState = pick( previousState, Object.keys(endState) )
  const easing = frame.meta.easing

  return {
    startTime
    , endTime
    , startState
    , endState
    , easing
    , frame
  }
}

export function interpolateProperty( fn, from, to, progress, opts = {} ){
  return fn( from, to, progress, opts )
}

export function getInterpolatedState( schema, startState, endState, timeFraction, easing ){

  if ( timeFraction <= 0 ){
    return { ...startState }
  }

  if ( timeFraction >= 1 ){
    return { ...endState }
  }

  const nextState = { ...startState }

  for ( const prop in endState ){
    const def = schema[prop]
    let val

    if ( !def ){
      // not specified in schema. just set
      val = endState[prop]
    } else {
      easing = easing || def.easing
      const progress = easing( timeFraction )

      val = interpolateProperty(
        def.interpolator
        , nextState[prop]
        , endState[prop]
        , progress
        , def.interpolatorOpts
      )
    }

    nextState[prop] = val
  }

  return nextState
}

export function getTimeFraction( startTime, endTime, time ){
  const duration = endTime - startTime
  const frac = duration ? (time - startTime) / duration : 1

  return clamp(0, 1, frac)
}
