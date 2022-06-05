const canCompose = (wordSet, word) => {
  if (!word.length) {
    return false;
  }
  wordSet.delete(word); // to avoid checking word against itself

  const dp = new Array(word.length + 1);
  dp[0] = true;

  for (let i = 1; i <= word.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(word.substring(j, i))) { //d[j] indicate last time we had a substring in set - j is the index where we should check new substring 
        dp[i] = true;
        break;
      }
    }
    
  }

  wordSet.add(word); // putting string back again
  return dp[word.length]; // true if the whole word is composed from wordset , cuz dp[index] indicates substr is in wordset
}

 var findAllConcatenatedWordsInADict = function(words) {
  const wordSet = new Set(words);
  const answer = [];
  for (const word of words) {
    if (canCompose(wordSet, word)) { // check if word can be composed from wordSet
      answer.push(word)
    }
  }

  return answer;
};

console.log(findAllConcatenatedWordsInADict(
  ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
))

// console.log(findAllConcatenatedWordsInADict(
//   ["cats", "cat", "s"]
// ))