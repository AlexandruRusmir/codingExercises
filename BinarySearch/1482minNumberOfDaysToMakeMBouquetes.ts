const minDays = (bloomDay: number[], m: number, k: number): number => {
  if (m * k > bloomDay.length) {
    return -1;
  }

  const dayHasEnoughValidBouquets = (
    bloomDay: number[],
    m: number,
    k: number,
    day: number
  ): boolean => {
    let currentNumberOfFlowers = 0,
      madeBouquets = 0;
    for (const bDay of bloomDay) {
      if (bDay > day) {
        currentNumberOfFlowers = 0;
        continue;
      }
      currentNumberOfFlowers++;
      if (currentNumberOfFlowers === k) {
        madeBouquets++;
        currentNumberOfFlowers = 0;
        if (madeBouquets === m) {
          return true;
        }
      }
    }

    return false;
  };

  let left = 0,
    right = Math.max(...bloomDay);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (dayHasEnoughValidBouquets(bloomDay, m, k, mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
