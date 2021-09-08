/* global describe, it */

import chai from 'chai'
import { Parsers } from '..'
const { parseTime } = Parsers

chai.expect()

const expect = chai.expect

describe('Parsers', () => {
  describe('Given a time format', () => {
    it('should parse decimal format', () => {
      expect(parseTime('3.45s')).to.be.equal(3450)
      expect(parseTime('56.7m')).to.be.equal(3402000)
      expect(parseTime('4.56h')).to.be.equal(16416000)
    })

    it('should parse 00:00:00 format', () => {
      expect(parseTime('20:43')).to.be.equal(1243000)
      expect(parseTime('08:03:00')).to.be.equal(28980000)
    })
  })
})
