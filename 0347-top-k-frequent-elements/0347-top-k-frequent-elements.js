/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function topKFrequent(nums, k) {
	const result = [];
	let numsCount = new Map();
	let counter = 0;

	for (let i = 0; i < nums.length; i++) {
		numsCount.has(nums[i])
			? numsCount.set(nums[i], numsCount.get(nums[i]) + 1)
			: numsCount.set(nums[i], 1);
	}

	numsCount = new Map([...numsCount.entries()].sort((a, b) => b[1] - a[1]));

	for (let [key] of numsCount) {
		if (counter === k) {
			break;
		}

		result.push(key);
		counter++;
	}

	return result;
}