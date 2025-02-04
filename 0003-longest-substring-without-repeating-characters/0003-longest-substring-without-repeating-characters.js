/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let maxLength = 0
    let slidingWindow = []
    let charsSet = new Set()

    for (let i = 0; i < s.length; i++) {
        slidingWindow.push(s[i])

        if (charsSet.has(s[i])) {
            while (slidingWindow[0] !== s[i]) {
                charsSet.delete(slidingWindow.shift())
            }

            charsSet.delete(slidingWindow.shift())
        }

        if (maxLength < slidingWindow.length) maxLength = slidingWindow.length
        charsSet.add(s[i])
    }

    return maxLength
}


