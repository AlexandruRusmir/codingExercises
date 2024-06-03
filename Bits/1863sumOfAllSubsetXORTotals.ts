const subsetXORSum = (nums: number[]): number => {
  const dfs = (
    nums: number[],
    startIndex: number,
    previousSum: number
  ): void => {
    if (startIndex >= nums.length) {
      return;
    }

    for (let i = startIndex; i < nums.length; i++) {
      const currentSum = previousSum ^ nums[i];
      totalSum += currentSum;
      dfs(nums, i + 1, currentSum);
    }
  };

  let totalSum = 0;
  dfs(nums, 0, 0);

  return totalSum;
};

/**
You get all subsets, because from each index, you start skipping between 0 and nums.length positions.
Example: [2, 6, 3, 4, 5, 8]
If we are at index 1, we have element 2:
    we make the subset that starts with 2, 6
    we make the subset that starts with 2, 3
    we make the subset that starts with 2, 4
    ... so we skip what's between as well, easily getting all subsets
        when are are at 2, 3
            we go to 2, 3, 4
            but also to 2, 3, 5
 */
