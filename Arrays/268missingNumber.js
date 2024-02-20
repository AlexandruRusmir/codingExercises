/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    const numsAppearances = new Array(nums.length + 1).fill(false);
    for (const num of nums) {
        numsAppearances[num] = true;
    }
    for (let i = 0; i < numsAppearances.length; i++) {
        if (!numsAppearances[i]) {
            return i;
        }
    }
};