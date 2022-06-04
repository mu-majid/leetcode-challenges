
const PATTERN_LENGTH = 3;
/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
const mostVisitedPattern = function (username, timestamp, website) {
  const userVisitsIndx = [];
  const patterns = {};
  username.forEach((user, index) => {
    if (username[index] !== username[index + 1]) userVisitsIndx.push(index + 1)
    else return;
  });

  console.log(userVisitsIndx)

  for (let i = 0; i < userVisitsIndx.length; i++) {
    let prevElem = userVisitsIndx[i - 1];
    let element = userVisitsIndx[i];
    let userVisits = i === 0 ? website.slice(0, element) : website.slice(prevElem, element)

    let compPatterns = getPatternsCombinations(userVisits, PATTERN_LENGTH, []);
    console.log(compPatterns)
    compPatterns.forEach((pattern) => {
      patterns[pattern] = patterns[pattern] ? patterns[pattern] + 1 : 1
    });
  }

  console.log(patterns)

  return patterns;
};


const getPatternsCombinations = (array, minLen = PATTERN_LENGTH, prevArray = []) => {
  if (prevArray.length === minLen) {
    return [prevArray]
  }
  let combs = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let prevArrExtended = [...prevArray];
    prevArrExtended.push(element);
    combs.concat(getPatternsCombinations(array.slice(i+1), minLen, prevArrExtended));
  }

  return combs;
}

console.log(mostVisitedPattern(
  ["joe", "joe", "joe", "james", "james", "james", "james", "mary", "mary", "mary"],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["home", "about", "career", "home", "cart", "maps", "home", "home", "about", "career"]
));

