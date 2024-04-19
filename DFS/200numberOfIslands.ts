const numIslands = (grid: string[][]): number => {
  const dfs = (i: number, j: number, grid: string[][]): void => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return;
    }
    if (grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";
    dfs(i - 1, j, grid);
    dfs(i + 1, j, grid);
    dfs(i, j - 1, grid);
    dfs(i, j + 1, grid);
  };

  let numberOfIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "0") {
        continue;
      }
      numberOfIslands++;
      dfs(i, j, grid);
    }
  }

  return numberOfIslands;
};
