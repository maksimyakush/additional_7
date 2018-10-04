module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (!matrix[row][col]) {
        let arr = [];
        let thirdPartCol = Math.floor(col / 3) * 3;
        let thirdPartRow = Math.floor(row / 3) * 3;
        Array.from({ length: 9 }).forEach((item, i) => {
          arr = [
            ...arr,
            [
              matrix[thirdPartRow + (i % 3)][thirdPartCol + Math.floor(i / 3)],
              matrix[row][i],
              matrix[i][col],
            ]
          ];
        });
        arr.forEach(item => {
          matrix[row][col] = item;
          solveSudoku(matrix);
        });
      }
    }
  }
  return matrix;
};
