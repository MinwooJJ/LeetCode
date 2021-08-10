/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;

  // T: O(n)
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];

    if (leftSum === sum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};

module.exports = pivotIndex;
