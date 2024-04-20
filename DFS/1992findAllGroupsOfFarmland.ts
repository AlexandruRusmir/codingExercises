const findFarmland = (land: number[][]): number[][] => {
  const dfs = (i: number, j: number, land: number[][]): number[] => {
    const coordinates = [i, j];
    let maxX = i,
      maxY = j;
    const stack = [[i, j]];
    while (stack.length) {
      const [x, y] = stack.pop() ?? [-1, -1];
      if (x < 0 || x >= land.length) {
        continue;
      }
      if (y < 0 || y >= land[0].length) {
        continue;
      }
      if (land[x][y] === 0) {
        continue;
      }

      maxX = Math.max(x, maxX);
      maxY = Math.max(y, maxY);
      land[x][y] = 0;

      stack.push([x + 1, y]);
      stack.push([x - 1, y]);
      stack.push([x, y + 1]);
      stack.push([x, y - 1]);
    }

    coordinates.push(maxX);
    coordinates.push(maxY);

    return coordinates;
  };

  const farmGroupsCoordinates: number[][] = [];
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      if (land[i][j] === 0) {
        continue;
      }
      farmGroupsCoordinates.push(dfs(i, j, land));
    }
  }

  return farmGroupsCoordinates;
};
