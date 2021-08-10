const findPivotIndex = require('../Algorithms/724. Find Pivot Index');

test('Find Pivot Index', () => {
  expect(findPivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  expect(findPivotIndex([1, 2, 3])).toBe(-1);
  expect(findPivotIndex([2, 1, -1])).toBe(0);
});
