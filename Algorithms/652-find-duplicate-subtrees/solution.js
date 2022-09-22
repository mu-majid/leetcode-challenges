/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

// Time: O(N) - N nodes
// Space: O(N) - N nodes
var process = (root, map, rArr) => {
  if (root == null) return "";
  let left = `(${process(root.left, map, rArr)})`;
  let right = `(${process(root.right, map, rArr)})`;
  let res = root.val + left + right;


  if (!map.hasOwnProperty(res)) map[res] = 0;
  map[res] += 1;
  //check the map if duplicate exists 
  // if yes push them to resultant array
  if (map[res] == 2) rArr.push(root);
  return res;

}
var findDuplicateSubtrees = (root) => {
  //frequency map
  var map = {};
  var rArr = [];
  process(root, map, rArr);
  return rArr;
};