/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  return points
    .map((p, idx) => {
      return [calcDistance(p), idx];
    })
    .sort((a, b) => a[0] - b[0])
    .slice(0, k)
    .map(([d, idx]) => points[idx])

};

const calcDistance = (point) => {
  return Math.sqrt(Math.pow((point[0] - 0), 2) + Math.pow((point[1] - 0), 2));
}