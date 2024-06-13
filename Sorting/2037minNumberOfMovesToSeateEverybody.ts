const minMovesToSeat = (seats: number[], students: number[]): number => {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  return seats.reduce(
    (accumulatedMoves, currentSeatPosition, currentSeatIndex) =>
      accumulatedMoves +
      Math.abs(currentSeatPosition - students[currentSeatIndex]),
    0
  );
};
