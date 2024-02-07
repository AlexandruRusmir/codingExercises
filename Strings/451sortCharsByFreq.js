/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
    const letters = {}
    for (const char of s) {
        letters[char] = (letters[char] ?? 0) + 1;
    }
    const lettersWithAppearances = [];
    for (const [letter, appearance] of Object.entries(letters)) {
        lettersWithAppearances.push([letter, appearance]);
    }
    lettersWithAppearances.sort((a, b) => b[1] - a[1]);
    
    return lettersWithAppearances.reduce((accumulator, letterWithAppearance) => accumulator + letterWithAppearance[0].repeat(letterWithAppearance[1]), '');
};

console.log(frequencySort("tree"));