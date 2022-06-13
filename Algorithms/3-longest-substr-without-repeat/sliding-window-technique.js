var lengthOfLongestSubstring = function (s) {
  let windowStart = 0;
  let windowSlider = 0;
  let max = 0;

  const seen = new Map();

  while (windowSlider < s.length) {
    if (!seen.has(s[windowSlider])) {
      seen.set(s[windowSlider]);
      windowSlider++;
      max = Math.max(max, seen.size);
    }
    else {
      seen.delete(s[windowStart]);
      windowStart++;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'))