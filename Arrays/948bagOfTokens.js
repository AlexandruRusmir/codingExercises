/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
const bagOfTokensScore = (tokens, power) => {
    tokens.sort((a, b) => a - b);
    let left  = 0, right = tokens.length - 1;
    let score = 0, maxScore = 0;
    while (left <= right) {
        if (tokens[left] <= power) {
            score++;
            power -= tokens[left++];
            maxScore = Math.max(maxScore, score);
        } else if (left < right - 1) {
            score--;
            power += tokens[right--];
        } else {
            break;
        }
    }

    return maxScore;
};