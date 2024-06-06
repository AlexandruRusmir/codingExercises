const isNStraightHand = (hand: number[], groupSize: number): boolean => {
  const cardAppearances = new Map<number, number>();
  for (const card of hand) {
    cardAppearances.set(card, (cardAppearances.get(card) ?? 0) + 1);
  }
  const cardsWithAppearances = [...cardAppearances.entries()];
  cardsWithAppearances.sort((a, b) => a[0] - b[0]);

  while (cardsWithAppearances.length) {
    cardsWithAppearances[0][1]--;
    for (let i = 1; i < groupSize; i++) {
      if (cardsWithAppearances[i - 1][0] + 1 !== cardsWithAppearances[i][0]) {
        return false;
      }
      cardsWithAppearances[i][1]--;
    }
    let k = 0;
    let i = 0;
    while (k < groupSize) {
      if (cardsWithAppearances[i][1] === 0) {
        cardsWithAppearances.splice(i, 1);
      } else {
        i++;
      }
      k++;
    }
  }

  return true;
};
