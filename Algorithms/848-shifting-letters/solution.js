var shiftingLetters = function (s, shifts) {
  const alphabatics = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = "";
  let count = 0;
  const shiftArray = new Array(shifts.length);

  for (let i = shifts.length - 1; i >= 0; i--) {
    count += shifts[i];
    shiftArray[i] = count;
  }

  for (let i = 0; i < s.length; i++) {
    let nextChar = s.charAt(i);
    let newChar = (alphabatics.indexOf(nextChar) + shiftArray[i]) % 26;
    result += alphabatics[newChar];
  }

  return result;

};