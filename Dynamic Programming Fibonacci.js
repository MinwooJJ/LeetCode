// Original fib, T: O(n^2)
const fib_naive = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    const fib = fib_naive(n - 1) + fib_naive(n - 2);
    return fib;
  }
};

// Dynamic programming recursive fib, T: O(n)
// Top-Down, The problem is maximum call stack could happen
const fib_array = [0, 1];

const fib_recur_dp = (n) => {
  if (n < fib_array.length) {
    return fib_array[n];
  } else {
    const fib = fib_recur_dp(n - 1) + fib_recur_dp(n - 2);
    fib_array.push(fib);
    return fib;
  }
};

// Bottom-Up, T: O(n)
const fib_dp = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  fib_array = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    let num = fib_array[i - 1] + fib_array[i - 2];
    fib_array.push(num);
  }

  return fib_array[n];
};
