const bruteForceWithMemoizationNumSubarrayProductLessThanK = (
  nums: number[],
  k: number
): number => {
  let numberOfSubarrays = 0;
  const memo = new Map<string, number>();
  const getProdForInterval = (startIndex: number, endIndex: number): number => {
    if (memo.has(startIndex + "-" + endIndex)) {
      return memo.get(startIndex + "-" + endIndex) ?? 1;
    }
    let prod: number;
    if (endIndex === startIndex) {
      prod = nums[endIndex];
    } else if (endIndex < startIndex) {
      prod = 1;
    } else {
      prod = getProdForInterval(startIndex, endIndex - 1) * nums[endIndex];
    }

    memo.set(startIndex + "-" + endIndex, prod);
    return prod;
  };
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (getProdForInterval(i, j) < k) {
        numberOfSubarrays++;
      }
    }
  }

  return numberOfSubarrays;
};

const numSubarrayProductLessThanK = (nums: number[], k: number): number => {
  if (k <= 1) {
    return 0;
  }

  let left = 0,
    right = 0,
    count = 0,
    prod = 1;

  while (right < nums.length) {
    prod *= nums[right];
    while (prod >= k) {
      prod /= nums[left++];
    }
    count += right - left + 1;
    right++;
  }

  return count;
};
