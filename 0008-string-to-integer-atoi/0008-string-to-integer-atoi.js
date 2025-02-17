/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
    const usedCharsSet = new Set()
    let num = ""
    let sign = 1
    let min = -(2 ** 31)
    let max = (2 ** 31) - 1

    for (let i = 0; i < s.length; i++) {
        const character = s[i]

        if (character === " ") {
            if (usedCharsSet.has(" ")) break
            continue
        }
        usedCharsSet.add(" ")

        if (character === "+" || character === "-") {
            if (usedCharsSet.has(s[i])) break
            usedCharsSet.add("+")
            usedCharsSet.add("-")
            if (character === "-") sign *= -1
            continue
        }

        usedCharsSet.add("+")
        usedCharsSet.add("-")
        if (isNaN(character)) break
        num += character
    }

    num = Number(num)
    num *= sign

    if (num < min) return min
    if (num > max) return max
    return num
}


