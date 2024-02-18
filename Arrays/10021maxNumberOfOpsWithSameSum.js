/**
 * @param {number[]} nums
 * @return {number}
 */
const maxOperations = (nums) => {
    let numOfOps = 1;
    const sum = nums.shift() + nums.shift();
    while (nums.length > 1) {
        if (nums.shift() + nums.shift() !== sum) {
            break;
        }
        numOfOps++;
    }
    
    return numOfOps;
};