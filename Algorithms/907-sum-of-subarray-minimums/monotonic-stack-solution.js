/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const increasingMonotonicStack = [];
  const previousLesser = new Array(arr.length);
  const nextLesserOrEqual = new Array(arr.length).fill(arr.length); // fill incase an elemnt has no next lesser, then rightPoss = length - elemIndex

  for (let i = 0; i < arr.length; i++) {
    // check if current element breaks our increasing monotonic stack property
    // if so, pop the elem on top of stack, and modify its nextLesser index
    while (
      increasingMonotonicStack.length && 
      arr[i] <= arr[increasingMonotonicStack[increasingMonotonicStack.length-1]]
    ) {
      nextLesserOrEqual[increasingMonotonicStack[increasingMonotonicStack.length-1]] = i;
      increasingMonotonicStack.pop();
    }
    
    previousLesser[i] = !increasingMonotonicStack.length ? 
      -1 : // for first elem in arr
      increasingMonotonicStack[increasingMonotonicStack.length - 1]

    increasingMonotonicStack.push(i);
  }

  let sum = 0;
  const MOD = 1e9 + 7;

  for (let i = 0; i < arr.length; i++) {
    let leftPositions = i - previousLesser[i];
    let rightPositions = nextLesserOrEqual[i] - i;

    sum += arr[i] * leftPositions * rightPositions;
    sum %= MOD;
  }

  return sum;
};