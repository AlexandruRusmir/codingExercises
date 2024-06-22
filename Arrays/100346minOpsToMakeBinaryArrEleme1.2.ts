const minOperations = (nums: number[]): number => {
  let flips = 0,
    nextInverted = false;
  for (const num of nums) {
    if (num === 0 && !nextInverted) {
      flips++;
      nextInverted = true;
    }
    if (num === 1 && nextInverted) {
      flips++;
      nextInverted = false;
    }
  }
  return flips;
};
