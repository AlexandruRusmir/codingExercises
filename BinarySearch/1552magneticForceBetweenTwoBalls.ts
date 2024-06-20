const maxDistance = (position: number[], m: number): number => {
  const canBePlaced = (position: number[], distance: number, m: number) => {
    let ballsCount = 1,
      lastPlaced = position[0];
    for (let i = 1; i < position.length; i++) {
      if (position[i] - lastPlaced >= distance) {
        ballsCount++;
        lastPlaced = position[i];
      }
      if (ballsCount >= m) {
        return true;
      }
    }
    return false;
  };

  position.sort((a, b) => a - b);
  let low = 0,
    high = (position[position.length - 1] - position[0]) / (m - 1),
    result = 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canBePlaced(position, mid, m)) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
};

/**
Binary search is the best solution for this problem because it efficiently finds the maximum possible minimum magnetic force by leveraging the sorted positions and the properties of distances.

### Key Points:

1. **Monotonicity**: If a certain minimum distance \( d \) is possible, then any distance less than \( d \) is also possible. Conversely, if \( d \) is not possible, then any distance greater than \( d \) is also not possible.
2. **Efficiency**: Binary search reduces the problem size logarithmically, making it more efficient than checking each possible distance linearly.

### Steps:

1. **Sort Positions**: Sort the basket positions to facilitate distance calculations.
2. **Define Search Range**: Set the minimum possible distance (`low`) to 0 and the maximum possible distance (`high`) to the distance between the furthest baskets divided by \( m-1 \).
3. **Binary Search**: 
   - Calculate the middle value (`mid`) of the current range.
   - Use a helper function (`canBePlaced`) to check if \( m \) balls can be placed with at least `mid` distance apart.
   - Adjust the search range based on whether placing the balls is possible or not.
4. **Result**: Continue until the search range is exhausted. The largest possible minimum distance found is the result.

This method efficiently narrows down the maximum minimum distance between balls by iteratively adjusting the search range based on the feasibility of placing the balls.
 */
