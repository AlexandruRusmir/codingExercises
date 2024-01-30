/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
    const OPS = ['+', '-', '*', '/'];
    const isOperation = (val) => {
        return OPS.includes(val);
    }

    const applyOperation = (val2, val1, operation) => {
        switch (operation) {
            case '+':
                return val1 + val2;
            case '-':
                return val1 - val2;
            case '*':
                return val1 * val2;
            case '/':
                return Math.trunc(val1 / val2);
        }
    }

    const numsStack = [];
    for (const token of tokens) {
        if (isOperation(token)) {
            numsStack.push(applyOperation(numsStack.pop(), numsStack.pop(), token));
        } else {
            numsStack.push(Number(token));
        }
    }

    return numsStack[0];
};

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));