/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const set_intersection = (smallerSet, largerSet) => {
  const output = [];
  for (let sElem of smallerSet) {
    if (largerSet.has(sElem)) output.push(sElem)
  }
  return output;
}
const intersection = function (nums1, nums2) {
  const set1 = new Set();
  for (let n of nums1) set1.add(n);
  const set2 = new Set();
  for (let n of nums2) set2.add(n);

  if (set1.size < set2.size) {
    return set_intersection(set1, set2);
  }
  else {
    return set_intersection(set2, set1);

  }
};