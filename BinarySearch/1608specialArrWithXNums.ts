const bruteForceSpecialArray = (nums: number[]): number => {
  nums.sort((a, b) => a - b);
  const numberAppearances = new Map<number, number>();
  for (const num of nums) {
    numberAppearances.set(num, (numberAppearances.get(num) ?? 0) + 1);
  }
  let currentNumberOfAppearances = 0;
  let x = -1;
  for (let i = 0; i <= nums[nums.length - 1]; i++) {
    if (nums.length - currentNumberOfAppearances === i) {
      x = i;
      break;
    }
    currentNumberOfAppearances += numberAppearances.get(i) ?? 0;
  }

  return x;
};

const specialArray = (nums: number[]): number => {
  nums.sort((a, b) => a - b);

  let start = 0,
    end = nums.length;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);

    const numberOfNumbersGreaterOrEqual = nums.reduce(
      (accumulator, currentNum) => accumulator + Number(currentNum >= mid),
      0
    );

    if (numberOfNumbersGreaterOrEqual === mid) {
      return mid;
    }
    if (numberOfNumbersGreaterOrEqual < mid) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};
