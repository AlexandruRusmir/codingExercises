const maxDepth = (s: string): number => {
  let maxNumberOfOpenParantheses: number = 0,
    currentNumberOfOpenParantheses: number = 0;
  for (const char of s) {
    if (char === "(") {
      currentNumberOfOpenParantheses++;
      maxNumberOfOpenParantheses = Math.max(
        currentNumberOfOpenParantheses,
        maxNumberOfOpenParantheses
      );
    }
    if (char === ")") {
      currentNumberOfOpenParantheses--;
    }
  }
  return maxNumberOfOpenParantheses;
};
