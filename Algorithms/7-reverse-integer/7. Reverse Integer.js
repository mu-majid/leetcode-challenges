/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const reverseN = +String(Math.abs(x)).split('').reverse().join('');

  // 2^31 - 1
  // The upper bound of a signed integer is not 232 - 1, but 231 - 1, since the first bit is the sign bit.
  if (reverseN > 0x7FFFFFFF) {
    return 0;
  }

  return x < 0 ? -reverseN : reverseN;
};

// More Efficient Arithmitic Solution
function reverse(n) {
  let reverseN = 0;
  let sign = n < 0;
  n = Math.abs(n);
  while (n) {
    reverseN = reverseN * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
}