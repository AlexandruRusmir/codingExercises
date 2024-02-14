/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = (nums) => {
    const positiveNumbers = [];
    const negativeNumbers = [];
    for (const num of nums) {
        if (num < 0) {
            negativeNumbers.push(num);
        } else {
            positiveNumbers.push(num);
        }
    }
    const res = [];
    for (let i = 0; i < positiveNumbers.length; i++) {
        res.push(positiveNumbers[i]);
        res.push(negativeNumbers[i]);
    }

    return res;
};