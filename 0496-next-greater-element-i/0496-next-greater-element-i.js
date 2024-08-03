/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function nextGreaterElement(nums1, nums2) {
    let ans = [];

	for (let i = 0; i < nums1.length; i++) {
		for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
			if (nums2[j] > nums1[i]) {
				ans.push(nums2[j]);
				break;
			}
		}

		if (!ans[i]) ans.push(-1);
	}

	return ans;
};