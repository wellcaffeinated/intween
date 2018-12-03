import util from '@/util'
import { createState } from '@/schema'
import { getInterpolatedState, createTransitionFromFrame, getTimeFraction } from '@/transition'

// Check for conflicting overlaps
// ---------------------------------------
function getConflictingFrames( timeline ){
  let markers = []
  let idx

  for ( let l = timeline.length, i = 0; i < l; i++ ){
    let m = timeline[ i ]

    if ( m.type === 'start' ){
      markers.push( m )
    } else {
      // stop tracking its partner
      idx = markers.indexOf( m.start )
      markers.splice( idx, 1 )
    }

    for ( let l = markers.length, i = 0; i < l; i++ ){
      let m = markers[ i ]

      for ( let j = i + 1; j < l; j++ ){
        let paths = util.getIntersectingPaths(
          m.transition.endState
          , markers[ j ].transition.endState
        )

        if ( paths.length ){
          return {
            paths
            , frames: [
              m.frame
              , markers[ j ].frame
            ]
          }
        }
      }
    }
  }

  return false
}

// Create a timeline array from specified frames
// ---------------------------------------
export function createTimeline( schema, frames = [] ){

  if ( !frames.length ){ return [] }

  const getTime = v => v.time
  let defaultState = createState( schema )
  let timeline = []

  frames.forEach( frame => {
    let idx
    let start = { type: 'start', frame, time: frame.meta.time - frame.meta.duration }
    let end = { type: 'end', frame, time: frame.meta.time }

    start.end = end
    end.start = start

    idx = util.sortedIndex( timeline, start, getTime )
    timeline.splice( idx, 0, start )

    idx = util.sortedIndex( timeline, end, getTime )
    timeline.splice( idx, 0, end )
  })

  timeline.sort( (a, b) => {
    if ( a.time === b.time ){
      return a.type > b.type ? 1 : -1
    }

    return 0
  })

  let prevState = defaultState

  // assign inherited states
  timeline.forEach( (m, idx) => {
    // only go through ends
    if ( m.type !== 'end' ){ return }

    let transition = createTransitionFromFrame( m.frame, prevState )

    m.transition = transition
    m.start.transition = transition

    prevState = { ...prevState, ...transition.endState }
  })

  prevState = defaultState

  // assign a reduced end state to each marker
  timeline.forEach( m => {
    if ( m.type !== 'end' ){ return }

    let transitions = getTransitionsAtTime( timeline, m.time )

    prevState = reduceTransitions( schema, transitions, m.time, prevState )
    m.state = prevState
  })

  let conflicts = getConflictingFrames( timeline )

  if ( conflicts ){
    throw new Error('The following overlapping frames modify the same state paths:\n' +
      `paths: ${conflicts.paths}\n` +
      `frames: ${JSON.stringify(conflicts.frames, null, 2)}`
    )
  }

  return timeline
}

// Get transition information needed
// at specified time from timeline
// ---------------------------------------
export function getTransitionsAtTime( timeline, time ){
  let markers = []
  let idx

  for ( let l = timeline.length, i = 0; i < l; i++ ){
    let m = timeline[ i ]

    if ( m.time >= time ){
      break
    }

    if ( m.type === 'start' ){
      markers.push( m )
    } else {
      // stop tracking its partner
      idx = markers.indexOf( m.start )
      markers.splice( idx, 1 )
    }
  }

  return markers.map(a => a.transition)
}

// Get the cached complete state at the
// last end marker
// ---------------------------------------
export function getStartState( timeline, time, defaultState ){
  let state = defaultState

  for ( let l = timeline.length, i = 0; i < l; i++ ){
    let m = timeline[ i ]

    if ( m.time > time ){
      return state
    }

    if ( m.type === 'end' ){
      state = m.state
    }
  }

  return state
}

// Get final state from transitions
// ---------------------------------------
export function reduceTransitions( schema, transitions = [], time = 0, initialState = {} ){
  return transitions.reduce( (state, tr) => {
    let progress = getTimeFraction( tr.startTime, tr.endTime, time )

    return Object.assign(
      state
      , getInterpolatedState( schema, tr.startState, tr.endState, progress, tr.easing )
    )
  }, { ...initialState })
}
