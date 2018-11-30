/* global describe, it, before */

import chai from 'chai'
import {timeParser} from '../src/parsers/time.js'

chai.expect()

const expect = chai.expect

describe('Parsers', () => {
  describe('Given a time format', () => {
    it('should parse decimal format', () => {
      expect(timeParser('3.45s')).to.be.equal(3450)
      expect(timeParser('56.7m')).to.be.equal(3402000)
      expect(timeParser('4.56h')).to.be.equal(16416000)
    })

    it('should parse 00:00:00 format', () => {
      expect(timeParser('20:43')).to.be.equal(1243000)
      expect(timeParser('08:03:00')).to.be.equal(28980000)
    })
  })
})
