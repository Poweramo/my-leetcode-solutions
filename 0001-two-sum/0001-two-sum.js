/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
	const numsIndexes = new Map()

	for (let i = 0; i < nums.length; i++) {
		numsIndexes.set(nums[i], i)
	}

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i]

		if (numsIndexes.has(diff)) {
			const diffIndex = numsIndexes.get(diff)
			if (i !== diffIndex) return [i, diffIndex]
		}
	}
}