const TwoLoopsLongestPalindrome = (s: string): number => {
  const letterAppearances = new Map<string, number>();
  for (const letter of s) {
    letterAppearances.set(letter, (letterAppearances.get(letter) ?? 0) + 1);
  }

  let unevenNumberOfAppearancesFound = false,
    maxPalindromeLength = 0;

  for (const letterAppearanceNumber of letterAppearances.values()) {
    if (letterAppearanceNumber % 2) {
      if (!unevenNumberOfAppearancesFound) {
        maxPalindromeLength += letterAppearanceNumber;
        unevenNumberOfAppearancesFound = true;
      } else {
        maxPalindromeLength += letterAppearanceNumber - 1;
      }
    } else {
      maxPalindromeLength += letterAppearanceNumber;
    }
  }

  return maxPalindromeLength;
};

const longestPalindrome = (s: string): number => {
  const appearedLetters = new Set<string>();
  let maxPalindromeLength = 0;
  for (const letter of s) {
    if (appearedLetters.has(letter)) {
      appearedLetters.delete(letter);
      maxPalindromeLength += 2;
    } else {
      appearedLetters.add(letter);
    }
  }
  if (appearedLetters.size) {
    maxPalindromeLength += 1;
  }

  return maxPalindromeLength;
};
