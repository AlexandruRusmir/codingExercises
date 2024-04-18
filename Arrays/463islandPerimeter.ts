const islandPerimeter = (grid: number[][]): number => {
  const getNumberOfCellsThatAreNotNeighbours = (
    i: number,
    j: number,
    grid: number[][]
  ): number => {
    let numberOfCells = 0;
    if (i === 0 || grid[i - 1][j] === 0) {
      numberOfCells++;
    }
    if (i === grid.length - 1 || grid[i + 1][j] === 0) {
      numberOfCells++;
    }
    if (j === 0 || grid[i][j - 1] === 0) {
      numberOfCells++;
    }
    if (j === grid[0].length - 1 || grid[i][j + 1] === 0) {
      numberOfCells++;
    }

    return numberOfCells;
  };

  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        continue;
      }
      perimeter += getNumberOfCellsThatAreNotNeighbours(i, j, grid);
    }
  }

  return perimeter;
};
