var subArrayRanges = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let max = -Infinity; let min = Infinity;
    for (let j = i; j < nums.length; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
      sum += (max - min);
    }
  }
  return sum;
};