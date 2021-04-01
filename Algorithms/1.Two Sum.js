/**
 * Two pointers, One at first, and the other at the end
  sum the numbers at the pointers:
    1. If sum > target => Move the pointer at the end to the left
    2. If sum < target => Move the pointer at the beginning to the right 
    3. If sum == target => return the indexes.
*/

// Fails if number are equal : Example [3,3] target 6
var twoSum = function(nums, target) {
  // Sort The nums Array Without changing original
  const sorted = [...nums].sort((a, b) => (a - b));

  let rightPtr = 0, leftPtr = sorted.length - 1;
  let sum, indexes, found;
  while (!found) {
    sum = sorted[rightPtr] + sorted[leftPtr];

    if (sum > target) {
      leftPtr = leftPtr - 1;
    }
    else if (sum < target) {
      rightPtr = rightPtr + 1;
    }
    else {
      found = true; 
      indexes = [rightPtr, leftPtr];
    }
  }

  return [nums.indexOf(sorted[rightPtr]), nums.indexOf(sorted[leftPtr])];
};

var twoSum2 = function(nums, target) {
  // Using A HashMap, and checking each element and if its complement is in the HashMap
  // If complement is not in MAp, continue to next element, if it is in the map, then return this element's index and its complement index

  const valueToIndexMap = {}

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (valueToIndexMap.hasOwnProperty(target - element)) {
      return [index, valueToIndexMap[target - element]]
    }
    valueToIndexMap[element] = index;
  }
};

console.log(twoSum2([2,7,11,15], 9));