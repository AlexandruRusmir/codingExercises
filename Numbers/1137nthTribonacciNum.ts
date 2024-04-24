// const tribonacci = (n: number): number => {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   if (n === 2) {
//     return 1;
//   }
//   return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
// };

const tribonacci = (n: number): number => {
  const dp = new Array<number>(n + 1).fill(0);
  (dp[0] = 0), (dp[1] = 1), (dp[2] = 1);
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};
