/**
 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
	const numsHash = new Map();
	let longest = 0;
	let counter = 1;

	for (let i = 0; i < nums.length; i++) {
		numsHash.has(nums[i])
			? numsHash.set(nums[i], numsHash.get(nums[i]) + 1)
			: numsHash.set(nums[i], 1);
	}

	for (let i = 0; i < nums.length; i++) {
		if (!numsHash.has(nums[i] - 1)) {
			while (numsHash.has(nums[i] + counter)) {
				counter++;
			}
		}

		if (longest < counter) longest = counter;
		counter = 1;
	}

	return longest;
}
