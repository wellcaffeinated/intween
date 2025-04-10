import { Parsers } from '../src/index.js'
import { expect, describe, it } from 'bun:test'
const { parseTime } = Parsers

describe('Parsers', () => {
  describe('Given a time format', () => {
    it('should parse decimal format', () => {
      expect(parseTime('3.45s')).toEqual(3450)
      expect(parseTime('56.7m')).toEqual(3402000)
      expect(parseTime('4.56h')).toEqual(16416000)
    })

    it('should parse 00:00:00 format', () => {
      expect(parseTime('20:43')).toEqual(1243000)
      expect(parseTime('08:03:00')).toEqual(28980000)
    })
  })
})
