/**
 * Adds an infinite number of values together
 * @param {...(number|string|boolean)} numbers - Numbers to add (converts booleans: true=1, false=0)
 * @return {number} The sum of all provided values
 * @throws {Error} If inputs are invalid
 */
function infiniteNumbers(...numbers){
	for (let num of numbers) {
		if (num === null ||
		num === undefined ||
		Array.isArray(num) ||
			(typeof num === 'object' && !(num instanceof Number))) {
			throw new Error('Invalid input: must provide valid numbers')
		}
	}

	const parsedNumbers = numbers.map( num => {
		if (typeof num === 'boolean') {
			num = Number(num)
		}

		const parsedNum = Number(num)

		if(!isFinite(parsedNum)) {
			throw new Error('Invalid input: numbers must be finite')
		}

		if(isNaN(parsedNum)) {
			throw new Error('Invalid input: must be valid numbers')
		}

		return parsedNum
	})

	return parsedNumbers.reduce((sum, num) => sum + num, 0)
}

export { infiniteNumbers }

