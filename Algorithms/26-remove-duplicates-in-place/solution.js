/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let uniq = 0;
  
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] != nums[i+1]){
          nums[uniq] = nums[i];
          uniq++;
      }
  }
  
  return uniq;
};
