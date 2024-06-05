const commonChars = (words: string[]): string[] => {
  const letterAppearances = new Map<string, number>();
  for (const letter of words[0]) {
    letterAppearances.set(letter, (letterAppearances.get(letter) ?? 0) + 1);
  }
  for (let i = 1; i < words.length; i++) {
    const currentWordLetterAppearances = new Map<string, number>();
    for (const letter of words[i]) {
      currentWordLetterAppearances.set(
        letter,
        (currentWordLetterAppearances.get(letter) ?? 0) + 1
      );
    }

    for (const [letter, appearance] of letterAppearances.entries()) {
      letterAppearances.set(
        letter,
        Math.min(currentWordLetterAppearances.get(letter) ?? 0, appearance)
      );
    }
  }

  const commonCharacters: string[] = [];
  for (const [letter, appearance] of letterAppearances.entries()) {
    for (let i = 0; i < appearance; i++) {
      commonCharacters.push(letter);
    }
  }

  return commonCharacters;
};
