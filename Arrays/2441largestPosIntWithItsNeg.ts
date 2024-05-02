const findMaxK = (nums: number[]): number => {
  const positives = new Set<number>();
  const negatives = new Set<number>();
  for (const num of nums) {
    if (num > 0) {
      positives.add(num);
    } else if (num < 0) {
      negatives.add(num);
    }
  }

  let maxK = -1;
  for (const num of positives.values()) {
    if (num > maxK && negatives.has(-1 * num)) {
      maxK = num;
    }
  }

  return maxK;
};
