/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const result = [];
  if (nums.length == 0) return result;
  const deque = []; // Element at o index is the Max
  const add = n => {
    while (deque.length > 0 && n > deque[deque.length - 1]) {
      deque.pop();
    }
    deque.push(n);
  }

  const remove = n => {
    if (n == deque[0]) {
      deque.shift();
    }
  }

  let j = 0; // start of the window

  nums.forEach((n, index) => {
    add(n);
    if (index >= (k - 1)) { // window reached -> pick max and remove it from deque
      result.push(deque[0]);
      remove(nums[j]);
      j++;
    }
  });
  return result;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);