import { createFrame } from '../src/frame'
import { createSchema } from '../src/schema'
import { Interpolators } from '../src/index.js'
import { registerType } from '../src/type'
import { expect, describe, it } from 'bun:test'

describe('Schema generation', () => {
  describe('Given an array defninition', () => {
    it('should detect the type properly', () => {
      const schema = createSchema({ arr: [1, 2, 3] })
      createFrame( { arr: [3, 4, 5] }, { startTime: 2000, time: 4000 } )

      expect( schema.arr.type ).toEqual('array')
    })
  })

  describe('Given an unknown type', () => {
    it('should throw an error', () => {
      function makeSchema(){
        createSchema({ unknownType: { type: 'blah' } })
      }

      expect( makeSchema ).toThrow()
    })
  })

  describe('Given user defined type defninition', () => {
    it('should detect the user defined type properly', () => {
      const schema = { special: { type: 'My Type', default: { x: 1, y: 3 } } }

      function radius( x, y ){
        return Math.sqrt( x * x + y * y )
      }

      registerType({
        type: 'My Type'
        , default: { x: 0, y: 0 }
        , interpolator( from, to, t ){
          // spherical
          const r1 = radius( from.x, from.y )
          const ang1 = Math.atan2( from.y, from.x )
          const r2 = radius( to.x, to.y )
          const ang2 = Math.atan2( to.y, to.x )
          const r = Interpolators.linear( r1, r2, t )
          const ang = Interpolators.linear( ang1, ang2, t )
          const x = r * Math.cos( ang )
          const y = r * Math.sin( ang )
          return { x, y }
        }
      })

      createSchema( schema )
      createFrame( { special: { x: 2, y: 100 } }, { startTime: 2000, time: 4000 } )
    })
  })
})
