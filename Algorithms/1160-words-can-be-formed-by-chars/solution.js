/**
 * Count all the instances of each lowercase character in the given string
 * and return an array with those counts in an array with indices of the
 * alphabetical index of that character i.e. 0-25 = a-z
 *
 * @param {string} str
 * @return {number[]}
 */
const strToCntArr = str => {
  // Create the array of all the character counts
  const arr = new Array(26).fill(0);
  // Increment the count for each character in the string
  for (let i = 0; i < str.length; i++) arr[str.charCodeAt(i) - 97]++;
  // Return the array with all the counts
  return arr;
};

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) => {
  // The sum of length of the valid words
  let sum = 0;
  // Get the array with the counts of the characters we have
  const have = strToCntArr(chars);
  // Loop through the words
  outer: for (const word of words) {
    // Continue if we need more more total characters than we have
    if (chars.length < word.length) continue;
    // Get the array with the counts of the characters we need
    const need = strToCntArr(word);
    // Continue the outer loop when we need more characters than we have
    for (let i = 0; i < 26; i++) if (have[i] < need[i]) continue outer;
    // Any word that reaches this point is valid, so add the length to sum
    sum += word.length;
  }
  // Return the sum of the lengths of all the valid words
  return sum;
};