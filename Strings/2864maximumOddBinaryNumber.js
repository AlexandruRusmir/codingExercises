/**
 * @param {string} s
 * @return {string}
 */
const maximumOddBinaryNumber = (s) => {
    let oneFreq = 0;
    let zeroFreq = 0;
    for (const char of s) {
        if (char === '1') {
            oneFreq++;
        } else {
            zeroFreq++;
        }
    }
    let res = '';
    for (let i = 0; i < oneFreq - 1; i++) {
        res += '1';
    }
    for (let i = 0; i < zeroFreq; i++) {
        res += '0';
    }

    return res + '1';
};