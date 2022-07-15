/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let shouldLoop = true;


  while (shouldLoop) {
    let l = s.length;
    s = s.replace('()', '');
    s = s.replace('[]', '');
    s = s.replace('{}', '');

    shouldLoop = s.length > 0 && s.length < l ? true : false;
  }

  return s.length ? false : true;
};