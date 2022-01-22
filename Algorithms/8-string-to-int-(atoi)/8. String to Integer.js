/**
 * @param {string} s
 * @return {number}
 */

/**
 * This Implementation will get the first number in the string and log it
 */

const myAtoi = function (s) {
  if (!s || s.length === 0) {
    return null;
  }

  const trimmed = s.trimStart();
  let negative = false;
  let foundNumber = false;
  let finalNum = '';

  for (let index = 0; index < trimmed.length; index++) {
    const char = trimmed[index];
    if (char === '-') {
      negative = true;
    }
    if (parseInt(char)) {
      foundNumber = true;
      finalNum += char;
    }
    if (foundNumber && !parseInt(trimmed[index + 1])) {
      break;
    }
  }
  finalNum = parseInt(finalNum);



  if (finalNum >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1
  } 
  else if (finalNum <= Math.pow(-2, 31)) {
    return Math.pow(-2, 31)
  } 
  else {
    return negative ? -finalNum : finalNum;
  }
};

console.log(myAtoi(" with words 987"));     // --> 987
console.log(myAtoi(" 123 with words 987")); // --> 123
console.log(myAtoi(" -24 with words 987")); // --> -24


// Accepted solution (Same behviour as parseInt in Javascript - we just do some boundaries checks)

const myAtoi2 = function (s) {
  if (!s || s.length === 0) {
    return null;
  }

  const trimmed = s.trimStart();
  const finalNum = parseInt(trimmed, 10);

  if(!finalNum) {
    return 0; 
  }
  else if (finalNum >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1
  }
  else if (finalNum <= Math.pow(-2, 31)) {
    return Math.pow(-2, 31)
  } 
  else {
    return  finalNum;
  }
};