/**
 * 
 * @param {string} s 
 * @param {string} part 
 */
const removeOccurences = (s, part) => {
    while ((appearanceIndex = s.indexOf(part)) >= 0) {
        s = s.slice(0, appearanceIndex) + s.slice(appearanceIndex + part.length)
    }

    return s;
}

console.log(removeOccurences(s = "axxxxyyyyb", part = "xy"));