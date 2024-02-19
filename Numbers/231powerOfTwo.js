/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
    if (n <= 0) {
        return false;
    }
    return Math.floor(Math.log2(n)) === Math.ceil(Math.log2(n));
};