/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        let tempStr = ""
        let j = i
        while (!tempStr.includes(s[j]) && j < s.length) {
            tempStr += s[j]
            if (tempStr.length > maxLength) maxLength = tempStr.length
            j++
        }
    }

    return maxLength
}
