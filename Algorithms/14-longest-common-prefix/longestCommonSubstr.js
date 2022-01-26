/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonSubstr = function (strs) {
  const l = strs.length;
  let finalStr = '';
  const letters = [];
  const frequen = [];

  for (let index = 0; index < strs.length; index++) {
    const str = strs[index];

    for (let j = 0; j < str.length; j++) {
      const char = str[j];
      if (letters.includes(char)) {
        frequen[letters.indexOf(char)] += 1;
      }
      else {
        letters.push(char);
        frequen.push(1);
      }
    }
    
  }

  let maxFreq = Math.max(...frequen);
  let decreaseOccured = false;
  for (let i = 0; i < letters.length && !decreaseOccured; i++) {
    if (frequen[i] < frequen[i - 1]) {
      decreaseOccured = true;
    }
    if (frequen[i] === maxFreq) {
      finalStr += letters[i];
    }
  }
  const allStrsHasFinalSubStr = (currentValue) => currentValue.includes(finalStr);

  return strs.every(allStrsHasFinalSubStr) ? finalStr : '';
};

// console.log(longestCommonSubstr(["flower","flow","flight"]))
// console.log(longestCommonSubstr(["dog","racecar","car"]))
// console.log(longestCommonSubstr(["cir","car"]))
console.log(longestCommonSubstr(["reflower","flow","flight"]))

