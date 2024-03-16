/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfEncryptedInt = (nums) => {
  /**
   * @param {number} num
   * @return {number}
   */
  const getEncryptedNum = (num) => {
    const strNum = num.toString();
    const maxLetter = Math.max(...strNum.split(""));

    return Number(maxLetter.toString().repeat(strNum.length));
  };

  let sum = 0;
  for (const num of nums) {
    sum += getEncryptedNum(num);
  }

  return sum;
};

console.log(sumOfEncryptedInt([10, 21, 31]));
