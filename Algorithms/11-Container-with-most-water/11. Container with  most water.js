/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {

  const area = (x1, y1, x2, y2) => {
    return (x2 - x1) * Math.min(y2, y1);
  }
};