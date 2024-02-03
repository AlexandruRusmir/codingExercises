/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfPairs = (points) => {
    let count = 0;
    const n = points.length;

    const positionNotGood = (x, y, x1, y1, x2, y2) => {
        return x >= x1 && x <= x2 && y <= y1 && y >= y2;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                continue
            }
            const chisatoX = points[i][0];
            const chisatoY = points[i][1];
            const takinaX = points[j][0];
            const takinaY = points[j][1];

            if ((chisatoX < takinaX && chisatoY > takinaY) || (chisatoX === takinaX && chisatoY > takinaY || chisatoY === takinaY && chisatoX < takinaX)) {
                let valid = true;

                for (let k = 0; k < n; k++) {
                    if (k !== i && k !== j) {
                        if (positionNotGood(points[k][0], points[k][1], chisatoX, chisatoY, takinaX, takinaY)) {
                            valid = false;
                            break;
                        }
                    }
                }

                if (valid) {
                    count++;
                }
            }
        }
    }

    return count;
};