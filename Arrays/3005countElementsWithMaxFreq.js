/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = (nums) => {
  const freq = {};
  let max = 0;
  for (const num of nums) {
    freq[num] = (freq[num] ?? 0) + 1;
    if (freq[num] > max) {
      max = freq[num];
    }
  }
  let countMaxFrequencyNumbers = Object.values(freq).filter(
    (frequency) => frequency === max
  ).length;

  return max * countMaxFrequencyNumbers;
};
