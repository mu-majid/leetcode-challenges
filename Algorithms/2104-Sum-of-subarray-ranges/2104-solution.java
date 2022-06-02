/**
 * The idea is:
 * for each element in the array, find the No. of subarrays that element is a Max and a Min.
 * Answer = Sum(No. of subarrays elem is Max * elem) - Sum(No. of subarrays elem is Min * elem)
 */

class Solution {
  public long subArrayRanges(int[] nums) {
    return getSum(nums,false)-getSum(nums,true);
  }

  // to find these subarrays of elements we will use monotonic stack
  // decreasing stack: Finds previous greater and next greater elements
    // When we pop, means that inserted elem is next greater for all popped elem
    // when we push, means all elements in stack are previous greater of elem being pushed

  // increasing stack: Finds previous lesser and next lesser elements
  
  private long getSum(int[] nums, boolean min){
    Stack<Integer> stack = new Stack<>();
    stack.push(-1);
    int n = nums.length;
    long sum = 0L;
    for(int i = 0; i <= n; i++){
      while (stack.peek()!=-1 && (i==n || (min && nums[stack.peek()]>nums[i]) || (!min && nums[stack.peek()]<nums[i]))){
        int pos = stack.pop();
        int v = nums[pos];
        long dist = (i-pos)*(pos-stack.peek());
        sum += dist*v;
      }
      stack.push(i);
    }
    return sum;
  }
}