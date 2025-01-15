/**
 * Converts text to numbers based on letter position in alphabet (a=1, b=2, ..., z=26)
 * @param {string} text - The input text to convert
 * @returns {number} The number representation of the letters
 */
export function textToNum(text) {
	let result = ''
	const len = text.length
	for (let i = 0; i < len; i++) {
		result += (text.charCodeAt(i) | 32) - 96
	}
	return Number(result)
}
