/**
 * @param {string} s
 * @return {number}
 */

const getAllSubstrings = (s) => {
  const allSubStrings = [];
  // First loop for starting index
  for (let i = 0; i < s.length; i++) {
    // Second loop is generating sub-String
    for (let j = i+1; j <= s.length; j++) {
      allSubStrings.push(s.substring(i, j));
    }
  }
  return allSubStrings;
}

const getUniqueCharsCount = (s) => {

  // Edit this to remove repeated chars altogether
  const countSet = new Set();
  for (let index = 0; index < s.length; index++) {
    countSet.add(s[index]);
  }

  return countSet.size;
}

const uniqueLetterString = function (s) {
  const subStrCountMap = {};
  const allSubStrings = getAllSubstrings(s);
  let finalCount = 0;

  for (const substring of allSubStrings) {
    if (subStrCountMap[substring]) {
      finalCount += subStrCountMap[substring];
      subStrCountMap[substring] += subStrCountMap[substring]
    }
    else {
      let substrCount = getUniqueCharsCount(substring);
      subStrCountMap[substring] = substrCount;
      finalCount += substrCount;
    }
  }
  return finalCount;
};

console.log(uniqueLetterString("ABA"))

