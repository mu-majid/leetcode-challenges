# TOP DOWN MEMOIZATION
class Solution:
  def isMatch(self, s: str, p: str) -> bool:
    cache = {}
    
    def dfs(i, j):
      # Check if we already visited i, j
      if (i, j) in cache:
        return cache[(i, j)]

      # Base Cases: 
      # 1. If both string and pattern indexes are out of bound -> means perfect match
      if i >= len(s) and j >= len(p):
        return True
      # 2. If pattern index is out of boumd -> means we still have string to be parsed and no match
      if j >= len(p):
        return False
      
      # If we get here -> i, j are both in bound or i is out of bound but we still have to parse the pattern

      # if the current chars match each other in str and pattern
      match = i < len(s) and (s[i] == p[j] or p[j] == ".")

      # j in bound and p[j] is followed by *
      # This means we have a decision tree (use *) (don't use *)
      if (j + 1) < len(p) and p[j + 1] == "*":
        cache[(i, j)] = (dfs(i, j + 2) or                # dont use * - means treat char* as 0
                        (match and dfs(i + 1, j)))       # use * - // means treat char* as 1 or more - only if there was a match (p[j] == s[i])
        return cache[(i, j)]
      if match:
        cache[(i,j)] = dfs(i + 1, j + 1)
        return cache[(i,j)]
      
      # No matches and No '*'
      cache[(i,j)] = False
      return False
      
    return dfs(0, 0)