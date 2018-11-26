import util from '@/util'

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

export function getTimeFraction( endTime, duration, time ){
  let startTime = endTime - duration

  return util.clamp(0, 1, (time - startTime) / duration)
}

export function interpolateBetweenFrames( schema, prevFrame, nextFrame, time ){
  // if we're at the beginning
  if ( !prevFrame ){
    return { ...nextFrame.state }
  }

  // if we're at the end...
  if ( !nextFrame ){
    return { ...prevFrame.state }
  }

  let timeFraction = getTimeFraction( nextFrame.meta.time, nextFrame.meta.duration, time )

  return getInterpolatedState( schema, prevFrame.state, nextFrame.state, timeFraction )
}
