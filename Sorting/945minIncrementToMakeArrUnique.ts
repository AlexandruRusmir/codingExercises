const minIncrementForUnique = (nums: number[]): number => {
  let minIncrements = 0;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      minIncrements += nums[i - 1] - nums[i] + 1;
      nums[i] = nums[i - 1] + 1;
    }
  }

  return minIncrements;
};
