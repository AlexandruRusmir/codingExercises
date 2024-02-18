/**
 * @param {string} s
 * @return {string}
 */
const lastNonEmptyString = (s) => {
    const letterAppearances = {}
    let maxAppearances = 0;
    for (const letter of s) {
        letterAppearances[letter] = (letterAppearances[letter] ?? 0) + 1;
        if (maxAppearances < letterAppearances[letter]) {
            maxAppearances = letterAppearances[letter];
        }
    }
    let res = '';
    const appeared = {}
    for (let i = s.length; i >= 0; i--) {
        if (letterAppearances[s[i]] === maxAppearances && !(appeared[s[i]] ?? false)) {
            res = s[i] + res;
        }
        appeared[s[i]] = true;
    }
    return res;
};

console.log(lastNonEmptyString("aabcbbca"));