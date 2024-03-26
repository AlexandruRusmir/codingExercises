const firstMissingPositive = (nums: number[]): number => {
  const numberAppeared = new Map<number, boolean>();
  for (const num of nums) {
    if (num > 0) {
      numberAppeared.set(num, true);
    }
  }
  let i = 1;
  while (true) {
    if (!numberAppeared.has(i)) {
      return i;
    }
    i++;
  }
};

//Space Optimised, weird
const spaceOptimisedFirstMissingPositive = (nums: number[]): number => {
  const swap = (arr: number[], i: number, j: number) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  const n = nums.length;

  // Place each positive integer i at index i-1 if possible
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
};
