/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
	const wordsTable = {};
	const result = [];

	for (let i = 0; i < strs.length; i++) {
		const word = strs[i];
		const count = Array(26).fill(0);

		for (let j = 0; j < word.length; j++) {
			count[word.charCodeAt(j) - "a".charCodeAt(0)]++;
		}

		wordsTable[count] ? wordsTable[count].push(word) : (wordsTable[count] = [word]);
	}

	for (const key in wordsTable) {
		result.push(wordsTable[key]);
	}

	return result;
}