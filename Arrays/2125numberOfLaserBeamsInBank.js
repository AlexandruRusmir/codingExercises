/**
 * @param {string[]} bank
 * @return {number}
 */
const numberOfBeams = (bank) => {
    let previousNumberOfLasers = 0;
    let totalNumberOfBeams = 0;
    for (let i = 0; i < bank.length; i++) {
        let currentNumberOfLasers = 0;
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') {
                currentNumberOfLasers++;
            }
        }
        if (currentNumberOfLasers) {
            if (previousNumberOfLasers) {
                totalNumberOfBeams += previousNumberOfLasers * currentNumberOfLasers;
            }
            previousNumberOfLasers = currentNumberOfLasers;
        }
    }

    return totalNumberOfBeams;
};

console.log(numberOfBeams(["000","111","000"]));