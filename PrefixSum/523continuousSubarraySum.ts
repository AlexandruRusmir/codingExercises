const checkSubarraySum0 = (nums: number[], k: number): boolean => {
  if (nums.length < 2) {
    return false;
  }
  const cumulativeSum = new Array<number>(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    cumulativeSum[i + 1] = cumulativeSum[i] + nums[i];
  }

  for (let start = 0; start < nums.length - 1; start++) {
    for (let end = start + 1; end < nums.length; end++) {
      const subarraySum = cumulativeSum[end + 1] - cumulativeSum[start];

      if (subarraySum == 0 && k == 0) {
        // Handling special case where k is 0
        return true;
      }
      if (k != 0 && subarraySum % k == 0) {
        return true;
      }
    }
  }

  return false;
};
