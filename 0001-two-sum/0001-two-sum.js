/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (nums[j] + nums[i] === target && i !== j) {
				return [i, j];
			}
		}
	}
};