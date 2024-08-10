/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
	const numsMap = {};

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const diff = target - num;
		if (diff in numsMap) return [i, numsMap[diff]];
		numsMap[num] = i;
	}
}