const trap = (height: number[]): number => {
  const left = new Array<number>(height.length).fill(0);
  let maxFromLeft = -Infinity;
  const right = new Array<number>(height.length).fill(0);
  let maxFromRight = -Infinity;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > maxFromLeft) {
      maxFromLeft = height[i];
    }
    left[i] = Math.max(maxFromLeft, height[i]);
  }
  for (let i = height.length - 1; i >= 0; i--) {
    if (height[i] > maxFromRight) {
      maxFromRight = height[i];
    }
    right[i] = Math.max(maxFromRight, height[i]);
  }

  let trappedWater = 0;
  for (let i = 0; i < height.length; i++) {
    trappedWater += Math.min(left[i], right[i]) - height[i];
  }

  return trappedWater;
};
