/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
	const frequencyMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (frequencyMap.has(num)) return true;
		frequencyMap.set(num, "exist");
	}

	return false;
}