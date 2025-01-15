/**
 * Performs stack counting on a string of numbers until a single digit remains
 * @param {string} numbers - The input string of numbers to stack count
 * @returns {number} The final single digit result
 * @throws {Error} If input is invalid
 */
function stackCount(numbers) {
	if (typeof numbers !== 'string') {
		throw new Error('Invalid input: Must provide a valid string')
	}

	if (!numbers.match(/^\d+$/)) {
		throw new Error('Invalid input: String must contain only numbers')
	}

	let currentNumbers = numbers

	while (currentNumbers.length > 1) {
		let sum = 0
		for (let digit of currentNumbers) {
			sum += parseInt(digit)
		}
		currentNumbers = sum.toString()
	}

	return parseInt(currentNumbers)
}

export { stackCount }
