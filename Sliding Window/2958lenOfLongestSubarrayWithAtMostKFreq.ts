const maxSubarrayLength = (nums: number[], k: number): number => {
  let maxGoodLength = 0,
    left = 0,
    right = 0;
  const numberAppearances = new Map<number, number>();
  while (right < nums.length) {
    const currentNum = nums[right++];
    numberAppearances.set(
      currentNum,
      (numberAppearances.get(currentNum) ?? 0) + 1
    );
    while (left < right && (numberAppearances.get(currentNum) ?? 0) > k) {
      numberAppearances.set(
        nums[left],
        (numberAppearances.get(nums[left++]) ?? 0) - 1
      );
    }
    maxGoodLength = Math.max(maxGoodLength, right - left);
  }

  return maxGoodLength;
};
