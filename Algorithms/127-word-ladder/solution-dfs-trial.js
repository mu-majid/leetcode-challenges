var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  const sequence = [beginWord];

  const dfs = (beginWord, wordList) => {

    let candidates = wordList.filter(e => {
      return sequenceCandidate(beginWord, e)
    });


    if (!candidates.length) {
      return 0;
    }

    candidates = candidates.sort((a,b) => a.localeCompare(b)) // should be sorted based on similarity to end word

  
    if (candidates.includes(endWord)) {
      return sequence.push(endWord);
    }
    else {
      removeWord(wordList, candidates[0])
      if (!sequence.includes(candidates[0])) {
        sequence.push(candidates[0]);
      }

      dfs(sequence[sequence.length - 1], wordList);
    }
  }
  dfs(beginWord, wordList);
  console.log(sequence)
  return sequence.includes(endWord) ? sequence.length: 0;
};

const sequenceCandidate = (word, random) => {
  console.log(word, random)
  let count = 0;
  for (let i = 0; i < random.length; i++) {
    if ((word[i] !== random[i])) {
      count++;
    }
  }
  console.log(count)
  return count > 1 ? false : true;
}

const removeWord = (arr, toRemove) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === toRemove) {

      arr.splice(i, 1);
    }
  }
}

// console.log(ladderLength('hit', "cog",["hot","dot","dog","lot","log","cog"]))
console.log(ladderLength(
  "qa", "sq",
  ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]
  )
)


