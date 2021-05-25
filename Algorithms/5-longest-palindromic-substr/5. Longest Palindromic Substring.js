/**
 * 
 * Expanding From Middle Solution.
 */
const longestPalindrome = (s) => {
  if (s.length < 1) return "";

  let maxSubStart = 0;
  let maxSubLength = 0;

  for (let i = 0; i < s.length; i++) {
    const lengthCenteredAtChar = expandAroundCenter(s, i, i);
    const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);
    const longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace);

    if (longestSubAtChar > maxSubLength) {
      maxSubLength = longestSubAtChar;
      maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
    }
  }

  return s.substr(maxSubStart, maxSubLength);
}

const expandAroundCenter = (s, left, right) => {
  if (s === null || left > right) return 0;

  // Means that we start from middle and continue expanding only if we are in the string boundaries and also the characters match
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}