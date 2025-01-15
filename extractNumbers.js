/**
 * Extracts numbers from a text string
 * @param {string} text - The input text to extract numbers from
 * @returns {number[]} Array of extracted numbers
 * @throws {Error} If input is invalid
 */
function extractNumbers(text) {
	if (typeof text !== 'string') {
		throw new Error('Invalid input: Must provide a valid string')
	}

	const numbers = text.match(/\d+/g).map(n => +n)

	const result = []
	for (let i = 0; i < numbers.length; i++) {
		result.push(numbers[i])
	}

	return result
}
export { extractNumbers }
