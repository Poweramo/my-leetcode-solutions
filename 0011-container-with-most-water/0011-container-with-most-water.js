/**
 * @param {number[]} heights
 * @return {number}
 */
function maxArea(heights) {
    let left = 0
    let right = heights.length - 1
    let maxArea = 0

    while (left !== right && left <= Math.round(heights.length / 2)) {
        let shortest = heights[left] < heights[right] ? heights[left] : heights[right]
        let area = shortest * Math.abs(right - left)

        if (area > maxArea) maxArea = area
        heights[left] < heights[right] ? left++ : right--
    }

    return maxArea
}


