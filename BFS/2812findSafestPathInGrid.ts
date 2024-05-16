import { Deque } from "../../exercises/dataStructures/deque";

const maximumSafenessFactor = (grid: number[][]): number => {
  const n = grid.length;
  const isWithinBounds = (r: number, c: number) =>
    r >= 0 && r < n && c >= 0 && c < n;
  const deque = new Deque<[number, number, number]>();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        deque.addBack([i, j, 1]);
        grid[i][j] = 0;
      } else {
        grid[i][j] = -1;
      }
    }
  }

  while (!deque.isEmpty()) {
    const [i, j, safety] = deque.removeFront()!;
    const expandOptions = [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ];

    for (const [r, c] of expandOptions) {
      if (!isWithinBounds(r, c) || grid[r][c] !== -1) {
        continue;
      }
      grid[r][c] = safety;
      deque.addBack([r, c, safety + 1]);
    }
  }

  let minSafety = grid[0][0];
  deque.addBack([0, 0, grid[0][0]]);
  while (!deque.isEmpty()) {
    const [i, j, safety] = deque.removeFront()!;
    minSafety = Math.min(minSafety, safety);
    if (i === n - 1 && j === n - 1) {
      break;
    }
    const expandOptions = [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ];
    for (const [r, c] of expandOptions) {
      if (!isWithinBounds(r, c) || grid[r][c] === -1) {
        continue;
      }
      const safety = grid[r][c];
      grid[r][c] = -1;
      if (safety < minSafety) {
        deque.addBack([r, c, safety]);
      } else {
        deque.addFront([r, c, safety]);
      }
    }
  }

  return minSafety;
};

console.log(
  maximumSafenessFactor([
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0],
  ])
);

/**
This method utilizes two passes of BFS: one for setting the safeness levels of each cell relative to the nearest thief, and another to determine the safest path from the start to the end of the grid. Here's how it solves the problem:

### Step-by-Step Explanation

#### Step 1: Initialize the Grid
- You first iterate over every cell in the `grid`. 
  - If the cell contains a `thief (grid[i][j] === 1)`, you push its location into the queue (used for BFS) with a starting safeness level of `1` (although you might consider this to be `0` to indicate direct contact). Then, you mark the cell as `0`, effectively making it "safe" or neutral.
  - If the cell is empty `(grid[i][j] === 0)`, you mark it as `-1` to indicate it hasn't been processed yet for safeness.

#### Step 2: First BFS - Calculate Safeness Levels
- With all initial thief locations in the queue, you begin your BFS:
  - For each cell dequeued, examine its four potential neighbors (up, down, left, right).
  - If a neighbor is within bounds and is unprocessed (`grid[r][c] === -1`), you update its safeness value to the current cell's safeness plus one and enqueue it for further processing. This effectively spreads the safeness level across the grid from each thief's location.

#### Step 3: Second BFS - Determine Safest Path
- After calculating safeness levels, you initialize another BFS starting from `(0, 0)`, aiming to reach `(n-1, n-1)`. This time, the aim is to maintain as high a safeness level as possible throughout the path:
  - Enqueue the starting cell with its current safeness level.
  - For each dequeued cell, update `minSafety` (initially set to the safeness of `(0, 0)`) to the minimum of its own safeness and the ongoing `minSafety`.
  - Again, check the four potential neighbors. This time, if a neighbor has not been visited (i.e., not set back to `-1` during this BFS), compare its safeness:
    - If the neighbor's safeness is less than `minSafety`, add it to the back of the queue.
    - If equal or higher, add it to the front to prioritize it. After visiting a neighbor, set its grid value to `-1` to mark as visited.

#### Step 4: Return the Minimum Safeness
- The value of `minSafety` upon reaching `(n-1, n-1)` or when all possible paths are exhausted will be the maximum safeness factor of the safest path from `(0, 0)` to `(n-1, n-1)`. This represents the minimum manhattan distance from the safest path to the nearest thief, optimized across all possible paths.

### Conceptual Underpinnings
- **Breadth-First Search (BFS):** This technique ensures that you process all cells in waves, starting from each thief, which allows you to accurately calculate the shortest distance to a threat (thief) for every cell.
- **Manhattan Distance:** This distance calculation (sum of the absolute differences of their Cartesian coordinates) is appropriate here because you can only move up, down, left, or right (not diagonally).
- **Safeness Metric:** Represents how "safe" each step of your path is, minimizing the closest distance to any threat.
- **Multi-Phase BFS:** The two phases of BFS first establish threat proximity and then utilize these metrics to find the safest path, which is a novel approach to pathfinding under threat conditions.

This method efficiently handles the requirement to both assess threat levels and then navigate optimally under those constraints.
 */
