import { expect, describe, it } from 'vitest'
import { addNumbers } from './addNumbers.js'

describe('addNumbers function', () => {
	it('adds two positive numbers correctly', () => {
		expect(addNumbers(2, 3)).toBe(5)
	})

	it('adds a positive and negative number correctly', () => {
		expect(addNumbers(5, -3)).toBe(2)
	})

	it('adds two negative numbers correctly', () => {
		expect(addNumbers(-2, -4)).toBe(-6)
	})

	it('adds zero correctly', () => {
		expect(addNumbers(0, 5)).toBe(5)
		expect(addNumbers(5, 0)).toBe(5)
		expect(addNumbers(0, 0)).toBe(0)
	})

	it('adds decimal numbers correctly', () => {
		expect(addNumbers(1.5, 2.7)).toBeCloseTo(4.2)
	})
})
