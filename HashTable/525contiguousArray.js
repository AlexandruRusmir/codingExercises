// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const findMaxLength = (nums) => {
//   let maxLen = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     let sum = nums[i] === 1 ? 1 : -1;
//     let maxLenForCurrentTraversal = 0;
//     for (let j = i + 1; j < nums.length; j++) {
//       sum += nums[j] === 1 ? 1 : -1;
//       if (sum === 0) {
//         maxLenForCurrentTraversal = j - i + 1;
//       }
//     }
//     maxLen = Math.max(maxLen, maxLenForCurrentTraversal);
//   }

//   return maxLen;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
  const firstApperanceForDiff = new Map();
  let ones = 0,
    zeros = 0;
  let maxLength = 0;
  firstApperanceForDiff.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? zeros++ : ones++;
    const diff = ones - zeros;

    if (!firstApperanceForDiff.has(diff)) {
      firstApperanceForDiff.set(diff, i);
      continue;
    }
    maxLength = Math.max(i - firstApperanceForDiff.get(diff), maxLength);
  }

  return maxLength;
};
