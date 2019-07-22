import util from '@/util'
import Easing from 'easing-functions'

export function createTransitionFromFrame( startTime, endTime, frame, previousState ){
  let endState = frame.state
  let startState = util.pick( previousState, Object.keys(endState) )
  let easing = frame.meta.easing || Easing.Linear.None

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

  let nextState = { ...startState }

  for ( let prop in endState ){
    let def = schema[prop]
    let val

    if ( !def ){
      // not specified in schema. just set
      val = endState[ prop ]
    } else {

      let progress = easing( timeFraction )

      val = interpolateProperty(
        def.interpolator
        , nextState[ prop ]
        , endState[ prop ]
        , progress
        , def.interpolatorOpts
      )
    }

    nextState[ prop ] = val
  }

  return nextState
}

export function getTimeFraction( startTime, endTime, time ){
  let duration = endTime - startTime
  let frac = duration ? (time - startTime) / duration : 1

  return util.clamp(0, 1, frac)
}
