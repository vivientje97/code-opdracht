import { expect, describe, it } from 'vitest'
import { replaceTextLists } from './replaceTextLists'

describe('replaceTextLists', () => {
	it('replaces characters based on the lists', () => {
		expect(replaceTextLists('hello', ['l'], ['a', 'b'])).toBe('heabo')
		expect(replaceTextLists('hello', [], ['a', 'b'])).toBe('hello')
		expect(replaceTextLists('hello', ['e'], ['a', 'b'])).toBe('hallo')
		expect(replaceTextLists('hello', ['e', 'l'], ['a', 'b'])).toBe('habao')
		expect(replaceTextLists('hello', ['h', 'e', 'l', 'l', 'o'], ['c', 'o', 'c', 'o', 's'])).toBe('cocos')
		expect(replaceTextLists('aaaaaaaaaa', ['a'], ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])).toBe('0123456789')
		expect(replaceTextLists('hey there! how are you?', ['!', 'h', '?'], ['D'])).toBe('hey thereD Dow are youD')
		expect(replaceTextLists('hey there! how are you?', ['!', 'h', '?'], ['?', '!'])).toBe('hey there? !ow are you?')
	})

	it('handles cases where no characters are replaced', () => {
		expect(replaceTextLists('unchanged', [], [])).toBe('unchanged')
		expect(replaceTextLists('unchanged', ['x'], ['y'])).toBe('unchanged')
	})

	it('handles cases with mismatched list lengths', () => {
		expect(replaceTextLists('hello', ['h', 'e', 'l'], ['1', '2'])).toBe('12llo')
	})

	it('handles empty string input', () => {
		expect(replaceTextLists('', ['a'], ['b'])).toBe('')
	})
})
