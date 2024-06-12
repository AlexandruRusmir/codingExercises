const sortColors0 = (nums: number[]): void => {
  nums.sort((a, b) => a - b);
};

const sortColors1 = (nums: number[]): void => {
  const counts = [0, 0, 0];
  for (const num of nums) {
    counts[num]++;
  }

  let i = 0;
  for (let color = 0; color < counts.length; color++) {
    for (let j = 0; j < counts[color]; j++) {
      nums[i++] = color;
    }
  }
};

const sortColors = (nums: number[]): void => {
  let left = 0,
    right = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    while (i >= left && i <= right && (nums[i] === 0 || nums[i] === 2)) {
      if (nums[i] === 0) {
        [nums[left], nums[i]] = [nums[i], nums[left]];
        left++;
      }
      if (nums[i] === 2) {
        [nums[right], nums[i]] = [nums[i], nums[right]];
        right--;
      }
    }
  }
};
