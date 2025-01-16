import { describe, it, expect } from 'vitest';
import { extractEmojis } from './extractEmojis'

describe('extractEmojis', () => {
	it('extracts emojis from a string', () => {
		expect(extractEmojis('Hello 🌍!')).toEqual(['🌍'])
		expect(extractEmojis('No emojis here')).toEqual([])
		expect(extractEmojis('Multiple emojis 🎉🎂🎈')).toEqual(['🎉', '🎂', '🎈'])
		expect(extractEmojis('Mixed text and emojis 🚀 Text 🎨')).toEqual(['🚀', '🎨'])
	})

	it('handles empty strings', () => {
		expect(extractEmojis('')).toEqual([])
	})

	it('handles strings with only emojis', () => {
		expect(extractEmojis('😀😂👍')).toEqual(['😀', '😂', '👍'])
	})

	it('handles complex strings with emojis and special characters', () => {
		expect(extractEmojis('✨🌟→○€𝟶💥@!')).toEqual(['✨', '🌟', '💥'])
	})
})
