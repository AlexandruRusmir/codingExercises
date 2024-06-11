const relativeSortArray = (arr1: number[], arr2: number[]): number[] => {
  const numberPositionInArr2 = new Map<number, number>();
  for (let i = 0; i < arr2.length; i++) {
    if (!numberPositionInArr2.has(arr2[i])) {
      numberPositionInArr2.set(arr2[i], i);
    }
  }

  return arr1.sort((a, b) => {
    let aIndexInArr2 = numberPositionInArr2.get(a) ?? Infinity;
    let bIndexInArr2 = numberPositionInArr2.get(b) ?? Infinity;
    if (aIndexInArr2 === Infinity && bIndexInArr2 === Infinity) {
      return a - b;
    }

    return aIndexInArr2 - bIndexInArr2;
  });
};
