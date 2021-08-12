const isValid = require('../Algorithms/20. Valid Parentheses');

test('Valid Parentheses', () => {
  expect(isValid('()')).toBe(true);
  expect(isValid('()[]{}')).toBe(true);
  expect(isValid('(]')).toBe(false);
  expect(isValid('([)]')).toBe(false);
  expect(isValid('{[]}')).toBe(true);
});
