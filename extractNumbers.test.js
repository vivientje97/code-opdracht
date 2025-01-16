import { expect, describe, it } from 'vitest'
import { extractNumbers } from './extractNumbers.js'

describe('extractNumbers', () => {
	it('extracts single digits correctly', () => {
		expect(extractNumbers('hello1@2+3')).toEqual([1, 2, 3])
		expect(extractNumbers('a1b2c3')).toEqual([1, 2, 3])
		expect(extractNumbers('123')).toEqual([1, 2, 3])
	})

	it('extracts multi-digit numbers correctly', () => {
		expect(extractNumbers('abc123xyz')).toEqual([1, 2, 3])
		expect(extractNumbers('12+34=46')).toEqual([1, 2, 3, 4, 4, 6])
		expect(extractNumbers('100200300')).toEqual([1, 0, 0, 2, 0, 0, 3, 0, 0])
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
		expect(extractNumbers('mix123ed456→○€𝟶content789')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
		expect(extractNumbers('1a2b3c')).toEqual([1, 2, 3])
		expect(extractNumbers('---1---2---3---')).toEqual([1, 2, 3])
		expect(extractNumbers('𝟶\\1\/○€2//3😀😇→')).toEqual([1, 2, 3])
	})
})
