/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;

  if (left > right) {
    return -1;
  }

  let pivot = 0;

  // T: O(log(n))
  while (left < right) {
    pivot = Math.floor((right + left) / 2);

    if (target === nums[pivot]) {
      return pivot;
    } else if (target > nums[pivot]) {
      left = pivot + 1;
    } else {
      right = pivot;
    }
  }

  return target > nums[pivot] ? pivot + 1 : pivot;
};

module.exports = searchInsert;
