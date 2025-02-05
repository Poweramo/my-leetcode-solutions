/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    const length = nums1.length + nums2.length

    for (let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i])
    }
    nums1 = nums1.sort((a, b) => a - b)

    while (nums1.length > 2) {
        nums1.shift()
        nums1.pop()
    }

    if (nums1.length === 1) return nums1[0]
    return (nums1[0] + nums1[1]) / 2
}

