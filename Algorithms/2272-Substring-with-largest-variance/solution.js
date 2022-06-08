/**
 * Intuition is described here: https://cs.stackexchange.com/questions/151152/maximum-difference-between-maximum-and-minimum-frequency-in-a-subarray
 */


var largestVariance = function (s) {
  const map = new Map();
  for (const c of s) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }
  let ans = 0;
  for (let x = 97; x <= 122; x++) {
    let i = String.fromCharCode(x);
    for (let y = 97; y <= 122; y++) {
      let j = String.fromCharCode(y);
      if (i === j || map.get(i) === 0 || map.get(j) === 0) continue;
      for (let rev = 1; rev <= 2; rev++) {
        let cnt1 = 0, // max -> char is 1
          cnt2 = 0;   // min -> char is -1
        for (const c of s) {
          if (c === i) cnt1++;
          if (c === j) cnt2++; 
          if (cnt1 < cnt2) cnt1 = cnt2 = 0; // considering cnt1 is always greatwer than cnt2 - start a new substring if cnt1 < cnt2 (Kadane's algorithm)
          if (cnt1 > 0 && cnt2 > 0) ans = Math.max(ans, cnt1 - cnt2);
        }
        s = s.split('').reverse().join('');
      }
    }
  }
  return ans;
};