const minFallingPathSum = (grid: number[][]): number => {
  const n = grid.length,
    m = grid[0].length;

  const dp: number[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(-1);
  }
  for (let j = 0; j < m; j++) {
    dp[0][j] = grid[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let minSumForCurrentPosition = Infinity;

      for (let k = 0; k < m; k++) {
        if (k === j) {
          continue;
        }
        minSumForCurrentPosition = Math.min(
          minSumForCurrentPosition,
          grid[i][j] + dp[i - 1][k]
        );
      }

      dp[i][j] = minSumForCurrentPosition;
    }
  }

  return Math.min(...dp[n - 1]);
};
