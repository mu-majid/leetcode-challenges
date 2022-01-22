/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// This is  a Dyn. Prog. problem (could also be solved wwith recursion)
/**
 * CONDITIONs: 
  1, If p.charAt(j) == s.charAt(i) :  dp[i][j] = dp[i-1][j-1];
  2, If p.charAt(j) == '.' : dp[i][j] = dp[i-1][j-1];
  3, If p.charAt(j) == '*': 
    here are two sub conditions:
      1   if p.charAt(j-1) != s.charAt(i) : dp[i][j] = dp[i][j-2]  //in this case, a* only counts as empty
      2   if p.charAt(i-1) == s.charAt(i) or p.charAt(i-1) == '.':
            dp[i][j] = dp[i-1][j]    //in this case, a* counts as multiple a 
          or dp[i][j] = dp[i][j-1]   // in this case, a* counts as single a
          or dp[i][j] = dp[i][j-2]   // in this case, a* counts as empty
 */
const isMatch = function (s, p) {
  const dp = new Array(s.length + 1).fill(
    new Array(p.length + 1)
  );

  // Empty string and Empty pattern
  dp[0][0] = true;
  // Handling patterns like a*, a*b*, ...
  for (let i = 1; i < dp[0].length; i++) {
    if (p[i - 1] === '*') {
      if (dp[0][i - 1] || (i > 1 && dp[0][i - 2])) {
        dp[0][i] = true;
      }
    }
  }

  // Top-Down Approach DP
  for (let i = 0; i < s.length; i++) {

    for (let j = 0; j < p.length; j++) {

      if (p[j] === '.' || s[i] === p[j]) {
        dp[i + 1][j + 1] = dp[i][j];
      }

      if (p[j] === '*') {
        if (p[j - 1] != s[i] && p[j - 1] !== '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);
        }
      }

    }
  }

  return dp[s.length][p.length];
};