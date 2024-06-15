const findMaximizedCapital = (
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number => {
  let maximizedCapital = w;

  const finishedProjectsIndices = new Map<number, boolean>();

  while (
    finishedProjectsIndices.size < k &&
    finishedProjectsIndices.size < capital.length
  ) {
    let maxCapitalThatCanBeSpentForMaxProfitIndex = -1;
    for (let i = 0; i < capital.length; i++) {
      if (
        !finishedProjectsIndices.has(i) &&
        profits[i] >
          (profits[maxCapitalThatCanBeSpentForMaxProfitIndex] ?? -1) &&
        maximizedCapital >= capital[i]
      ) {
        maxCapitalThatCanBeSpentForMaxProfitIndex = i;
      }
    }
    if (maxCapitalThatCanBeSpentForMaxProfitIndex === -1) {
      break;
    }
    maximizedCapital += profits[maxCapitalThatCanBeSpentForMaxProfitIndex];
    finishedProjectsIndices.set(
      maxCapitalThatCanBeSpentForMaxProfitIndex,
      true
    );
  }

  return maximizedCapital;
};
