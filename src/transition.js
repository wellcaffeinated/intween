import util from '@/util'

export function createTransitionFromFrame( frame, previousState ){
  let startTime = frame.meta.time - frame.meta.duration
  let endTime = frame.meta.time
  let endState = frame.state
  let startState = util.pick( previousState, Object.keys(endState) )

  return {
    startTime
    , endTime
    , startState
    , endState
    , frame
  }
}

export function interpolateProperty( fn, from, to, progress ){
  return fn( from, to, progress )
}

export function getInterpolatedState( schema, startState, endState, timeFraction ){

  let nextState = { ...startState }

  for ( let prop in endState ){
    let def = schema[prop]
    let val

    if ( !def ){
      // not specified in schema. just set
      val = endState[ prop ]
    } else {

      let progress = def.easing( timeFraction )

      val = interpolateProperty(
        def.interpolator
        , nextState[ prop ]
        , endState[ prop ]
        , progress
      )
    }

    nextState[ prop ] = val
  }

  return nextState
}

export function getTimeFraction( startTime, endTime, time ){
  let duration = endTime - startTime

  return util.clamp(0, 1, (time - startTime) / duration)
}
