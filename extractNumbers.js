/**
 * Extracts numbers from a text string
 * @param {string} text - The input text to extract numbers from
 * @returns {number[]} Array of extracted numbers
 * @throws {Error} If input is invalid
 */
function extractNumbers(text) {
	if (text === null ||
		text === undefined ||
		typeof text !== 'string') {
		throw new Error('Invalid input: Must provide a valid string')
	}

	const numbers = text.match(/\d+/g)

	if (!numbers) {
		return []
	}

	const result = new Array(numbers.length)
	for (let i = 0; i < numbers.length; i++) {
		const num = +numbers[i]
		if (!isFinite(num)) {
			throw new Error('Invalid input: Numbers must be finite')
		}
		result[i] = num
	}

	return result
}

export { extractNumbers }
