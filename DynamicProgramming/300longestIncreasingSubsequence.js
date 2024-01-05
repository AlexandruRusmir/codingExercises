/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
    const sortedNums = [...nums].sort((a, b) => a - b);
    let longestSubsequence = 1;
    for (let i = 0; i < sortedNums.length; i++) {
        
    }
};

console.log((lengthOfLIS([10,9,2,5,3,7,101,18])));