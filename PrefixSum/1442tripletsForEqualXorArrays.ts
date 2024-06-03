const bruteForceCountTriplets = (nums: number[]): number => {
  let numberOfTriplets = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j; k < nums.length; k++) {
        const firstIntervalXorValue = nums
          .slice(i, j)
          .reduce((acc, currentNum) => acc ^ currentNum, 0);
        const secondIntervalXorValue = nums
          .slice(j, k + 1)
          .reduce((acc, currentNum) => acc ^ currentNum, 0);
        if (firstIntervalXorValue === secondIntervalXorValue) {
          numberOfTriplets++;
        }
      }
    }
  }
  return numberOfTriplets;
};

const countTriplets = (nums: number[]): number => {
  const prefixXor = new Array<number>(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    prefixXor[i + 1] = prefixXor[i] ^ nums[i];
  }

  let numberOfTriplets = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (prefixXor[i] === prefixXor[k + 1]) {
        // this means that prefixXor[i] ^ prefixXor[k + 1] === 0
        numberOfTriplets += k - i;
      }
    }
  }

  return numberOfTriplets;
};

/**
Intuition
  The problem asks for triplets (i, j, k) such that the XOR of elements from index i to j-1 is equal to the XOR of elements from index j to k. 
  Leveraging the properties of the XOR operation, we can transform this condition into a simpler one: the XOR of the entire segment from i to k must be zero. 
  Using cumulative XOR, we can efficiently compute and check this condition for all valid triplets.
Approach
  1.Cumulative XOR Array:
    Construct a cumulative XOR array prefix where prefix[i] represents the XOR of all elements from arr[0] to arr[i-1]. 
    This allows us to compute the XOR of any subarray arr[l] to arr[r] as prefix[r+1] ^ prefix[l].
  2.Finding Valid Triplets:
    Iterate over all pairs of indices (i, k) where 0 < i < k < n.
    Check if prefix[i] is equal to prefix[k+1]. If they are equal, the XOR of the elements from i to k is zero.
    For each pair (i, k) where this condition holds, every j in the range [i+1, k] will satisfy the triplet condition.
    Count all such valid j values by adding (k - i) to the result for each valid pair (i, k).
 */
