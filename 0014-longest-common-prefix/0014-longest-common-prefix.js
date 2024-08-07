/**
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
    let lCP = "";
	const sortedStrs = strs.sort((a, b) => a.length - b.length);
	const shortestWord = sortedStrs[0];

	for (let i = 0; i < shortestWord.length; i++) {
		const isMatchAll = strs.every((word) => word[i] === shortestWord[i]);

		if (!isMatchAll) break;
		lCP += shortestWord[i];
	}

	return lCP;
};