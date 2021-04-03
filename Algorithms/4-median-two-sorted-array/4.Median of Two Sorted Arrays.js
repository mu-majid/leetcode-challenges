/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

  const mergedArray = mergeTwoSortedArray(nums1, nums2);

  return calculateArrayMedian(mergedArray);
};

const mergeTwoSortedArray = (left_arr, right_arr) => {
  let lhs_itr = 0, 
      rhs_itr = 0, 
      output_array = [], 
      out_iter = 0;

  while(lhs_itr < left_arr.length && rhs_itr < right_arr.length) {

    if (left_arr[lhs_itr] <= right_arr[rhs_itr]) {
      output_array[out_iter] = left_arr[lhs_itr];
      lhs_itr = lhs_itr + 1;
    }
    else {
      output_array[out_iter] = right_arr[rhs_itr]
      rhs_itr = rhs_itr+1
    }

    // Update output arr index
    out_iter = out_iter + 1;
  }

  // handle array lengths are not equal
  while(lhs_itr < left_arr.length){

    output_array[out_iter] = left_arr[lhs_itr]
    lhs_itr = lhs_itr + 1
    out_iter = out_iter + 1
  }

  while(rhs_itr < right_arr.length){

    output_array[out_iter] = right_arr[rhs_itr]
    rhs_itr = rhs_itr + 1
    out_iter = out_iter + 1
  }

  return output_array;
}

const calculateArrayMedian = (arr) => {
  let supposedMiddle = Math.floor(arr.length / 2);

  if (arr.length % 2 !== 0) {
    return arr[supposedMiddle];
  } 
  else {
    return (arr[supposedMiddle - 1] + arr[supposedMiddle]) / 2
  }
}

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2], [3,4]))
console.log(findMedianSortedArrays([0,0], [0,0]))
console.log(findMedianSortedArrays([], [1]))
console.log(findMedianSortedArrays([2], []))



