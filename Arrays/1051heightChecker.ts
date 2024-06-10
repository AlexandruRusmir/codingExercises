const heightChecker = (height: number[]): number => {
  const expected = [...height].sort((a, b) => a - b);
  return expected.reduce(
    (unexpectedAccumulated, currentExpected, currentIndex) =>
      unexpectedAccumulated + Number(currentExpected !== height[currentIndex]),
    0
  );
};
