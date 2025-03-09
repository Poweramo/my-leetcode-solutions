/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    let rightPointer = numbers.length - 1
    let leftPointer = 0

    while (leftPointer < rightPointer) {
        const sum = numbers[rightPointer] + numbers[leftPointer]

        if (sum === target) return [leftPointer + 1, rightPointer + 1]
        sum > target ? rightPointer-- : leftPointer++
    }
}