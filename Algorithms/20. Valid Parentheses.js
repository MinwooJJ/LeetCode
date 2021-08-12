/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracket = [];

  for (let char of s) {
    switch (char) {
      case '(': {
        bracket.push(char);
        break;
      }
      case '[': {
        bracket.push(char);
        break;
      }
      case '{': {
        bracket.push(char);
        break;
      }
      case ')': {
        if (bracket.pop() !== '(') {
          return false;
        }
        break;
      }
      case ']': {
        if (bracket.pop() !== '[') {
          return false;
        }
        break;
      }
      case '}': {
        if (bracket.pop() !== '{') {
          return false;
        }
        break;
      }
    }
  }

  if (bracket.length !== 0) return false;
  return true;
};

module.exports = isValid;
