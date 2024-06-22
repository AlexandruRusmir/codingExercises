const minimumOperations = (nums: number[]): number => {
  return nums.reduce((accumulateOperations, currentNum) => {
    if (currentNum % 3 <= 1) {
      return accumulateOperations + (currentNum % 3);
    }
    return accumulateOperations + 1;
  }, 0);
};
