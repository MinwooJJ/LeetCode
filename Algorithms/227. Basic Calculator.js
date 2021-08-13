/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [];
  let num = '';
  let op = null;

  for (let i = 0; i <= s.length; i++) {
    let char = s[i];
    let top = stack.length - 1;

    // 빈칸
    if (char === ' ') {
      continue;
    }

    // 숫자인 경우
    if (!isNaN(char)) {
      num += char;
    } else {
      num = parseInt(num);

      switch (op) {
        case '+':
        case null: {
          stack.push(num);
          break;
        }
        case '-': {
          stack.push(-num);
          break;
        }
        case '*': {
          stack[top] = stack[top] * num;
          break;
        }
        case '/': {
          stack[top] = Math.trunc(stack[top] / num);
          break;
        }
      }

      op = char;
      num = '';
    }
  }

  return stack.reduce((curr, acc) => curr + acc, 0);
};

module.exports = calculate;
