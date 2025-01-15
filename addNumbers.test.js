import { expect, describe, it } from 'vitest'
import { addNumbers } from './addNumbers.js'

describe('addNumbers function', () => {
	it('handles basic number additions correctly', () => {
		expect(addNumbers(2, 3)).toBe(5)
		expect(addNumbers(5, -3)).toBe(2)
		expect(addNumbers(-2, -4)).toBe(-6)
	})

	it('handles decimal numbers correctly', () => {
		expect(addNumbers(1.5, 2.7)).toBeCloseTo(4.2)
		expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3)
		expect(addNumbers(-1.5, 2.5)).toBe(1)
	})

	it('adds zero correctly', () => {
		expect(addNumbers(0, 5)).toBe(5)
		expect(addNumbers(5, 0)).toBe(5)
		expect(addNumbers(0, 0)).toBe(0)
	})

	it('handles string numbers correctly', () => {
		expect(addNumbers('2', '3')).toBe(5)
		expect(addNumbers('2.5', '3.5')).toBe(6)
	})

	it('handles boolean values correctly', () => {
		expect(addNumbers(true, true)).toBe(2)
		expect(addNumbers(false, true)).toBe(1)
		expect(addNumbers(false, false)).toBe(0)
		expect(addNumbers(1, true)).toBe(2)
		expect(addNumbers(5, false)).toBe(5)
		expect(addNumbers(true, 3)).toBe(4)
	})

	it('handles number-like objects correctly', () => {
		expect(addNumbers(Number(5), Number(3))).toBe(8)
		expect(addNumbers(Object(2), Object(3))).toBe(5)
	})
	
	it('handles invalid input by throwing error', () => {
		expect(() => addNumbers(null, 5)).toThrow()
		expect(() => addNumbers(undefined, 5)).toThrow()
		expect(() => addNumbers('abc', 5)).toThrow()
		expect(() => addNumbers([], 5)).toThrow()
		expect(() => addNumbers({}, 5)).toThrow()
	})
})
