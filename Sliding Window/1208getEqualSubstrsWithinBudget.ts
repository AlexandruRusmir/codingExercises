const equalSubstring = (s: string, t: string, maxCost: number): number => {
  let left = 0,
    right = 0,
    maxLength = 0,
    currentCost = 0;
  while (right < s.length) {
    currentCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    if (currentCost <= maxCost) {
      maxLength = Math.max(maxLength, right - left + 1);
    } else {
      while (currentCost > maxCost && left <= right) {
        currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
        left++;
      }
    }
    right++;
  }

  return maxLength;
};
