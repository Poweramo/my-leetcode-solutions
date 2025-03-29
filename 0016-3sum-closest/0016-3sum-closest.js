/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let closestSum;
    let diff;
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        const chosenNum = nums[i]
        if (i > 0 && chosenNum === nums[i - 1]) continue

        let rightPointer = nums.length - 1
        let leftPointer = i + 1
        while (leftPointer < rightPointer) {
            const rightNum = nums[rightPointer]
            const leftNum = nums[leftPointer]
            const sum = rightNum + leftNum + chosenNum

            if (sum < target) {
                leftPointer++
            } else if (sum > target) {
                rightPointer--
            } else {
                return target
            }

            let tempDiff = Math.abs(target - sum)
            if (!diff) diff = tempDiff
            if (!closestSum) closestSum = sum
            if (tempDiff < diff) {
                diff = tempDiff
                closestSum = sum
            }

            while (nums[rightPointer] === nums[rightPointer + 1] && leftPointer < rightPointer) rightPointer--;
        }
    }

    return closestSum
};