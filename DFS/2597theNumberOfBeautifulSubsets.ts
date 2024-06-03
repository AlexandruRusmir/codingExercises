const beautifulSubsets = (nums: number[], k: number): number => {
  let numberOfBeautifulSubsets = 0;

  const dfs = (nums: number[], index: number, currentSubset: number[]) => {
    if (currentSubset.length > 0) {
      numberOfBeautifulSubsets++;
    }

    for (let i = index; i < nums.length; i++) {
      let isBeautiful = true;
      for (let j = 0; j < currentSubset.length; j++) {
        if (Math.abs(currentSubset[j] - nums[i]) === k) {
          isBeautiful = false;
          break;
        }
      }
      if (isBeautiful) {
        currentSubset.push(nums[i]);
        dfs(nums, i + 1, currentSubset);
        currentSubset.pop();
      }
    }
  };

  dfs(nums, 0, []);

  return numberOfBeautifulSubsets;
};

/**
1. **Recursive Depth-First Search (DFS)**:
   - We use a recursive DFS function to explore all possible combinations of elements from the array to form subsets.
   - The recursive function `dfs` takes the current index (`index`), the array of numbers (`nums`), and the current subset being formed (`currentSubset`).

2. **Incremental Construction**:
   - Starting from the given `index`, the function tries to add each element from `nums` to the current subset.
   - Before adding an element to `currentSubset`, it checks if the subset will remain beautiful (i.e., no two elements in the subset have an absolute difference of `k`).

3. **Beauty Check**:
   - For each potential new element, we compare it against all elements already in `currentSubset`. If the absolute difference between the new element and any of the existing elements equals `k`, this element cannot be added while keeping the subset beautiful.

4. **Backtracking**:
   - If the subset remains beautiful after adding the new element, we recursively call `dfs` to continue adding more elements starting from the next index.
   - After the recursive call returns, we remove (or "pop") the last added element to backtrack and try the next possibility. This ensures all combinations are explored.

5. **Counting Beautiful Subsets**:
   - Every time a new element is added and the subset remains beautiful, the function increments a counter (`numberOfBeautifulSubsets`). This counter tracks the number of non-empty beautiful subsets found.
   - The count is incremented inside the recursion, but only if the `currentSubset` is not empty, to ensure we are only considering non-empty subsets.

6. **Efficiency**:
   - By checking for the beauty condition incrementally (only with the latest added element), the solution minimizes unnecessary comparisons and quickly skips over invalid subsets, making the algorithm efficient even though it explores many potential combinations.

This method leverages recursion, backtracking, and efficient pruning to calculate the total number of beautiful subsets effectively.
 */
