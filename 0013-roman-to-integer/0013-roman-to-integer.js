/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
	let resNum = 0
	const symbolsValues = {
		"I": 1,
		"IV": 4,
		"V": 5,
		"IX": 9,
		"X": 10,
		"XL": 40,
		"L": 50,
		"XC": 90,
		"C": 100,
		"CD": 400,
		"D": 500,
		"CM": 900,
		"M": 1000
	}

	let index = 0
	while (index < s.length) {
		let initialChar = s[index]
		const char2 = s[index + 1]

		if (symbolsValues[initialChar + char2]) initialChar += char2
		resNum += symbolsValues[initialChar]

		if (initialChar.length !== 1) index++
		index++
	}

	return resNum
}
