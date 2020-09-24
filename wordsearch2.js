const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  // console.log(horizontalJoin);

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  }

  return false;
};

const transpose = function (matrix) {
  const results = [];
  for (var i = 0; i < matrix.length; i++) {
    const temp = [];
    for (var j = 0; j < matrix[0].length; j++) {
      // console.log("i is: ", i, "j is: ", j, "what we're pushing is: ", matrix[j][i]);
      temp.push(matrix[j][i]);
    }
    results.push(temp);
  }
  return results;
};

module.exports = wordSearch;
