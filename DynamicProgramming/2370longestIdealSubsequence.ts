const longestIdealString = (s: string, k: number): number => {
  const dp = new Array<number>(26).fill(0); //this stores the length of the longest ideal subsequence ending with each letter
  let result = 1;
  for (const letter of s) {
    const letterIndex = letter.charCodeAt(0) - "a".charCodeAt(0);
    for (let i = letterIndex; i >= 0 && i >= letterIndex - k; i--) {
      dp[letterIndex] = Math.max(dp[letterIndex], dp[i] + 1);
    }
    for (let i = letterIndex + 1; i < 26 && i <= letterIndex + k; i++) {
      dp[letterIndex] = Math.max(dp[letterIndex], dp[i] + 1);
    }
    result = Math.max(result, dp[letterIndex]);
  }

  return result;
};
