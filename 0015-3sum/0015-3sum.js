/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const triplets = []
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        const chosenNum = nums[i]
        if (chosenNum > 0) break
        if (i > 0 && chosenNum === nums[i - 1]) continue

        let rightPointer = nums.length - 1
        let leftPointer = i + 1
        while (leftPointer < rightPointer) {
            const rightNum = nums[rightPointer]
            const leftNum = nums[leftPointer]
            const sum = rightNum + leftNum + chosenNum

            if (sum < 0) {
                leftPointer++
            } else if (sum > 0) {
                rightPointer-- 
            } else {
                const triplet = [rightNum, leftNum, chosenNum]
                triplets.push(triplet)
                rightPointer--
            }

            while (nums[rightPointer] === nums[rightPointer + 1] && leftPointer < rightPointer) rightPointer--;
        }
    }

    return triplets
}