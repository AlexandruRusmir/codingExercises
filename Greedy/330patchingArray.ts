const minPatches = (nums: number[], n: number): number => {
  let missing = 1,
    patches = 0,
    index = 0;

  while (missing <= n) {
    if (index < nums.length && nums[index] <= missing) {
      missing += nums[index];
      index++;
    } else {
      missing += missing;
      patches++;
    }
  }

  return patches;
};

/**
Greedy Approach: We aim to cover the smallest number not yet achievable by the sum of elements in the array. We add elements strategically to extend the range of achievable sums as efficiently as possible.

Tracking the Missing Number: We maintain a variable missing to keep track of the smallest number that cannot currently be formed with the given elements and any patches added so far.

Two Main Operations:
    Using the Existing Element: If the current element in the array nums can help cover the missing number, we add it to our sum and move to the next element.
    Patching: If the current element is too large to help cover the missing number, we add missing itself to our array (as a virtual patch). This effectively doubles our range of achievable numbers.


Why We Can Form All Numbers
    This algorithm ensures that at each step, we extend the range of achievable sums efficiently. 
    By always adding the smallest missing number when necessary, we maximize the range incrementally and ensure that all numbers up to n are covered. 
    The greedy nature of this approach ensures minimal patches because each patch operation doubles the range of numbers that can be formed, quickly covering any gaps left by the given nums array.

For short:
    if we can do every number until 11 for example, it means that by adding 11 as a patch, 
    we can certainly do every number up to 22, because we just add 11 to every sum before that, 
    and we do this until we know we pass n
    */
