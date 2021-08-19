const twoSum = require('../Algorithms/1. Two Sum');

test('Two Sum', () => {
  expect(isValid([2, 7, 11, 15])).toStrictEqual([0, 1]);
  expect(isValid([3, 2, 4])).toStrictEqual([1, 2]);
  expect(isValid([3, 3])).toBe([0, 1]);
});
