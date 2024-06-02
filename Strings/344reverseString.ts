const reverseString = (s: string[]): void => {
  let i = 0;
  const middle = Math.floor(s.length / 2);
  while (i < middle) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
    i++;
  }
};
