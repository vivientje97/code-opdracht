import { expect, describe, it } from 'vitest'
import { stackCount } from './stackCount.js'

describe('stackCount', () => {
	it('handles single digit numbers correctly', () => {
		expect(stackCount('1')).toBe(1)
		expect(stackCount('9')).toBe(9)
		expect(stackCount('0')).toBe(0)
	})

	it('performs stack counting correctly', () => {
		expect(stackCount('1234567890123456789012345678901234567890123456789012345678901234567890')).toBe(9)
		expect(stackCount('999')).toBe(9)
		expect(stackCount('12')).toBe(3)
		expect(stackCount('123')).toBe(6)
		expect(stackCount('1234')).toBe(8)
		expect(stackCount('12345')).toBe(6)
		expect(stackCount('123456')).toBe(3)
		expect(stackCount('1234567')).toBe(1)
		expect(stackCount('12345678')).toBe(9)
		expect(stackCount('123456789')).toBe(9)
	})

	it('throws error for invalid inputs', () => {
		expect(() => stackCount(null)).toThrow('Invalid input')
		expect(() => stackCount(undefined)).toThrow('Invalid input')
		expect(() => stackCount(123)).toThrow('Invalid input')
		expect(() => stackCount({})).toThrow('Invalid input')
		expect(() => stackCount([])).toThrow('Invalid input')
		expect(() => stackCount(true)).toThrow('Invalid input')
	})

	it('throws error for invalid string contents', () => {
		expect(() => stackCount('abc')).toThrow('Invalid input')
		expect(() => stackCount('12.34')).toThrow('Invalid input')
		expect(() => stackCount('1a2b3c')).toThrow('Invalid input')
		expect(() => stackCount('-123')).toThrow('Invalid input')
	})
})

function generateRandomString(length) {
	const chars = '1234567890'
	let result = ''
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length))
	}
	return result
}

describe('stackCount with random strings', () => {
	it('handles random string input correctly', () => {
		const randomLength = Math.floor(Math.random() * (100 - 10 + 1)) + 10
		const randomString = generateRandomString(randomLength)
		const numbersOnly = randomString.replace(/\D/g, '')

		if (numbersOnly.length > 0) {
			const result = stackCount(numbersOnly)
			expect(result).toBeGreaterThanOrEqual(0)
			expect(result).toBeLessThanOrEqual(9)
			expect(Number.isInteger(result)).toBe(true)
		}
	})
})
