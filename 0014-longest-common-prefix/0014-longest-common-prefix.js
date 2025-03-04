/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
	let commonPrefix = ""
	strs = strs.sort((a,b) => b.length - a.length)

	let i = 0
	while (i < strs[0].length) {
		for (let j = 0; j < strs.length - 1; j++) {
			const str = strs[j]
			const nextStr = strs[j+1]
			if (str[i] !== nextStr[i]) return commonPrefix
		}

		commonPrefix += strs[0][i]
		i++
	}

	return commonPrefix    
}
