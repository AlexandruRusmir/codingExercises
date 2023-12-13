/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = (mat) => {
    let numberOfSpecials = 0;
    const oneAboveForRow = Array(mat[0].length).fill(false);
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                oneAboveForRow[j] = true;
                let onlyOnePerRow = true;
                for (let l = j + 1; l < mat[0].length; l++) {
                    if (mat[i][l] === 1) {
                        onlyOnePerRow = false;
                        oneAboveForRow[j] = true;
                    }
                }
                if (onlyOnePerRow && !oneAboveForRow[j]) {
                    let onlyOnePerColumn = true;
                    for (let p = i + 1; p < mat.length; p ++) {
                        if (mat[p][j] === 1) {
                            onlyOnePerColumn = false;
                            break;
                        }
                    }
                    if (onlyOnePerColumn) {
                        numberOfSpecials++;
                    }
                }
                break;
            }
        }
    }
};