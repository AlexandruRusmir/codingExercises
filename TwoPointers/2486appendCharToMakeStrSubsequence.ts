const appendCharacters = (s: string, t: string): number => {
  let sPos = 0,
    tPos = 0;

  while (sPos < s.length && tPos <= t.length) {
    if (s[sPos] === t[tPos]) {
      tPos++;
    }
    sPos++;
  }

  return t.length - tPos;
};
