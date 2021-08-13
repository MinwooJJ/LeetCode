const calculator = require('../Algorithms/227. Basic Calculator');

test('Basic Calculator', () => {
  expect(calculator('3+2*2')).toBe(7);
  expect(calculator('3/2')).toBe(1);
  expect(calculator('3+5/2')).toBe(5);
  expect(calculator(' 3/2 ')).toBe(1);
  expect(calculator('42')).toBe(42);
  expect(calculator('14-3/2')).toBe(13);
});
