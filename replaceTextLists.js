/**
 * Replaces characters in a text string based on mapping between two arrays
 * @param {string} text - The input text string to modify
 * @param {string[]} things - Array of characters to be replaced
 * @param {string[]} otherThings - Array of replacement characters
 * @returns {string} Modified text with characters replaced according to the mapping
 */
function replaceTextLists(text, things = [], otherThings = []) {
	const maxLength = Math.min(things.length, otherThings.length)

	if (maxLength === 0) return text

	let currentIndex = 0
	return text.split('').map(char => {
		const thingIndex = things.indexOf(char)
		if (thingIndex === -1) return char

		const replacement = otherThings[currentIndex % maxLength]
		currentIndex++
		return replacement
	}).join('')


	//Benchmark assignment
	// if (!things.length) return text
	//
	// const lookup = {}
	// things.forEach((char, i) => {
	// 	lookup[char] = otherThings[i]
	// })
	//
	// return text.replace(/./g, char => lookup[char] || char)
}

export { replaceTextLists }

