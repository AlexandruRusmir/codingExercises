const maximumHappinessSum = (
  childrenHappiness: number[],
  k: number
): number => {
  return childrenHappiness
    .sort((a, b) => b - a)
    .slice(0, k)
    .reduce(
      (pastSum, currentChildHappiness, currentChildIndex) =>
        pastSum + Math.max(0, currentChildHappiness - currentChildIndex),
      0
    );
};
