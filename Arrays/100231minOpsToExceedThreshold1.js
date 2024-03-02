/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = (nums, k) => {
    nums.sort((a, b) => a - b);
    let i = 0;
    while (nums[i] < k) {
        i++;
    }

    return i;
};