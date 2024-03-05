/**
 * @param {string} s
 * @return {number}
 */
const minimumLength = (s) => {
    let left = 0, right = s.length - 1;
    let reachedWhileIterating = false;
    while (left < right) {
        if (s[left] !== s[right]) {
            break;
        }
        const commonCharacter = s[left];
        while (s[left] === commonCharacter && left < right) {
            left ++;
        }
        if (left === right) {
            reachedWhileIterating = true;
        }
        while (s[right] === commonCharacter && right > left) {
            right --;
        }
    }

    return reachedWhileIterating ? 0 : right - left + 1;
};