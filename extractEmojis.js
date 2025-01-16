/**
 * Extracts all emoji characters from a given text string
 * @param {string} text - The input text to extract emojis from
 * @returns {string[]} An array of extracted emoji characters, or empty array if none found
 */
function extractEmojis(text) {
	const emojiRegex = /\p{Emoji}/gu;
	return text.match(emojiRegex) || [];
}

export { extractEmojis };
