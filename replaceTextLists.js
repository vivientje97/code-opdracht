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

	const replacementMap = new Map()
	for (let i = 0; i < maxLength; i++) {
		replacementMap.set(things[i], otherThings[i])
	}

	return text.split('').map(char => replacementMap.get(char) || char).join('')
}

export { replaceTextLists }
