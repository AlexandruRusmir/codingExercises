//THIS doesn't handle the )))**** case, for example
const incorrectCheckValidString = (s: string): boolean => {
  const paranthesesStack: string[] = [];
  let numberOfStars = 0;
  for (const character of s) {
    switch (character) {
      case ")":
        if (paranthesesStack.slice(-1)[0] === "(") {
          paranthesesStack.pop();
          break;
        }
        paranthesesStack.push(character);
        break;
      case "(":
        paranthesesStack.push(character);
        break;
      default:
        numberOfStars++;
    }
  }

  return paranthesesStack.length <= numberOfStars;
};

const checkValidString = (s: string): boolean => {
  let minOpen = 0; // Minimum open parentheses needed
  let maxOpen = 0; // Maximum open parentheses possible

  for (const char of s) {
    if (char === "(") {
      minOpen += 1;
      maxOpen += 1;
    } else if (char === ")") {
      minOpen = Math.max(0, minOpen - 1);
      maxOpen -= 1;
      if (maxOpen < 0) {
        return false; // More closing parentheses than open, invalid string
      }
    } else {
      // char === '*'
      minOpen = Math.max(0, minOpen - 1); // `*` could be ')'
      maxOpen += 1; // `*` could be '('
    }
  }

  return minOpen === 0; // If we can have zero open parentheses, the string is valid
};
