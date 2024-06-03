const subsets = (nums: number[]): number[][] => {
  const dfs = (
    nums: number[],
    startIndex: number,
    previousSubset: number[],
    allSubsets: number[][]
  ): void => {
    if (startIndex >= nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      const currentSubset = [...previousSubset];
      currentSubset.push(nums[i]);
      allSubsets.push(currentSubset);
      dfs(nums, i + 1, currentSubset, allSubsets);
    }
  };

  const allSubsets = [[]];
  dfs(nums, 0, [], allSubsets);
  const uniqueSubsets = new Set<number[]>(allSubsets);

  return [...uniqueSubsets.values()];
};
