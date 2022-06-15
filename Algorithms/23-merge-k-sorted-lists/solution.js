/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) {
    return new ListNode().next;
  }

  while (lists.length > 1) {
    const mergedLists = [];

    for (let i = 0; i < lists.length; i = i + 2) {
      mergedLists.push(mergeTwoLists(lists[i], i + 1 < lists.length ? lists[i + 1] : null));
    }
    lists = mergedLists;
  }
  return lists[0]

};

var mergeTwoLists = function (l1, l2) {
  let list = new ListNode()
  let head = list

  while (l1 !== null && l2 !== null) {

    // Select the smallest value from either linked list,
    // then increment that list forward.
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      list.next = new ListNode(l2.val)
      l2 = l2.next
    }

    list = list.next
  }

  // It's possible that one linked list is shorter than the other so we just
  // add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null)
    list.next = l1
  if (l2 !== null)
    list.next = l2

  // return .next because this first element in the linkedlist is empty
  return head.next
};