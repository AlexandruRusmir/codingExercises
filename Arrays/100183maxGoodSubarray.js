/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = (nums, k) => {
    let max = -Infinity;
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (Math.abs(nums[i] - nums[j]) === k && sum > max) {
                max = sum;
            }
        }
    }

    return max;
};