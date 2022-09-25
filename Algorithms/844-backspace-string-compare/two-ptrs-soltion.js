// ! O(N + M) Time Complexity where N and M are the length of 's' and 't' and we'll visit all characters of each input string 's' and 't' once in the worst case
// ! O(1) Space Complexity because we're using 2 variables as pointers to keep track of characters

var backspaceCompare = function (s, t) {
  let si = s.length - 1, ti = t.length - 1;

  while (si >= 0 || ti >= 0) {
    si = clearBackSpace(s, si);
    ti = clearBackSpace(t, ti);

    let sChar = s[si], tChar = t[ti];
    if (sChar !== tChar) { return false; }

    si--; ti--;
  }

  return true;
};

var clearBackSpace = function (string, index) {
  let skip = 0;

  while (index >= 0) {
    if (string[index] === '#') skip++
    else if (skip > 0) skip--
    else break;
    index--
  }

  return index;
}