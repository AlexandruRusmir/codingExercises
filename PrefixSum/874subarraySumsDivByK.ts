const subarraysDivByK = (nums: number[], k: number): number => {
  let numOfSubarrays = 0;

  let prefixMap = new Map<number, number>();
  prefixMap.set(0, 1); // To handle the case where the subarray starts from index 0
  let sum: number = 0;

  for (const num of nums) {
    sum += num;
    let remainder: number = sum % k;
    if (remainder < 0) {
      remainder += k;
    }

    // If this remainder has been seen before, it means there are subarrays ending here that are divisible by k
    if (prefixMap.has(remainder)) {
      numOfSubarrays += prefixMap.get(remainder)!;
      prefixMap.set(remainder, prefixMap.get(remainder)! + 1);
    } else {
      prefixMap.set(remainder, 1);
    }
  }

  return numOfSubarrays;
};
