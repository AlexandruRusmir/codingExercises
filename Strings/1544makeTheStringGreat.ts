const makeGood = (s: string): string => {
  const twoCharactersAreGood = (a: string, b: string): Boolean => {
    return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) !== 32;
  };

  const stack: string[] = [];
  for (const char of s) {
    stack.push(char);
    while (
      stack.length > 1 &&
      !twoCharactersAreGood(stack[stack.length - 1], stack[stack.length - 2])
    ) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.join("");
};

const makeGood2 = (s: string): string => {
  const twoCharactersAreGood = (a: string, b: string): Boolean => {
    return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) !== 32;
  };

  const stack: string[] = [];
  for (const char of s) {
    if (stack.length && !twoCharactersAreGood(char, stack[stack.length - 1])) {
      stack.pop();
      continue;
    }
    stack.push(char);
  }

  return stack.join("");
};
