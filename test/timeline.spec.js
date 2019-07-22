/* global describe, it, before */

import chai from 'chai'
import {
  getTransitionsAtTime
  , createTimeline
  , reduceTransitions
  , getStartState
} from '../src/timeline'
import { createFrame } from '../src/frame'
import { createSchema } from '../src/schema'

chai.expect()

const expect = chai.expect

describe('Timeline generation', () => {
  describe('Given a sequence of overlapping frames that modify the same property', () => {
    it('should throw an error', () => {
      let frames
      let schema

      schema = createSchema({ x: Number })
      frames = [
        createFrame( { x: 2 }, { startTime: 2000, time: 4000 } )
        , createFrame( { x: 4 }, { startTime: 1000, time: 3000 } )
      ]
      expect( () => createTimeline( schema, frames ) ).to.throw()
    })
  })

  describe('Given implicitly defined frame timing it', () => {
    it('should correctly parse it', () => {
      let frames
      let schema

      schema = createSchema({ x: Number })
      frames = [
        createFrame( { x: 2 }, { startTime: 2000, time: 4000 } )
        , createFrame( { x: 4 }, { duration: '100%', time: 5000 } )
        , createFrame( { x: 5 }, { duration: '50%', time: 7000 } )
        , createFrame( { x: 2 }, { duration: '1s', time: '9s' } )
      ]

      let timeline = createTimeline( schema, frames )
      let endpoints = timeline.filter( e => e.type === 'end' )
      let startpoints = timeline.filter( e => e.type === 'start' )

      expect( endpoints.map( e => e.time ) ).to.eql([ 4000, 5000, 7000, 9000 ])
      expect( startpoints.map( e => e.time ) ).to.eql([ 2000, 4000, 6000, 8000 ])
    })

    it('should give correct state at given time', () => {
      let frames
      let schema

      schema = createSchema({ x: 0, y: 0 })
      frames = [
        createFrame( { y: 10 }, { duration: '100%', time: '10s' } )
        , createFrame( { x: 1 }, { duration: '4s', time: '10s' } )
      ]

      let time = 4000
      let timeline = createTimeline( schema, frames )
      let transitions = getTransitionsAtTime( timeline, time )
      let startState = getStartState( timeline, time, { x: 0, y: 0 } )

      let state = reduceTransitions( schema, transitions, time, startState )
      expect( state ).to.eql({ x: 0, y: 4 })
    })
  })
})
