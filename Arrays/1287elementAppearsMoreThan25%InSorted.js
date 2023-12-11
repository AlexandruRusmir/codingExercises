/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = (arr) => {
    const twentyFivePercentOfLength = arr.length * 0.25;
    if (1 > twentyFivePercentOfLength) {
        return arr[0];
    }
    let currentStreakNumber = arr[0];
    let currentStreak = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== currentStreakNumber) {
            currentStreakNumber = arr[i];
            currentStreak = 1;
        } else {
            currentStreak++;
            if (currentStreak > twentyFivePercentOfLength) {
                return currentStreakNumber;
            }
        }
    }

    return currentStreakNumber;
};

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));