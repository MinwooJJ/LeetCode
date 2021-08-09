/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// T: O(n)
var wordPattern = function (pattern, s) {
  s = s.split(' ');

  if (pattern.length !== s.length) return false;

  const pat = new Map();
  const str = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (!pat.has(pattern[i])) pat.set(pattern[i], s[i]);
    else if (pat.get(pattern[i]) !== s[i]) return false;

    if (!str.has(s[i])) str.set(s[i], pattern[i]);
    else if (str.get(s[i]) !== pattern[i]) return false;
  }

  return true;
};
