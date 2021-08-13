/**
 * @param {number[]} nums
 * @return {number}
 */
var peakSearch = function (nums, left, right) {
  let pivot = Math.floor((left + right) / 2);

  if (left >= right) {
    return pivot;
  }

  if (nums[pivot] < nums[pivot + 1]) {
    left = pivot + 1;
  } else {
    right = pivot;
  }

  return peakSearch(nums, left, right);
};

var findPeakElement = function (nums) {
  // T: O(log(n))
  return peakSearch(nums, 0, nums.length - 1);
};

module.exports = findPeakElement;
