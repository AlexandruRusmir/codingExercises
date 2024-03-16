/**
 * @param {string} s
 * @return {string}
 */
const minimizeStringValue = (s) => {
  const letterAppearances = new Map();
  for (const letter of s) {
    if (letter === "?") {
      continue;
    }
    letterAppearances.set(letter, (letterAppearances.get(letter) ?? 0) + 1);
  }
  let result = "";
  const lettersToReplaceQuestionMarks = [];
  for (const letter of s) {
    if (letter !== "?") {
      continue;
    }

    let numNotFound = true;
    let minLetterAppearances = Infinity;
    let letterWithMinAppearances;
    for (
      let i = "a".charCodeAt(0);
      i <= "z".charCodeAt(0) && numNotFound;
      i++
    ) {
      const l = String.fromCharCode(i);
      if (!letterAppearances.get(l)) {
        numNotFound = false;
        lettersToReplaceQuestionMarks.push(l);
        letterAppearances.set(l, 1);
      }
      if (letterAppearances.get(l) < minLetterAppearances) {
        minLetterAppearances = letterAppearances.get(l);
        letterWithMinAppearances = l;
      }
    }
    if (numNotFound) {
      lettersToReplaceQuestionMarks.push(letterWithMinAppearances);
      letterAppearances.set(
        letterWithMinAppearances,
        letterAppearances.get(letterWithMinAppearances) + 1
      );
    }
  }

  lettersToReplaceQuestionMarks.sort(
    (a, b) => b.charCodeAt(0) - a.charCodeAt(0)
  );
  for (const letter of s) {
    if (letter !== "?") {
      result += letter;
      continue;
    }
    result += lettersToReplaceQuestionMarks.pop();
  }

  return result;
};

console.log(minimizeStringValue("abcdefghijklmnopqrstuvwxy??"));
