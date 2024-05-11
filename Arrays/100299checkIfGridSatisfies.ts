const satisfiesConditions = (grid: number[][]): boolean => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i < grid.length - 1 && grid[i][j] !== grid[i + 1][j]) {
        return false;
      }
      if (j < grid[0].length - 1 && grid[i][j] === grid[i][j + 1]) {
        return false;
      }
    }
  }

  return true;
};
