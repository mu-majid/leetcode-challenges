/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
  // groups array represents the length of same-character contiguous blocks within the string
  const groups = [1]; // first char is a group of its own
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      groups.push(1); // new char means new group
    } else {
      groups[groups.length - 1] += 1 // increase group size by 1
    }
  }

  ans = 0;
  for (let i = 1; i < groups.length; i++) {
    ans += Math.min(groups[i - 1], groups[i]); // min to have same number of 1 and 0 in two groups
  }

  return ans;
};