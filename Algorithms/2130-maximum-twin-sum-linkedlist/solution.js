/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  const linkedlistAsArray = [];

  while(head !== null) {
    linkedlistAsArray.push(head.val);
    head = head.next;
  }

  const n = linkedlistAsArray.length;
  const findTwin = (i) => {
    return n - 1 - i;
  }
  let sum = 0;
  for (let i = 0; i <= ((n / 2) - 1); i++) {
    let currSum = (linkedlistAsArray[i] + linkedlistAsArray[findTwin(i)]);
    if (currSum > sum) {
      sum = currSum;
    }
  }

  return sum;
};

// console.log(pairSum([5,4,2,1]))
console.log(pairSum([4,2,2,3]))
console.log(pairSum([1,100000]))
