const scoreOfString = (s: string): number => {
  let scoreOfString = 0;
  for (let i = 0; i < s.length - 1; i++) {
    scoreOfString += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
  }

  return scoreOfString;
};

const scoreOfString2 = (s: string): number => {
  return s
    .split("")
    .reduce(
      (accScore, currentLetter, index) =>
        accScore +
        (index === s.length - 1
          ? 0
          : Math.abs(currentLetter.charCodeAt(0) - s[index + 1].charCodeAt(0))),
      0
    );
};
