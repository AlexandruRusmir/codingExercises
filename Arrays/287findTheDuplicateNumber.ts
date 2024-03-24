const findDuplicate = (nums: number[]): number => {
  const letterAppearances = new Map<number, boolean>();
  for (const num of nums) {
    if (letterAppearances.has(num)) {
      return num;
    }
    letterAppearances.set(num, true);
  }

  return -1;
};
