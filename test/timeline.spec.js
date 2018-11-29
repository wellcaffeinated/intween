/* global describe, it, before */

import chai from 'chai'
import { createTimeline } from '../src/timeline'
import { createFrame } from '../src/frame'
import { createSchema } from '../src/schema'

chai.expect()

const expect = chai.expect

describe('Given a sequence of overlapping frames that modify the same property', () => {
  let frames
  let schema
  before(() => {
    schema = createSchema({ x: Number })
    frames = [
      createFrame( { x: 2 }, { startTime: 2000, time: 4000 } )
      , createFrame( { x: 4 }, { startTime: 1000, time: 3000 } )
    ]
  })

  it('should throw an error', () => {
    expect( () => createTimeline( schema, frames ) ).to.throw()
  })
})
