const moveZeros = require('../Algorithms/283. Move Zeros');

test('Move Zeros Test', () => {
  expect(moveZeros([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0]);
});
