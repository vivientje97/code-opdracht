import { expect, describe, it } from 'vitest'
import { extractNumbers } from './extractNumbers.js'

describe('extractNumbers', () => {
	it('extracts single digits correctly', () => {
		expect(extractNumbers('hello1@2+3')).toEqual([1, 2, 3])
		expect(extractNumbers('a1b2c3')).toEqual([1, 2, 3])
		expect(extractNumbers('123')).toEqual([123])
	})

	it('extracts multi-digit numbers correctly', () => {
		expect(extractNumbers('abc123xyz')).toEqual([123])
		expect(extractNumbers('12+34=46')).toEqual([12, 34, 46])
		expect(extractNumbers('100200300')).toEqual([100200300])
	})

	it('handles strings with no numbers', () => {
		expect(extractNumbers('hello')).toEqual([])
		expect(extractNumbers('')).toEqual([])
		expect(extractNumbers('@#$%')).toEqual([])
	})

	it('throws error for invalid inputs', () => {
		expect(() => extractNumbers(null)).toThrow('Invalid input')
		expect(() => extractNumbers(undefined)).toThrow('Invalid input')
		expect(() => extractNumbers(123)).toThrow('Invalid input')
		expect(() => extractNumbers({})).toThrow('Invalid input')
		expect(() => extractNumbers([])).toThrow('Invalid input')
		expect(() => extractNumbers(true)).toThrow('Invalid input')
	})

	it('handles mixed content correctly', () => {
		expect(extractNumbers('mix123ed456content789')).toEqual([123, 456, 789])
		expect(extractNumbers('1a2b3c')).toEqual([1, 2, 3])
		expect(extractNumbers('---1---2---3---')).toEqual([1, 2, 3])
	})
})
