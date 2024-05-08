const findRelativeRanks = (score: number[]): string[] => {
  const scoresAndPositionsForAthlete = score.map(
    (athleteScore, athleteIndex) => {
      return { score: athleteScore, index: athleteIndex };
    }
  );
  scoresAndPositionsForAthlete.sort((a, b) => b.score - a.score);

  const result = new Array<string>(score.length);
  for (let i = 0; i < scoresAndPositionsForAthlete.length; i++) {
    if (i === 0) {
      result[scoresAndPositionsForAthlete[i].index] = "Gold Medal";
      continue;
    }
    if (i === 1) {
      result[scoresAndPositionsForAthlete[i].index] = "Silver Medal";
      continue;
    }
    if (i === 2) {
      result[scoresAndPositionsForAthlete[i].index] = "Bronze Medal";
      continue;
    }
    result[scoresAndPositionsForAthlete[i].index] = String(i + 1);
  }

  return result;
};
