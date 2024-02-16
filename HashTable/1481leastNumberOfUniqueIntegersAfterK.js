/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = (arr, k) => {
    const letterAppearances = {}
    for (const num of arr) {
        letterAppearances[num] = (letterAppearances[num] ?? 0) + 1;
    }
    const numsWithAppearances = [];
    for (const [num, appearance] of Object.entries(letterAppearances)) {
        numsWithAppearances.push([num, appearance]);
    }
    numsWithAppearances.sort((a, b) => a[1] - b[1]);
    let numOfRemovals = 0;
    while (numOfRemovals <= k && numsWithAppearances.length) {
        if (numsWithAppearances[0][1] + numOfRemovals > k) {
            return numsWithAppearances.length;
        }
        numOfRemovals += numsWithAppearances[0][1]
        numsWithAppearances.shift();
    }
    return numsWithAppearances.length;
};