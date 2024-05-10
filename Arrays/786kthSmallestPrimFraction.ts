const kthSmallestPrimeFraction = (arr: number[], k: number): number[] => {
  const fractionsParts: [number, number][] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      fractionsParts.push([arr[i], arr[j]]);
    }
  }
  fractionsParts.sort((a, b) => a[0] / a[1] - b[0] / b[1]);

  return fractionsParts[k - 1];
};
