/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const letterAppearances = {}
    for (let i = 0; i < s.length; i++) {
        letterAppearances[s[i]] = {
            firstAppearance: (letterAppearances[s[i]]?.firstAppearance ?? i),
            appearances: (letterAppearances[s[i]]?.appearances ?? 0) + 1
        };
    }
    for (const [letter, letterAppearance] of Object.entries(letterAppearances)) {
        if (letterAppearance?.appearances === 1) {
            return letterAppearance?.firstAppearance;
        }
    }
    return -1;
};

console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));