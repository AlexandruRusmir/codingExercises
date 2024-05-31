const spaceUnoptimisedSingleNumber = (nums: number[]): number[] => {
  const singleNumbers = new Map<number, true>();
  for (const num of nums) {
    if (singleNumbers.has(num)) {
      singleNumbers.delete(num);
    } else {
      singleNumbers.set(num, true);
    }
  }

  return [...singleNumbers.keys()];
};

const singleNumber = (nums: number[]): number[] => {
  const xorOfAllNums = nums.reduce(
    (accumulatedXor, currentNum) => accumulatedXor ^ currentNum,
    0
  );

  let mask = 1;
  while ((xorOfAllNums & mask) == 0) {
    mask <<= 1;
  }

  let firstNum = 0,
    secondNum = 0;

  for (const num of nums) {
    if ((num & mask) == 0) {
      firstNum ^= num;
    } else {
      secondNum ^= num;
    }
  }

  return [firstNum, secondNum];
};

/**
  1. Intuition
    The given problem requires finding two single numbers in an array where all other numbers appear twice. 
    To achieve this, we can utilize bitwise XOR operations to identify the two distinct numbers. 
    By XORing all elements in the array, we can obtain the XOR of the two target numbers. 
    This XOR result will have at least one bit set where the two numbers differ. 
    We can then use this differing bit to separate the two numbers by XORing the array elements based on this bit.

  2. Approach
    Calculate the XOR of all elements in the array to find the XOR of the two single numbers.
    Identify a differing bit between the two numbers by finding the rightmost set bit in the XOR result.
    Iterate through the array again, partitioning the elements based on the differing bit and XORing them separately to find the two single numbers.
    Return the two single numbers found.
 */
