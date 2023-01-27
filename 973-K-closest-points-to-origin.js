/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    // return points.sort((a, b) => (a[0] ** 2 + a[1] ** 2) - (b[0] ** 2 + b[1] ** 2)).splice(0,k)
    let dist = ((x, y) => {
        return Math.sqrt(x ** 2 + y ** 2);
    });

    // search for points from 0, 0
    // store distance of points from 0, 0 in a reference table
    const distAndPoints = [];
    for (let i=0; i<points.length; i++) {
        const [x, y] = points[i];
        const calculatedDist = dist(x, y);
        distAndPoints.push([calculatedDist, i]); // store distance and location
    }

    return distAndPoints.sort((a, b) => a[0] - b[0]).splice(0, k).map((item) => points[item[1]]);
};