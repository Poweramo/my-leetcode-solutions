/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    const numsIndexes = new Map()

    for (let i = 0; i < numbers.length; i++) {
        numsIndexes.set(numbers[i], i)
    }

    for (let i = 0; i < numbers.length; i++) {
        const diff = target - numbers[i]

        if (numsIndexes.has(diff)) {
            const diffIndex = numsIndexes.get(diff)
            if (i !== diffIndex) return [i + 1, diffIndex + 1]
        }
    }
}