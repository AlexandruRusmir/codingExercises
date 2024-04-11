const removeKdigits = (num: string, k: number): string => {
  const digitsStack: string[] = [];
  for (const char of num) {
    while (digitsStack.length && k > 0 && digitsStack.slice(-1)[0] > char) {
      digitsStack.pop();
      k--;
    }
    digitsStack.push(char);
  }
  while (k > 0 && digitsStack.length) {
    k--;
    digitsStack.pop();
  }
  while (digitsStack[0] === "0") {
    digitsStack.shift();
  }
  const result = digitsStack.join("");

  return result.length ? result : "0";
};
