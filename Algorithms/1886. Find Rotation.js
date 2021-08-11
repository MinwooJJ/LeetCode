/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  const matLength = mat.length;
  const temp = Array.from(Array(matLength), () => Array(matLength));

  if (JSON.stringify(mat) === JSON.stringify(target)) {
    return true;
  }

  for (let c = 0; c < 3; c++) {
    for (let i = 0; i < matLength; i++) {
      for (let j = 0; j < matLength; j++) {
        temp[i][j] = mat[matLength - j - 1][i];
      }
    }

    mat = JSON.parse(JSON.stringify(temp));

    if (JSON.stringify(mat) === JSON.stringify(target)) {
      return true;
    }
  }

  return false;
};

module.exports = findRotation;
