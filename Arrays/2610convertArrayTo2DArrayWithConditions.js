/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = (nums) => {
    const queue = [...nums]
    const res = [[]]
    let j = 0;
    while (queue.length) {
        let i = 0;
        while (queue.length && i < queue.length) {
            if (res[j].includes(queue[i])) {
                i++;
            } else {
                res[j].push(queue[i]);
                queue.splice(i, 1);
            }
        }
        if (queue.length) {
            res.push([])
            j++;
        }
    }

    return res;
};

console.log(findMatrix([1,3,4,1,2,3,1]))