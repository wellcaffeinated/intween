import { pick, cloneDeep } from './util/index.js'

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

export function interpolateProperty( fn, from, to, progress ){
  return fn( from, to, progress )
}

export function getInterpolatedState( schema, startState, endState, timeFraction, easing ){

  if ( timeFraction <= 0 ){
    return cloneDeep(startState)
  }

  if ( timeFraction >= 1 ){
    return cloneDeep(endState)
  }

  const nextState = cloneDeep(startState)

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
        , startState[prop]
        , endState[prop]
        , progress
      )
    }

    nextState[prop] = val
  }

  return nextState
}
