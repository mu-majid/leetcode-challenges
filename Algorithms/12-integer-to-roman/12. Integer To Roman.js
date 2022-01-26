const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]


// O(1), because we are using constant number of steps to find the result.
// O(1), since we have stored only constant number of variables and the arrays that we have used also have constant size.
var intToRoman = function (N) {
  let ans = ""
  for (let i = 0; N; i++) {
    while (N >= val[i]) {
      ans += rom[i]
      N -= val[i]
    }
  }
  return ans
}; 