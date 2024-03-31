const countSubarrays = (nums: number[], minK: number, maxK: number): number => {
  let result = 0,
    currentMinPos = -1,
    currentMaxPos = -1;

  for (let right = 0, left = 0; right < nums.length; right++) {
    if (nums[right] < minK || nums[right] > maxK) {
      left = right + 1;
      continue;
    }
    if (nums[right] === maxK) {
      currentMaxPos = right;
    }
    if (nums[right] === minK) {
      currentMinPos = right;
    }
    result += Math.max(Math.min(currentMaxPos, currentMinPos) - left + 1, 0);
  }

  return result;
};
