import { getIntersectingPaths, lerp, sortedIndex } from '@/util'
import { createState } from '@/schema'
import { getInterpolatedState, createTransitionFromFrame, getTimeFraction } from '@/transition'

// Check for conflicting overlaps
// ---------------------------------------
function getConflictingFrames( timeline ){
  const markers = []
  let idx

  for ( let l = timeline.length, i = 0; i < l; i++ ){
    const m = timeline[i]

    if ( m.type === 'start' ){
      markers.push( m )
    } else {
      // stop tracking its partner
      idx = markers.indexOf( m.start )
      markers.splice( idx, 1 )
    }

    for ( let l = markers.length, i = 0; i < l; i++ ){
      const m = markers[i]

      for ( let j = i + 1; j < l; j++ ){
        const paths = getIntersectingPaths(
          m.transition.endState
          , markers[j].transition.endState
        )

        if ( paths.length ){
          return {
            paths
            , frames: [
              m.frame
              , markers[j].frame
            ]
          }
        }
      }
    }
  }

  return false
}

function getPrevEndTime( timeline, idx, currTime ){
  for ( let i = idx - 1; i >= 0; i-- ){
    const ep = timeline[i]

    // loop until previous end marker is found.
    // if they have the same end time, ignore
    if ( ep.type === 'end' && currTime !== ep.time ){
      return ep.time
    }
  }

  return 0
}

// Create a timeline array from specified frames
// ---------------------------------------
export function createTimeline( schema, frames = [] ){

  // timeline is an array of
  // marker = {
  //   type: 'start' | 'end'
  //   , time: Number
  //   , frame: {...}
  //   , start|end: <the other transiton>
  // }

  if ( !frames.length ){ return [] }

  const getTime = v => v.time
  const defaultState = createState( schema )
  const timeline = []

  // omit frames that are implicitly defined first
  const implicitFrames = frames.filter( f => f.meta.implicit ).sort( (a, b) => a.meta.endTime - b.meta.endTime )

  frames = frames.filter( f => !f.meta.implicit )

  frames.forEach( frame => {
    let idx
    const start = { type: 'start', frame, time: frame.meta.endTime - frame.meta.duration }
    const end = { type: 'end', frame, time: frame.meta.endTime }

    start.end = end
    end.start = start

    idx = sortedIndex( timeline, end, getTime )
    timeline.splice( idx, 0, end )

    // "start"s need to be after "end"s of equal time... but not after its own end
    idx = Math.min(idx, sortedIndex( timeline, start, getTime, true ))
    timeline.splice( idx, 0, start )
  })

  // TODO: is this necessary?
  // timeline.sort( (a, b) => {
  //   if ( a.time === b.time ){
  //     return a.type > b.type ? 1 : -1
  //   }
  //
  //   return 0
  // })

  // insert frames with implicit timing
  implicitFrames.forEach( frame => {
    const end = { type: 'end', frame, time: frame.meta.endTime }
    let idx = sortedIndex( timeline, end, getTime )
    const prevEndTime = getPrevEndTime( timeline, idx, end.time )
    const startTime = lerp( end.time, prevEndTime, frame.meta.fractionalDuration )
    const start = { type: 'start', frame, time: startTime }

    start.end = end
    end.start = start

    // add the end
    timeline.splice( idx, 0, end )
    // "start"s need to be after "end"s of equal time
    idx = Math.min(idx, sortedIndex( timeline, start, getTime, true ))
    timeline.splice( idx, 0, start )
  })

  // assign inherited states
  let prevState = defaultState

  timeline.forEach( (m, idx) => {
    // only go through ends
    if ( m.type !== 'end' ){ return }

    const transition = createTransitionFromFrame( m.start.time, m.time, m.frame, prevState )

    m.transition = transition
    m.start.transition = transition

    prevState = { ...prevState, ...transition.endState }
  })

  prevState = defaultState

  // assign a reduced end state to each marker
  timeline.forEach( m => {
    if ( m.type !== 'end' ){ return }

    const transitions = getTransitionsAtTime( timeline, m.time )

    prevState = reduceTransitions( schema, transitions, m.time, prevState )
    m.state = prevState
  })

  const conflicts = getConflictingFrames( timeline )

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
  const markers = []
  let idx

  for ( let l = timeline.length, i = 0; i < l; i++ ){
    const m = timeline[i]

    if ( m.time > time ){
      break
    }

    if ( m.type === 'start' ){
      markers.push( m )
    } else if (m.time !== time) { // if we're at the exact time of the end, track it
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
    const m = timeline[i]

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
    const progress = getTimeFraction( tr.startTime, tr.endTime, time )

    return Object.assign(
      state
      , getInterpolatedState( schema, tr.startState, tr.endState, progress, tr.easing )
    )
  }, { ...initialState })
}
