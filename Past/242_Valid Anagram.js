/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // T: O(n)
  if (s.length !== t.length) return false;

  const map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map[t[i]]) map[t[i]]--;
    else return false;
  }

  return true;
};
