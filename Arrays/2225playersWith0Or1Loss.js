/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = (matches) => {
    const numberOfLosses = {};

    for (const [winner, loser] of matches) {
        if (!(winner in numberOfLosses)) {
            numberOfLosses[winner] = 0;
        }
        if (loser in numberOfLosses) {
            numberOfLosses[loser]++;
        } else {
            numberOfLosses[loser] = 1;
        }
    }

    const playersWithNoLosses = [];
    const playersWithOneLoss = [];

    for (const [player, losses] of Object.entries(numberOfLosses)) {
        if (losses === 0) {
            playersWithNoLosses.push(player);
        } else if (losses === 1) {
            playersWithOneLoss.push(player);
        }
    }

    return [playersWithNoLosses.sort((a, b) => a - b), playersWithOneLoss.sort((a, b) => a - b)];
};
