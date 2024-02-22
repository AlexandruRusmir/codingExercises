/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (n, trust) => {
    if (!trust.length) {
        if (n === 1) {
            return 1;
        } else {
            return -1;
        }
    }
    
    const trusts = {};
    const isTrustedBy = {};
    for (const [truster, trustee] of trust) {
        isTrustedBy[trustee] = (isTrustedBy[trustee] ?? 0) + 1;
        trusts[truster] = (trusts[truster] ?? 0) + 1;
    }
    for (const [person, trustedBy] of Object.entries(isTrustedBy)) {
        if (trustedBy === n - 1 && (trusts[person] ?? 0) === 0) {
            return person;
        }
    }

    return -1;
};