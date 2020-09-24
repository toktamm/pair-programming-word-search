const transpose = function(matrix) {
  const newArr = [];
  for (let row = 0; row < matrix[0].length; row++) {
    const newRow = [];
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[col][row] === undefined) {
        newRow.push(' ');
      } else {
        newRow.push(matrix[col][row]);
      }
    }
    newArr.push(newRow);
  }
  return newArr;
};

const reverse = function(arr) {
  arr.reverse();
  arr.map(val => val.reverse());
};

const wordSearch = (letters, word) => {
  let horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let lettersTransposed = transpose(letters);
  horizontalJoin = lettersTransposed.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  reverse(letters);
  horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  reverse(lettersTransposed);
  horizontalJoin = lettersTransposed.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
