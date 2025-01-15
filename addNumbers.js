/**
 * Adds two numbers together and returns their sum
 * @param {number|string|boolean} num1 - First value to add (converts booleans: true=1, false=0)
 * @param {number|string|boolean} num2 - The second value to add (converts booleans: true=1, false=0)
 * @returns {number} The sum of the two values
 * @throws {Error} If inputs are null, undefined, non-finite, or cannot be converted to numbers
 */
function addNumbers(num1, num2) {
	if (num1 === null || num2 === null ||
		num1 === undefined || num2 === undefined ||
		Array.isArray(num1) || Array.isArray(num2) ||
		(typeof num1 === 'object' && !(num1 instanceof Number)) ||
		(typeof num2 === 'object' && !(num2 instanceof Number))) {
		throw new Error('Invalid input: Must provide valid numbers');
	}
	
	if (num1 instanceof Number) num1 = num1.valueOf();
	if (num2 instanceof Number) num2 = num2.valueOf();

	if (typeof num1 === 'boolean') num1 = Number(num1);
	if (typeof num2 === 'boolean') num2 = Number(num2);
	
	const parsedNum1 = Number(num1);
	const parsedNum2 = Number(num2);
	
	if (!isFinite(parsedNum1) || !isFinite(parsedNum2)) {
		throw new Error('Invalid input: Numbers must be finite');
	}

	if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
		throw new Error('Invalid input: Must be valid numbers');
	}

	return parsedNum1 + parsedNum2;
}

export { addNumbers };
