/**
 * @param {number} occurence
 * @param {number} divisor
 * @return {string}
 */
function createSubRomanStr(occurence, divisor) {
    const symbolsMap = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    }
    const symbol = symbolsMap[divisor]
    let subRomanStr = ""
    let counter = 0

    while (counter !== occurence) {
        subRomanStr += symbol
        counter++
    }

    return subRomanStr
}


/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
    let romanStr = ""
    let divisors = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    let index = 0
    while (num !== 0) {
        let divisor = divisors[index]
        let quotient = Math.floor(num / divisor)

        romanStr += createSubRomanStr(quotient, divisor)
        num -= quotient * divisor
        index++
    }

    return romanStr
}