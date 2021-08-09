const searchInsert = require('../Algorithms/35. Search Insert');

test('Search Insert Position 1', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test('Search Insert Position 2', () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test('Search Insert Position 3', () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test('Search Insert Position 4', () => {
  expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
});

test('Search Insert Position 5', () => {
  expect(searchInsert([1], 0)).toBe(0);
});
