/* global describe, it, before */

import chai from 'chai'
import { createTimeline } from '../src/timeline'
import { createFrame } from '../src/frame'
import { createSchema } from '../src/schema'

chai.expect()

const expect = chai.expect

describe('Schema generation', () => {
  describe('Given an array defninition', () => {
    it('should detect the type properly', () => {
      let frames
      let schema

      schema = createSchema({ arr: [1,2,3] })
      frames = [
        createFrame( { arr: [3, 4, 5] }, { startTime: 2000, time: 4000 } )
      ]

      expect( schema.arr.type ).to.equal('array')
    })
  })
})
