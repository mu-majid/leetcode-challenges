/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {

  let maximumArea = Number.MIN_SAFE_INTEGER;
  let leftPtr = 0;
  let rightPtr = height.length - 1;

  while (leftPtr < rightPtr) {
    let shorterHeight = Math.min(height[leftPtr], height[rightPtr]);
    maximumArea = Math.max(maximumArea, shorterHeight * (rightPtr - leftPtr))

    if (height[leftPtr] < height[rightPtr]) {
      leftPtr++;
    }
    else {
      rightPtr--;
    }
  }

  return maximumArea;
};