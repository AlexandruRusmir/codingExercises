const canMakeSquare = (grid: string[][]): boolean => {
  const n = grid.length,
    m = grid[0].length;
  const neighboursAndSelfColorDistribution = new Array(n - 1);
  for (let i = 0; i < n - 1; i++) {
    neighboursAndSelfColorDistribution[i] = new Array(m - 1)
      .fill(-1)
      .map((_) => {
        return {
          whiteSquares: 0,
          blackSquares: 0,
        };
      });
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      grid[i][j] === "W"
        ? neighboursAndSelfColorDistribution[i][j].whiteSquares++
        : neighboursAndSelfColorDistribution[i][j].blackSquares++;
      grid[i + 1][j] === "W"
        ? neighboursAndSelfColorDistribution[i][j].whiteSquares++
        : neighboursAndSelfColorDistribution[i][j].blackSquares++;
      grid[i + 1][j + 1] === "W"
        ? neighboursAndSelfColorDistribution[i][j].whiteSquares++
        : neighboursAndSelfColorDistribution[i][j].blackSquares++;
      grid[i][j + 1] === "W"
        ? neighboursAndSelfColorDistribution[i][j].whiteSquares++
        : neighboursAndSelfColorDistribution[i][j].blackSquares++;
      if (
        neighboursAndSelfColorDistribution[i][j].whiteSquares >= 3 ||
        neighboursAndSelfColorDistribution[i][j].blackSquares >= 3
      ) {
        return true;
      }
    }
  }
  // if [i][j] == 1, (numOf1PerCol - 1) * (numOf1PerRow - 1)
  return false;
};
