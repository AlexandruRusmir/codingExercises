const reversePrefix = (word: string, ch: string): string => {
  if (!word.includes(ch)) {
    return word;
  }
  const firstPos = word.indexOf(ch);

  return (
    word
      .slice(0, firstPos + 1)
      .split("")
      .reverse()
      .join("") + word.slice(firstPos + 1)
  );
};
