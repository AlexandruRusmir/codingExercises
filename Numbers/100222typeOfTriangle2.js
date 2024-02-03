/**
 * @param {number[]} nums
 * @return {string}
 */
const triangleType = (nums) => {
    if (nums[0] + nums[1] <= nums[2] || nums[1] + nums[2] <= nums[0] || nums[0] + nums[2] <= nums[1]) {
        return 'none';
    }
    if (nums[1] == nums[2] && nums[0] == nums[2]) {
        return 'equilateral';
    }
    if (nums[1] == nums[2] || nums[0] == nums[2] || nums[0] == nums[1]) {
        return 'isosceles';
    }
    return 'scalene';
};
