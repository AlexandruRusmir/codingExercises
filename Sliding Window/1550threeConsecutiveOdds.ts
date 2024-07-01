const threeConsecutiveOdds0 = (nums: number[]): boolean => {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] % 2 && nums[i + 1] % 2 && nums[i + 2] % 2) {
      return true;
    }
  }

  return false;
};

const threeConsecutiveOdds = (nums: number[]): boolean => {
  let oddsCount = 0;
  for (const num of nums) {
    if (num % 2) {
      oddsCount++;
      if (oddsCount === 3) {
        return true;
      }
    } else {
      oddsCount = 0;
    }
  }

  return false;
};
