/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

  if (!needle.length) return 0;

  let index = -1;
  for (let i = 0; i < haystack.length; i++) {

    if (haystack[i] === needle[0] && haystack.slice(i, i + needle.length) === needle) {
      index = index === -1 ? i : index;
    }
  }

  return index;
};