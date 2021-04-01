/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Fails with Big Number + it is really messy
var addTwoNumbers2 = function (l1, l2) {
  let l1Num = [], l2Num = [];

  while (l1 !== null) {
    l1Num.push(l1.val);
    l1 = l1.next;
  }

  while (l2 !== null) {
    l2Num.push(l2.val);
    l2 = l2.next;
  }

  const linkedListAsNum = parseInt(l1Num.reverse().join('')) + parseInt(l2Num.reverse().join(''));
  const linkedListAsArr = String(linkedListAsNum).split("").map((num) => {
    return Number(num);
  });

  let node = undefined;
  linkedListAsArr.forEach(item => {
    if (node === undefined) {
      node = new ListNode(item);
    } else {
      const newNode = new ListNode(item);
      newNode.next = node;
      node = newNode;
    }
  });

  return node;
};

// Elementary Math!

var addTwoNumbers = function (l1, l2) {
  if (l1 == null && l2 == null) return 0;
  let dummie = new ListNode();
  let node = dummie;
  let carry = false;
  while (l1 || l2 || carry) {
    let new_value = 0;
    // sum nodes if availible
    if (l1) [new_value, l1] = [new_value + l1.val, l1.next];
    if (l2) [new_value, l2] = [new_value + l2.val, l2.next];
    // take care of the carry
    if (carry) [new_value, carry] = [new_value + 1, false]; // Since Node Value is 0 <= val <= 9, carry will always be 1
    if (new_value >= 10) carry = true;
    // append new node
    node.next = new ListNode(new_value % 10);
    node = node.next;
  }
  return dummie.next;
}