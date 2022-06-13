/**
 * @param {string} s
 * @return {number}
 */

// Sliding window problem

var lengthOfLongestSubstring = function (s) {
  const strLen = s.length;
  const visitedCharIndexMap = {};
  let currentLen;
  let maxLen = 0;

  let currentSubStrStartIdx = 0;
  let longestSubStrStartIdx;

  visitedCharIndexMap[s[0]] = 0;

  let currIdx;
  for (currIdx = 1; currIdx < strLen; currIdx++) {

    // First occurrence => Store the char and the index 
    if (!visitedCharIndexMap.hasOwnProperty(s[currIdx])) {
      visitedCharIndexMap[s[currIdx]] = currIdx;
    }
    // Char Already Visited before.
    else {

      // Check If occurrence is after starting point of current substring
      if (visitedCharIndexMap[s[currIdx]] >= currentSubStrStartIdx) {
        // find length of current substring and
        // update maxlen and start accordingly.
        currentLen = currIdx - currentSubStrStartIdx;

        if (maxLen < currentLen) {
          maxLen = currentLen;
          longestSubStrStartIdx = currentSubStrStartIdx
        }

        // Next substring will start after the last
        // occurrence of current character to avoid
        // its repetition.
        currentSubStrStartIdx = visitedCharIndexMap[s[currIdx]] + 1
      }

      // Update the Occurrence index of the char
      visitedCharIndexMap[s[currIdx]] = currIdx;
    }
  }

  // Compare length of last
  // substring with maxlen and
  // update maxlen and start
  // accordingly.
  if (maxLen < currIdx - currentSubStrStartIdx) {
    maxLen = currIdx - currentSubStrStartIdx;
    longestSubStrStartIdx = currentSubStrStartIdx;
  }

  // The required longest substring without
  // repeating characters is from string[longestSubStrStartIdx]
  // to string[longestSubStrStartIdx + maxlen - 1].
  return s.substring(longestSubStrStartIdx, longestSubStrStartIdx + maxLen).length
};

console.log(lengthOfLongestSubstring('abcabcbb'))