/**
 * 
 * @param {string} s 
 * @param {string} t 
 * @return {number}
 */
const minSteps = (s, t) => {
    const apperances = {};
    for (const letter of s) {
        apperances[letter] = apperances[letter] ? apperances[letter] + 1 : 1;
    }
    for (const letter of t) {
        if (apperances[letter]) {
            apperances[letter] --;
        }
    }
    
    let sum = 0;
    for (const letterApperance of Object.values(apperances)) {
        if (letterApperance > 0) {
            sum += letterApperance;
        }
    }

    return sum;
}

console.log(minSteps("bab", "aba"));