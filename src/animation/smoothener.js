import * as util from '@/util'
import Easing from 'easing-functions'
import { getTimeFraction, getInterpolatedState } from '@/transition'

// Helper to smooth state changes
// let smooth = Smoothener( frames )
// smooth.setState( state ) // when state changed
// state = smooth.update() // when animation frame
// ---------------------------------------

export function Smoothener(
  manager
  , {
    duration = 80
    , keys = null
    , easing = Easing.Cubic.Out
  } = {}
){
  let state = manager.state
  let targetState = state
  let startState = state
  let startTime = 0
  let endTime = -1
  let lastTime
  const smoothener = {
    duration
    , easing
    , get state(){ return state }
  }

  smoothener.setState = function( newState ){
    const now = util.now()

    startTime = lastTime || now
    endTime = startTime + smoothener.duration
    targetState = util.pick( newState, keys )

    startState = { ...state }
  }

  smoothener.update = function(){
    const now = util.now()

    if ( now > endTime ){
      lastTime = now
      state = targetState
      return state
    }

    if ( lastTime === now ){
      return state
    }

    lastTime = now

    const timeFraction = getTimeFraction(
      startTime
      , endTime
      , now
    )

    state = getInterpolatedState(
      manager._schema
      , startState
      , targetState
      , timeFraction
      , smoothener.easing
    )

    return state
  }

  return smoothener
}
