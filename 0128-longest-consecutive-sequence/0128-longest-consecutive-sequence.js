/**
 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
	const numsHash = new Map();
	const sortedNums = nums.sort((a, b) => a - b);
	const lengths = [];
	let smallest = sortedNums[0];
	let counter = 1;

	for (let i = 0; i < nums.length; i++) {
		numsHash.has(nums[i])
			? numsHash.set(nums[i], numsHash.get(nums[i]) + 1)
			: numsHash.set(nums[i], 1);
	}

	for (let i = 0; i < sortedNums.length; i++) {
		if (numsHash.has(smallest + counter)) {
			counter++;
		} else {
			smallest = sortedNums[i];
			counter = 1;
		}
		lengths.push(counter);
	}

	return lengths.length !== 0 ? lengths.sort((a, b) => b - a)[0] : 0;
}
