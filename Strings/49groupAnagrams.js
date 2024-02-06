/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const sortString = (str) => {
        return str.split('').sort().join('');
    }

    const sortedStringsToActualStrings = {};
    strs.forEach(string => {
        const sortedString = sortString(string);
        const anagrams = sortedStringsToActualStrings[sortedString] ?? [];
        anagrams.push(string);
        sortedStringsToActualStrings[sortedString] = anagrams;
    })

    return Object.values(sortedStringsToActualStrings);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));