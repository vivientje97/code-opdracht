import { expect, describe, it } from 'vitest'
import { textToNum } from './textToNum'

describe('textToNum', () => {
	it('converts simple lowercase letters to numbers', () => {
		expect(textToNum('abc')).toBe(123)
		expect(textToNum('xyz')).toBe(242526)
	})

	it('converts uppercase letters to same numbers as lowercase', () => {
		expect(textToNum('ABC')).toBe(123)
		expect(textToNum('XYZ')).toBe(242526)
	})

	it('handles mixed case letters', () => {
		expect(textToNum('aBcDeF')).toBe(123456)
		expect(textToNum('ZyX')).toBe(262524)
	})

	it('handles single letters', () => {
		expect(textToNum('a')).toBe(1)
		expect(textToNum('z')).toBe(26)
	})

	it('handles longer strings', () => {
		expect(textToNum('abcdefghijklmnopqrstuvwxyz')).toBe(1234567891011121314151617181920212223242526)
		expect(textToNum('sourceGraph')).toBe(19152118357181170)
		expect(textToNum('javascript')).toBe(1012211931891620)
		expect(textToNum('programming')).toBe(161815718113139140)
	})
})
