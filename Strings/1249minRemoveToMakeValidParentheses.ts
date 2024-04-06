const minRemoveToMakeValid = (s: string): string => {
  const paranthesesStack: { value: string; position: number }[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (
        paranthesesStack.length &&
        paranthesesStack[paranthesesStack.length - 1].value === "("
      ) {
        paranthesesStack.pop();
      } else {
        paranthesesStack.push({ value: s[i], position: i });
      }
    }
    if (s[i] === "(") {
      paranthesesStack.push({ value: s[i], position: i });
    }
  }
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === ")") {
      if (
        !paranthesesStack.some(
          (paranthesesElement) => paranthesesElement.position === i
        )
      ) {
        result += s[i];
      }
      continue;
    }
    result += s[i];
  }

  return result;
};
