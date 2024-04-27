const numberOfRightTriangles = (grid: number[][]): number => {
  const n = grid.length,
    m = grid[0].length;
  const numberOfOnesPerRow = new Array(n).fill(0);
  const numberOfOnesPerColumn = new Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        numberOfOnesPerRow[i]++;
        numberOfOnesPerColumn[j]++;
      }
    }
  }

  let totalNumberOfRightTriangles = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        totalNumberOfRightTriangles +=
          (numberOfOnesPerColumn[j] - 1) * (numberOfOnesPerRow[i] - 1);
      }
    }
  }

  return totalNumberOfRightTriangles;
};
