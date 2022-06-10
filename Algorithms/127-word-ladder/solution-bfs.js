
var ladderLength = function (beginWord, endWord, wordList) {
  if (!beginWord || !endWord || !wordList.length) return 0;
  const set = new Set(wordList);
  if (!set.has(endWord)) return 0;

  let res = 1;
  const queue = [beginWord];
  const characters = "abcdefghijklmnopqrstuvwxyz";

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const currentWord = queue.shift();
      if (currentWord === endWord) return res;
      
      for (let i = 0; i < currentWord.length; i++) { // for each char in the curr word
        for (let j = 0; j < 26; j++) { // change that char[i] with aplphabet till u find a candidate
          const nextWord = currentWord.slice(0, i) + characters[j] + currentWord.slice(i + 1);
          if (set.has(nextWord)) {
            queue.push(nextWord);
            set.delete(nextWord);
          }
        }
      }
    }
    res++;
  }
  return 0;
};