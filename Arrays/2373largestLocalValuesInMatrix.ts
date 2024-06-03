const largestLocal = (grid: number[][]): number[][] => {
  const largestLocalValues = new Array<Array<number>>(grid.length - 2)
    .fill([])
    .map((_) => new Array<number>(grid.length - 2));

  for (let i = 0; i < largestLocalValues.length; i++) {
    for (let j = 0; j < largestLocalValues.length; j++) {
      largestLocalValues[i][j] = Math.max(
        grid[i][j],
        grid[i][j + 1],
        grid[i][j + 2],
        grid[i + 1][j],
        grid[i + 1][j + 1],
        grid[i + 1][j + 2],
        grid[i + 2][j],
        grid[i + 2][j + 1],
        grid[i + 2][j + 2]
      );
    }
  }

  return largestLocalValues;
};
