const findRotation = require('../Algorithms/1886. Find Rotation');

test('Find Rotation', () => {
  expect(
    findRotation(
      [
        [0, 1],
        [1, 0],
      ],
      [
        [1, 0],
        [0, 1],
      ]
    )
  ).toBe(true);
  expect(
    findRotation(
      [
        [0, 1],
        [1, 1],
      ],
      [
        [1, 0],
        [0, 1],
      ]
    )
  ).toBe(false);
  expect(
    findRotation(
      [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ],
      [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
      ]
    )
  ).toBe(true);
});
