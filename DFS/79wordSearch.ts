const exist = (board: string[][], word: string): boolean => {
  const backtrack = (i: number, j: number, k: number): boolean => {
    if (k === word.length) {
      return true;
    }
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
      return false;
    }
    if (board[i][j] !== word[k]) {
      return false;
    }
    const previousValueAtCurrentPosition = board[i][j];
    board[i][j] = "/";

    const result =
      backtrack(i - 1, j, k + 1) ||
      backtrack(i + 1, j, k + 1) ||
      backtrack(i, j - 1, k + 1) ||
      backtrack(i, j + 1, k + 1);

    board[i][j] = previousValueAtCurrentPosition;

    return result;
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
