/**
 * @param {string} s 
 * @return {string}
 */
const removeStars = (s) => {
    const stack = [];
    for (const letter of s) {
        if (letter === '*') {
            stack.pop();
        } else {
            stack.push(letter);
        }
    }

    return stack.join("");
}

console.log(removeStars("leet**cod*e"));