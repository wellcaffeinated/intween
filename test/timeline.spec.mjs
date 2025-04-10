import {
  getTransitionsAtTime
  , createTimeline
  , reduceTransitions
  , getStartState
} from '../src/timeline'
import { createFrame } from '../src/frame'
import { createSchema } from '../src/schema'
import { expect, describe, it } from 'bun:test'

describe('Timeline generation', () => {
  describe('Given a sequence of overlapping frames that modify the same property', () => {
    it('should throw an error', () => {
      const schema = createSchema({ x: 0 })
      const frames = [
        createFrame( { x: 2 }, { startTime: 2000, endTime: 4000 } )
        , createFrame( { x: 4 }, { startTime: 1000, endTime: 3000 } )
      ]
      expect( () => createTimeline( schema, frames ) ).toThrow()
    })
  })

  describe('Given implicitly defined frame timing it', () => {
    it('should correctly parse it', () => {
      const schema = createSchema({ x: 0 })
      const frames = [
        createFrame( { x: 2 }, { startTime: 2000, endTime: 4000 } )
        , createFrame( { x: 4 }, { duration: '100%', endTime: 5000 } )
        , createFrame( { x: 5 }, { duration: '50%', endTime: 7000 } )
        , createFrame( { x: 2 }, { duration: '1s', endTime: '9s' } )
      ]

      const timeline = createTimeline( schema, frames )
      const endpoints = timeline.filter( e => e.type === 'end' )
      const startpoints = timeline.filter( e => e.type === 'start' )

      expect( endpoints.map( e => e.time ) ).toEqual([4000, 5000, 7000, 9000])
      expect( startpoints.map( e => e.time ) ).toEqual([2000, 4000, 6000, 8000])
    })

    it('should give correct state at given time', () => {
      const schema = createSchema({ x: 0, y: 0 })
      const frames = [
        createFrame( { y: 10 }, { duration: '100%', endTime: '10s' } )
        , createFrame( { x: 1 }, { duration: '4s', endTime: '10s' } )
      ]

      const time = 4000
      const timeline = createTimeline( schema, frames )
      const transitions = getTransitionsAtTime( timeline, time )
      const startState = getStartState( timeline, time, { x: 0, y: 0 } )

      const state = reduceTransitions( schema, transitions, time, startState )
      expect( state ).toEqual({ x: 0, y: 4 })
    })
  })
})
