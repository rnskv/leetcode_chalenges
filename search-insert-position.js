/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let start = 0;
    let end = nums.length - 1;
    let potentialPosition = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] > target) {
            end = mid - 1;
        }

        if (nums[mid] < target) {
            start = mid + 1;
        }
    }

    let i = 0;

    while (true) {
        if (nums[i] < target) {
            i++
        } else {
            return i;
        }
    }

    return i;
};