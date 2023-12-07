/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
const numOfPairs = (nums, target) => {
    let result = 0;
    for (let i = 0; i < nums.length; i ++) {
        for (let j = 0; j < nums.length; j ++) {
            if (j === i) {
                continue;
            }
            if (nums[i] + nums[j] === target) {
                result ++;
            } 
        }
    }

    return result;
};

console.log(numOfPairs(nums = ["777","7","77","77"], target = "7777"));