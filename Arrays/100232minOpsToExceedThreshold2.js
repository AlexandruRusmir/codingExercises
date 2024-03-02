/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = (nums, k) => {
    let numOfOps = 0;
    nums.sort((a, b) => a - b);
    while (nums.length > 1 && nums[0] < k) {
        const newNumber = nums.shift() * 2 + nums.shift();
        if (nums[0] > newNumber) {
            nums.unshift(newNumber);
        } else {
            let newNumberAdded = false;
            for (let i = 1; i < nums.length; i++) {
                if (newNumber < nums[i]) {
                    nums.splice(i, 0, newNumber);
                    newNumberAdded = true;
                    break;
                }
            }
            if (!newNumberAdded) {
                nums.push(newNumber);
            }
        }
        numOfOps++;
    }

    return numOfOps;
};

console.log(minOperations(nums = [2,11,10,1,3], k = 10));
console.log(minOperations(nums = [1,1,2,4,9], k = 20));
console.log(minOperations([12,49,85,36,20,37], 44));