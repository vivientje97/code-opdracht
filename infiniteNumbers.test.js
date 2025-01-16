import { expect, describe, it } from 'vitest'
import { infiniteNumbers } from './infiniteNumbers.js'

describe('infiniteNumbers', () => {
	it('rejects array inputs', () => {
		expect(() => infiniteNumbers([1, 2, 3])).toThrow()
	})
	
	it('adds multiple numbers correctly', () => {
		expect(infiniteNumbers(1, 2, 3)).toBe(6)
		expect(infiniteNumbers(10, 20, 30, 40)).toBe(100)
		expect(infiniteNumbers(1)).toBe(1)
		expect(infiniteNumbers(0, 0, 0)).toBe(0)
		expect(infiniteNumbers(-1, -2, -3)).toBe(-6)
	})

	it('handles string numbers correctly', () => {
		expect(infiniteNumbers('1', '2', '3')).toBe(6)
		expect(infiniteNumbers(1, '2', 3)).toBe(6)
	})

	it('handles boolean values correctly', () => {
		expect(infiniteNumbers(true, false, true)).toBe(2)
		expect(infiniteNumbers(1, true, '3', false)).toBe(5)
	})

	it('throws error for invalid inputs', () => {
		expect(() => infiniteNumbers(null)).toThrow('Invalid input')
		expect(() => infiniteNumbers(undefined)).toThrow('Invalid input')
		expect(() => infiniteNumbers(1, null, 3)).toThrow('Invalid input')
		
		expect(() => infiniteNumbers([1, 2, 3])).toThrow('Invalid input')
		expect(() => infiniteNumbers(1, [2], 3)).toThrow('Invalid input')
		
		expect(() => infiniteNumbers({})).toThrow('Invalid input')
		expect(() => infiniteNumbers(1, {}, 3)).toThrow('Invalid input')
		
		expect(() => infiniteNumbers('abc')).toThrow('Invalid input')
		expect(() => infiniteNumbers(1, 'xyz', 3)).toThrow('Invalid input')
		
		expect(() => infiniteNumbers(Infinity)).toThrow('Invalid input')
		expect(() => infiniteNumbers(NaN)).toThrow('Invalid input')
		expect(() => infiniteNumbers(1, Infinity, 3)).toThrow('Invalid input')
	})
})
