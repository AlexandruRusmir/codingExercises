const intersect = (nums1: number[], nums2: number[]): number[] => {
  const nums1Appearances = new Map<number, number>();
  for (const num of nums1) {
    nums1Appearances.set(num, (nums1Appearances.get(num) ?? 0) + 1);
  }

  const intersection: number[] = [];
  for (const num of nums2) {
    if (nums1Appearances.get(num)) {
      intersection.push(num);
      nums1Appearances.set(num, nums1Appearances.get(num)! - 1);
    }
  }

  return intersection;
};
