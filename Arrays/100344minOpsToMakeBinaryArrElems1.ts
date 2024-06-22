const minOperations0 = (nums: number[]): number => {
  let flips = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      continue;
    }
    if (i + 2 >= nums.length) {
      return -1;
    }
    flips++;
    nums[i + 1] = Math.abs(nums[i + 1] - 1);
    nums[i + 2] = Math.abs(nums[i + 2] - 1);
  }

  return flips;
};
