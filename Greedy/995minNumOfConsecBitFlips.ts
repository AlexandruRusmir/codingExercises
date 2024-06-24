const minKBitFlips0 = (nums: number[], k: number): number => {
  let flips = 0;

  for (let i = 0; i <= nums.length - k; i++) {
    if (nums[i] === 0) {
      flips++;
      for (let j = i + 1; j <= i + k - 1; j++) {
        nums[j] = nums[j] === 0 ? 1 : 0;
      }
    }
  }

  for (let i = nums.length - k + 1; i < nums.length; i++) {
    if (nums[i] === 0) {
      return -1;
    }
  }

  return flips;
};

const minKBitFlips = (nums: number[], k: number): number => {
  let totalFlips = 0,
    activeFlips = 0;

  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] + activeFlips) % 2 === 0) {
      if (i > nums.length - k) {
        return -1;
      } else {
        totalFlips++;
        activeFlips++;
        nums[i] = 2;
      }
    }
    if (i >= k - 1 && nums[i - k + 1] === 2) {
      activeFlips--;
    }
  }

  return totalFlips;
};
