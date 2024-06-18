const maxProfitAssignment0 = (
  difficulties: number[],
  profits: number[],
  workers: number[]
): number => {
  const profitWithDifficulty = difficulties.map(
    (currentDifficulty, currentIndex) => {
      return { difficulty: currentDifficulty, profit: profits[currentIndex] };
    }
  );

  profitWithDifficulty.sort((a, b) => b.profit - a.profit);
  let maxProfit = 0;
  for (const worker of workers) {
    let i = 0;
    while (
      i < profitWithDifficulty.length &&
      profitWithDifficulty[i].difficulty > worker
    ) {
      i++;
    }
    if (i < profitWithDifficulty.length) {
      maxProfit += profitWithDifficulty[i].profit;
    }
  }

  return maxProfit;
};

const maxProfitAssignment = (
  difficulty: number[],
  profit: number[],
  worker: number[]
): number => {
  const maxDifficulty = Math.max(...difficulty);
  const maxProfitForDifficulty = new Array(maxDifficulty + 1).fill(0);

  for (let i = 0; i < difficulty.length; i++) {
    maxProfitForDifficulty[difficulty[i]] = Math.max(
      maxProfitForDifficulty[difficulty[i]],
      profit[i]
    );
  }

  for (let i = 1; i < maxProfitForDifficulty.length; i++) {
    maxProfitForDifficulty[i] = Math.max(
      maxProfitForDifficulty[i - 1],
      maxProfitForDifficulty[i]
    );
  }

  return worker.reduce(
    (accumulatedProfit, currentAbility) =>
      accumulatedProfit +
      maxProfitForDifficulty[Math.min(currentAbility, maxDifficulty)],
    0
  );
};

/**
Initialization:
  Determine the maximum job difficulty.
  Initialize a maxProfitUpToDifficulty array to store the maximum profit for each difficulty level up to the maximum difficulty.
Fill the Profit Lookup Table:
  For each job, update the maxProfitUpToDifficulty array to ensure it holds the maximum profit for the given difficulty.
  Convert the maxProfitUpToDifficulty array to a cumulative maximum profit array, where each index i will have the maximum profit possible for difficulties from 0 to i.
Calculate Total Profit:
  For each worker, use their ability to look up the corresponding maximum profit from the maxProfitUpToDifficulty array and sum up the total profit.

Complexity
  Time Complexity: ( O(n + m + d) ), where ( n ) is the number of jobs, ( m ) is the number of workers, and ( d ) is the maximum difficulty.
  Space Complexity: ( O(d) ) for the maxProfitUpToDifficulty array.
 */
