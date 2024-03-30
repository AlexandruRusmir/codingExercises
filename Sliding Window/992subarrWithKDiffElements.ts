const subarraysWithKDistinct = (nums: number[], k: number): number => {
  const subarrayWithAtMostK = (nums: number[], k: number): number => {
    const numberAppearances = new Map<number, number>();
    let left = 0,
      right = 0,
      result = 0;
    while (right < nums.length) {
      numberAppearances.set(
        nums[right],
        (numberAppearances.get(nums[right]) ?? 0) + 1
      );
      while (numberAppearances.size > k) {
        numberAppearances.set(
          nums[left],
          (numberAppearances.get(nums[left]) ?? 0) - 1
        );
        if ((numberAppearances.get(nums[left]) ?? 0) <= 0) {
          numberAppearances.delete(nums[left]);
        }
        left++;
      }

      result += right - left + 1;
      right++;
    }
    return result;
  };

  return subarrayWithAtMostK(nums, k) - subarrayWithAtMostK(nums, k - 1);
};

console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3));
