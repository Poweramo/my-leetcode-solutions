/**
 * @param {number[]} nums
 * @return {number[]}
 */

function productExceptSelf(nums) {
	const answer = [];
	let preAndPost = 1;

	for (let i = 0; i < nums.length; i++) {
		answer.push(preAndPost);
		preAndPost *= nums[i];
	}

	preAndPost = 1;

	for (let i = nums.length - 1; i >= 0; i--) {
		answer[i] *= preAndPost;
		preAndPost *= nums[i];
	}

	return answer;
}
