/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = (low, high) => {
    const strLowLength = low.toString().length;
    const strHighLength = high.toString().length;
    const res = [];
    for (let i = strLowLength; i <= strHighLength; i++) {
        for (let j = 1; j + i - 1 <= 9; j++) {
            let num = '';
            for (let l = j; l < j + i; l++) {
                num += l.toString();
            }
            num = Number(num);
            if (num >= low && num <= high) {
                res.push(num)
            }
        }
    }

    return res;
};

console.log(sequentialDigits(100, 300));
console.log(sequentialDigits(1000, 13000));