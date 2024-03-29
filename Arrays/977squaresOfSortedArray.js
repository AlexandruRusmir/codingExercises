/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
    return nums.map(num => num * num).sort((a, b) => a - b);
};