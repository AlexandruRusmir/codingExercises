const findDuplicates = (nums: number[]): number[] => {
  const letterAppeared = new Map<number, boolean>();
  const duplicates: number[] = [];

  for (const num of nums) {
    if (!letterAppeared.has(num)) {
      letterAppeared.set(num, true);
      continue;
    }
    duplicates.push(num);
  }

  return duplicates;
};
