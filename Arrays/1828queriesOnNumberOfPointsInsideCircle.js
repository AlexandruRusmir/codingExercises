/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = (points, queries) => {
    /**
     * 
     * @param {number} p1x 
     * @param {number} p1y 
     * @param {number} p2x 
     * @param {number} p2y
     * @return {number}
     */
    const calculateDistanceBetweenTwoPoints = (p1x, p1y, p2x, p2y) => {
        return Math.sqrt(Math.pow(p1x - p2x, 2) + Math.pow(p1y - p2y, 2))
    }
    const answer = [];
    queries.forEach(query => {
        let numberOfPointsInside = 0;
        points.forEach(point => {
            const distanceBetweenPointAndCircleOrigin = calculateDistanceBetweenTwoPoints(point[0], point[1], query[0], query[1]);
            if (distanceBetweenPointAndCircleOrigin <= query[2]) {
                numberOfPointsInside++;
            }
        });

        answer.push(numberOfPointsInside);
    });

    return answer;
};