/**
 * @param {string} str
 * @param {number} leftPointer
 * @param {number} rightPointer
 * @param {string} lastPalindrome
 * @return {string}
 */
function findPalindromes(str, leftPointer, rightPointer, lastPalindrome) {
    let lastPalindromeLength = lastPalindrome.length

    while (leftPointer >= 0 && rightPointer < str.length && str[leftPointer] === str[rightPointer]) {
        const currPalindromeLength = rightPointer - leftPointer + 1

        if (lastPalindromeLength < currPalindromeLength) lastPalindrome = str.substr(leftPointer, currPalindromeLength)

        rightPointer++
        leftPointer--
    }

    return lastPalindrome
}

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let result = ""

    for (let i = 0; i < s.length; i++) {
        result = findPalindromes(s, i, i, result)
        result = findPalindromes(s, i, i + 1, result)
    }

    return result
}


