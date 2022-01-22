/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// Top Down Memoization
// O(n * m) -> n = s.length, m = p.length
const isMatch = function (s, p) {
  const cache = new WeakMap();
  
  const dfs = (i, j) => {
    let key = [i, j]; // because Map keys comparison is eval by === we need to keep reference to the key
    
    // Check if we already visited i, j
    if (cache.has(key)) {
      return cache.get(key); 
    }

    // Base Case
    // 1. If both string and pattern indexes are out of bound -> means perfect match
    if (i >= s.length && j >= p.length) {
      return true;
    }
    // 2. If pattern index is out of boumd -> means we still have string to be parsed and no match
    if (j >= p.length) {
      return false;
    }

    // If we get here -> i, j are both in bound or i is out of bound but we still have to parse the pattern

    // if the current chars match each other in str and pattern
    charsMatch = i < s.length && (s[i] === p[j] || p[j] === '.');

    // j in bound and p[j] is followed by *
    // This means we have a decision tree (use *) (don't use *)
    if ((j + 1) < p.length && p[j + 1] === '*') { 
      dontUseStar = dfs(i, j + 2); // means treat char* as 0
      useStar = charsMatch && dfs(i + 1, j); // means treat char* as 1 or more

      cache.set(key, dontUseStar || useStar);

      return cache.get(key);
    }

    if (charsMatch) {
      cache.set(key, dfs(i + 1, j + 1));

      return cache.get(key); 
    }

    // No matches and No '*'
    cache.set(key, false);

    return false;
  }
  
  return dfs(0, 0);
};

console.log(isMatch("aab", "c*a*b"));