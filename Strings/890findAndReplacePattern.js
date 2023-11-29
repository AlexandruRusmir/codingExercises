const findAndReplacePattern = (words, pattern) => {
    const result = [];
    const patternMap = new Map();
    const patternArr = pattern.split('');
    for (let i = 0; i < patternArr.length; i++) {
        if (!patternMap.has(patternArr[i])) {
            patternMap.set(patternArr[i], i);
        }
    }
    words.forEach(word => {
        const wordMap = new Map();
        const wordArr = word.split('');
        for (let j = 0; j < wordArr.length; j++) {
            if (!wordMap.has(wordArr[j])) {
                wordMap.set(wordArr[j], j);
            }
            if (wordMap.get(wordArr[j]) !== patternMap.get(patternArr[j])) {
                return;
            }
        }

        result.push(word);
    })

    return result;
};

console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"));