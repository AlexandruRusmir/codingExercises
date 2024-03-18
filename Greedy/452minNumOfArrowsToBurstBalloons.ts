const findMinArrowShots = (points: number[][]): number => {
  points.sort((a, b) => a[1] - b[1]);

  let currentArrowPosition = points[0][1];
  let arrowCount = 0;
  for (const point of points) {
    if (point[0] > currentArrowPosition) {
      currentArrowPosition = point[1];
      arrowCount++;
    }
  }

  return arrowCount;
};
