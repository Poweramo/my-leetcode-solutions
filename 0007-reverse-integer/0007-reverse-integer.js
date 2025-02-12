/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    numStr = x < 0 ? String(x * -1) : String(x);
    reverseNumStr = ""

    for (let i = numStr.length - 1; i >= 0; i--) {
        reverseNumStr += numStr[i]
    }

    let reverseNum = Number(reverseNumStr)
    if (x < 0) reverseNum *= -1
    if (reverseNum < -(2 ** 31) || reverseNum > 2 ** 31 - 1) return 0
    return reverseNum

}
