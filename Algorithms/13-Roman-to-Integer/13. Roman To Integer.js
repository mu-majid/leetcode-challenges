/**
 * @param {string} s
 * @return {number}
 */

const romanToIntMap = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1
}

const romanToInt = function (s) {
  let result = 0;
  let i = 0;
  // loop over the roman num
  while (i < s.length) {
    // check for the 6 special cases and update i accordingly
    if (romanToIntMap.hasOwnProperty(s[i] + s[i+1])) {
      result = result + romanToIntMap[`${s[i] + s[i+1]}`];
      i += 2
    }
    else {
      result = result + romanToIntMap[s[i]];
      i += 1
    }
  }

  return result;
};

console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("III"))
