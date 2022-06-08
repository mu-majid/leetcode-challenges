var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1); // remove last character from the string
      if (!prefix) return '';
    }
  }

  return prefix;
};