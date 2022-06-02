// The main Idea is to calculate how many substrings a specific charatcter is unique in

var uniqueLetterString = function (s) {
  let last = new Map(), penultimate = new Map();
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let lastIdx = last.get(s[i]) ?? -1;
    let penultimateIdx = penultimate.get(s[i]) ?? -1;

    res += (i - lastIdx) * (lastIdx - penultimateIdx);

    penultimate.set(s[i], lastIdx);
    last.set(s[i], i);
  }

  console.log(last);

  last.forEach((value, key) => {
    res += (s.length - value) * (value - (penultimate.get(key) ?? -1));
  });

  return res;
};

const otherFormat = (s) => {
  const charsToIndexesMap = {};
  for (let i = 0; i < s.length; i++) {
    if (charsToIndexesMap[s[i]]) {
      charsToIndexesMap[s[i]].push(i)
    }
    else {
      charsToIndexesMap[s[i]] = [i]
    }
  }
  // Example "ABA" => maps is { A: [ 0, 2 ], B: [ 1 ] }
  let sum = 0;
  for (const [char, indexOccurences] of Object.entries(charsToIndexesMap)) {
    console.log("Processing ", char, " >> ", indexOccurences)

    for (let i = 0; i < indexOccurences.length; i++ ) {
      let leftPossibilities = i === 0 ? // check if we are at the first occurence of a char
        indexOccurences[i] + 1 : // letter B in our example: (A(B -> 1 is added to account for ( before A
        indexOccurences[i] - indexOccurences[i - 1];


      let rightPossibilities = i === indexOccurences.length - 1 ? // check if we are at the last occurence of char
        s.length - indexOccurences[i] : 
        indexOccurences[i+1] - indexOccurences[i];

      sum += rightPossibilities * leftPossibilities;
    }
  }

  return {charsToIndexesMap, sum};
}
console.log(otherFormat("ABA"))