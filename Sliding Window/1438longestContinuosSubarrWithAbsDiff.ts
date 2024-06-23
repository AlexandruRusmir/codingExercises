const longestSubarray0 = (nums: number[], limit: number): number => {
  let longest = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    let currentMax = nums[i],
      currentMin = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < currentMin) {
        currentMin = nums[j];
      } else if (nums[j] > currentMax) {
        currentMax = nums[j];
      }
      if (currentMax - currentMin > limit) {
        break;
      }
      longest = Math.max(longest, j - i + 1);
    }
  }

  return longest;
};

import { Deque } from "../../exercises/dataStructures/deque";

const longestSubarray = (nums: number[], limit: number): number => {
  let left = 0,
    longest = 0;
  const increasing = new Deque<number>(),
    decreasing = new Deque<number>();

  for (let i = 0; i < nums.length; i++) {
    while (!increasing.isEmpty() && increasing.peekBack()! > nums[i]) {
      increasing.removeBack();
    }
    increasing.addBack(nums[i]);

    while (!decreasing.isEmpty() && decreasing.peekBack()! < nums[i]) {
      decreasing.removeBack();
    }
    decreasing.addBack(nums[i]);

    while (decreasing.peekFront()! - increasing.peekFront()! > limit) {
      if (nums[left] === decreasing.peekFront()) {
        decreasing.removeFront();
      }
      if (nums[left] === increasing.peekFront()) {
        increasing.removeFront();
      }
      left++;
    }

    longest = Math.max(longest, i - left + 1);
  }

  return longest;
};

/**
Sure, here's a more concise explanation:

### Why the Two Deques are Used
1. **Maintaining Min and Max Values**:
   - **Increasing Deque**: Keeps track of the minimum values in the current window.
   - **Decreasing Deque**: Keeps track of the maximum values in the current window.

### Conditions to Preserve When Adding a New Number
1. **Increasing Deque**:
   - Remove elements from the back that are greater than the new number. This ensures the deque is in non-decreasing order, with the smallest element at the front.

2. **Decreasing Deque**:
   - Remove elements from the back that are less than the new number. This ensures the deque is in non-increasing order, with the largest element at the front.

### Why Check the Front Element
- The front of the **increasing deque** contains the minimum value of the current window.
- The front of the **decreasing deque** contains the maximum value of the current window.

### Checking the Condition
- To ensure the window is valid (i.e., the absolute difference between the max and min values is within the limit), compare the front elements of the deques.
- If the difference between `decreasing.peekFront()` (max) and `increasing.peekFront()` (min) exceeds the limit, the window is too large, and the `left` pointer needs to be moved right to shrink the window.

This approach allows efficient maintenance of the current window's min and max values, ensuring the solution is optimal.
 */
