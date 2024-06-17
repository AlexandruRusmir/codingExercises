const judgeSquareNum0 = (num: number): boolean => {
  for (let i = 1; i < Math.sqrt(num); i++) {
    if (Number.isInteger(Math.sqrt(num - i ** 2))) {
      return true;
    }
  }

  return false;
};

const judgeSquareSum = (num: number): boolean => {
  let i = 0;
  let j = Math.ceil(Math.sqrt(num));
  while (i <= j) {
    let sum = i * i + j * j;
    if (sum < num) {
      i++;
    } else if (sum > num) {
      j--;
    } else {
      return true;
    }
  }
  return false;
};

// same complexity for both
