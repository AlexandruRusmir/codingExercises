const checkSubarraySum = (nums: number[], k: number): boolean => {
  let remainderIndexMap = new Map<number, number>();
  remainderIndexMap.set(0, -1); // To handle the case where the subarray starts from index 0
  let sum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const remainder: number = sum % k;

    if (remainderIndexMap.has(remainder)) {
      if (i - remainderIndexMap.get(remainder)! > 1) {
        return true;
      }
    } else {
      remainderIndexMap.set(remainder, i);
    }
  }

  return false;
};

/**
1. Initialize a HashMap:
Use a HashMap<Integer, Integer> to store the remainder of the cumulative sum when divided by k and its corresponding index.
Start with an entry (0, -1) to handle subarrays starting from index 0.

2. Iterate through the Array:
Maintain a cumulative sum as you iterate through the array.

3. Calculate Remainder:
For each element, update the cumulative sum and calculate remainder = sum % k.
If the remainder is negative, adjust it by adding k to ensure it's positive.

4. Check for Subarray:
If the remainder exists in the HashMap:
Check if the distance between the current index and the stored index for this remainder is greater than 1.
If yes, return true (indicating a valid subarray is found).
If the remainder is not in the HashMap, store it with the current index.

5. Return Result:
If no valid subarray is found after iterating through the array, return false.

Complexity
Time complexity: O(n).
Space complexity: O(n).
 */
