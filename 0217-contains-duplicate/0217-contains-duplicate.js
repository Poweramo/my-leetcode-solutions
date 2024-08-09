/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
	const map = new Map();
	function hash(input) {
		return input * 2;
	}

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (map.has(hash(num))) {
			return true;
		}
		map.set(hash(num), num);
	}

	return false;
}