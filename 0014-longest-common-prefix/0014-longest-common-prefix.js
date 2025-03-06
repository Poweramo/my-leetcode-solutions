/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let commonPrefix = ""
    if (strs.length === 1) return strs[0]
    let i = 0
    let j = 0

    while (strs[j][i] && strs[j+1][i]) {
        while (j < strs.length - 1) {
            const str = strs[j]
            const nextStr = strs[j + 1]
            
            if (str[i] !== nextStr[i]) return commonPrefix
            j++
        }

        commonPrefix += strs[0][i]
        i++
        j = 0
    }

    return commonPrefix
}