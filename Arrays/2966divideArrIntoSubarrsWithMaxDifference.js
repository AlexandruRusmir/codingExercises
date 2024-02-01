/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
const divideArray = (nums, k) => {
    nums.sort((a, b) => a - b);
    const result = [];
    let temp = [nums[0]];
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] > k) {
            return [];
        }
        result.push([nums[i], nums[i + 1], nums[i + 2]])
    }

    return result;
};

console.log(divideArray([6,10,5,12,7,11,6,6,12,12,11,7], 2));
// console.log(divideArray([1,3,3,2,7,3], 3));