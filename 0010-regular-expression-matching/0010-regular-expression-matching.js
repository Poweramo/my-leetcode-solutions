/**
 * function isMatch

 * @param {string} string
 * @param {string} regex
 * @return {boolean}
 */

/**
 * function memoization2D

 * @param {stringIndex} number
 * @param {regexIndex} number
 * @return {boolean}
 */
function isMatch(string, regex) {

    function memoization2D(stringIndex, regexIndex) {
        if (stringIndex >= string.length && regexIndex >= regex.length) return true
        if (regexIndex >= regex.length) return false

        const charString = string[stringIndex]
        const charRegex = regex[regexIndex]
        const nextCharRegex = regex[regexIndex + 1]
        const isMatch = stringIndex < string.length && (charString === charRegex || charRegex === ".")

        if (regexIndex + 1 < regex.length && nextCharRegex === "*") {
            return (memoization2D(stringIndex, regexIndex + 2) || (isMatch && memoization2D(stringIndex + 1, regexIndex)))
        }

        if (!isMatch) return false
        return memoization2D(stringIndex + 1, regexIndex + 1)
    }

    return memoization2D(0, 0)
}





