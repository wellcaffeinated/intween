/* global describe, it, before */

import chai from 'chai'
import { createTimeline } from '../src/timeline'
import { createFrame } from '../src/frame'
import { createSchema } from '../src/schema'
import Interpolators from '../src/interpolators'
import { registerType } from '../src/type'

chai.expect()

const expect = chai.expect

describe('Schema generation', () => {
  describe('Given an array defninition', () => {
    it('should detect the type properly', () => {
      let frames
      let schema

      schema = createSchema({ arr: [1, 2, 3] })
      frames = [
        createFrame( { arr: [3, 4, 5] }, { startTime: 2000, time: 4000 } )
      ]

      expect( schema.arr.type ).to.equal('array')
    })
  })

  describe('Given an unknown type', () => {
    it('should throw an error', () => {
      function makeSchema(){
        createSchema({ unknownType: { type: 'blah' } })
      }

      expect( makeSchema ).to.throw()
    })
  })

  describe('Given user defined type defninition', () => {
    it('should detect the user defined type properly', () => {
      let frames
      let schema = { special: { type: 'My Type', default: { x: 1, y: 3 } } }

      function radius( x, y ){
        return Math.sqrt( x * x + y * y )
      }

      registerType({
        type: 'My Type'
        , interpolator( from, to, t ){
          // spherical
          let r1 = radius( from.x, from.y )
          let ang1 = Math.atan2( from.y, from.x )
          let r2 = radius( to.x, to.y )
          let ang2 = Math.atan2( tp.y, tp.x )
          let r = Interpolators.linear( r1, r2, t )
          let ang = Interpolators.linear( ang1, ang2, t )
          let x = r * Math.cos( ang )
          let y = r * Math.sin( ang )
          return { x, y }
        }
      })

      schema = createSchema( schema )
      frames = [
        createFrame( { special: { x: 2, y: 100 } }, { startTime: 2000, time: 4000 } )
      ]
    })
  })
})
