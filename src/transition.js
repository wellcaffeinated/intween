import util from '@/util'

export function interpolateProperty( fn, from, to, progress ){
  return fn( from, to, progress )
}

export function getInterpolatedState( schema, prevFrame, nextFrame, time ){

  // if we're at the beginning
  if ( !prevFrame ){
    return { ...nextFrame.state }
  }

  // if we're at the end...
  if ( !nextFrame ){
    return { ...prevFrame.state }
  }

  let duration = nextFrame.meta.duration
  let nextState = { ...prevFrame.state }

  for ( let prop in nextFrame.state ){
    let def = schema[prop]
    let val

    if ( !def ){
      // not specified in schema. just set
      val = nextFrame.state[ prop ]
    } else {

      let startTime = nextFrame.meta.time - duration
      let timeFraction = util.clamp(0, 1, (time - startTime) / duration)
      let progress = def.easing( timeFraction )

      val = interpolateProperty(
        def.interpolator
        , nextState[ prop ]
        , nextFrame.state[ prop ]
        , progress
      )
    }

    nextState[ prop ] = val
  }

  return nextState
}
