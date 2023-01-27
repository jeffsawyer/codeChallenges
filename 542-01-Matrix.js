/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let m = mat.length; // x size of matrix
    let n = mat[0].length; // y size of matrix
    let isValid = ((cell) => {
        if (cell[0] < 0 || cell[0] >= m || cell[1] < 0 || cell[1] >= n) return false;
        return true;
    });
    // let distMat = Array.from({length: m}, () => new Array(n));
    let distMat = Array.from({length: m}, () => Array.from({length: n}, () => -1));
    let queue = new Array();

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (mat[i][j]===0) {
                // distance to closest 0 is 0 (itself)
                distMat[i][j] = 0;
                // store as a source we want to search from for a 1
                queue.push([i, j]);
            }
        }
    }

    const dx = [-1, 1,  0, 0];
    const dy = [ 0, 0, -1, 1];
    // in order, this will represent checking: left, right, up, down

    while (queue.length>0) {
        const currentCell = queue[0]; // should give me [i, j]
        queue.shift(); // remove this (first item) from the queue
        let cx = currentCell[0]; // x location of current cell
        let cy = currentCell[1]; // y location of current cell
        for (let d=0;d<4;d++) {
            let neighbor = [cx + dx[d], cy + dy[d]];
            let nx = neighbor[0]; // x location of neighbor cell
            let ny = neighbor[1]; // y location of neighbor cell
            if (isValid(neighbor) && distMat[nx][ny] === -1) {
                // valid neighbor and not yet visited
                distMat[nx][ny] = distMat[cx][cy] + 1;
                queue.push(neighbor);
            }
        }
    }
    return distMat;
};


/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let m = mat.length; // x size of matrix
    let n = mat[0].length; // y size of matrix
    let isValid = ((cell) => {
        if (cell[0] < 0 || cell[0] >= m || cell[1] < 0 || cell[1] >= n) return false;
        return true;
    });
    let queue = [];

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (mat[i][j]===0) {
                // store as a source we want to search from for a 1
                // distance to closest 0 is 0 (itself)
                queue.push([i, j]);
            } else {
                // non-zero, shouldn't be a source and will need to be
                // checked later, for now initialize to -1
                mat[i][j] = -1;
            }
        }
    }

    const dir = [[-1, 0], [1, 0], [0,-1], [0, 1]];
    // in order, this will represent checking: left, right, up, down

    while (queue.length>0) {
        // get first x, y from first element in queue and remove from queue
        const [cx, cy] = queue.shift();
        for (let d=0;d<4;d++) {
            const neighbor = [cx + dir[d][0], cy + dir[d][1]];
            const [nx, ny] = neighbor;
            if (
                !(nx < 0 || nx >= m || ny < 0 || ny >= n)
                && mat[nx][ny] === -1
            ) {
                // valid neighbor and not yet visited
                mat[nx][ny] = mat[cx][cy] + 1;
                queue.push(neighbor);
            }
        }
    }
    return mat;
};