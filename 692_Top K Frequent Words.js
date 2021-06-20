/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

// T: O(log(n)), S: O(n)
var topKFrequent = function (words, k) {
  let hash = {};

  for (let word of words) {
    hash[word] = hash[word] + 1 || 1;
  }

  let result = Object.keys(hash).sort((a, b) => {
    let cntComp = hash[b] - hash[a];

    if (cntComp == 0) {
      return a.localeCompare(b);
    } else {
      return cntComp;
    }
  });

  return result.slice(0, k);
};
