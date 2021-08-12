/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeros = function (nums) {
  let prev = 0;
  let temp = 0;

  // T: O(n)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[prev];
      nums[prev] = nums[i];
      nums[i] = temp;

      prev++;
    }
  }

  return nums;
};

module.exports = moveZeros;
