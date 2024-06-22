const numberOfSubarrays = (nums: number[], k: number): number => {
  let totalNiceSubarrays = 0,
    oddCount = 0;
  const prefixOddCount = new Array<number>(nums.length + 1).fill(0);
  prefixOddCount[0] = 1;

  for (const num of nums) {
    oddCount += num % 2;
    if (oddCount - k >= 0) {
      totalNiceSubarrays += prefixOddCount[oddCount - k];
    }
    prefixOddCount[oddCount]++;
  }

  return totalNiceSubarrays;
};

/**
The idea is to use a prefix sum to keep track of the number of odd numbers encountered up to the current index.
Initialized with size nums.length + 1 and set prefixOddCount[0] to 1 because a subarray starting from the beginning with zero odd numbers is a valid start point.

When we encounter an oddCount at the current index, if there exists a previous index (or multiple indices) where the number of odd numbers was oddCount - k, it means that the subarray(s) between those indices and the current index have exactly k odd numbers.
 */
