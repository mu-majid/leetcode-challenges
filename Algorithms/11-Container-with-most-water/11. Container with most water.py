
# Naive Solution
def maxArea(height):
  cache = {}

  def rectArea(x1, y1, x2, y2) :
    return abs((x2 - x1) * min(y2, y1))

  for x1 in range(len(height)):
    for x2 in range(len(height)):
      if x1 == x2:
        continue

      y2 = height[x2]

      visitedPair = tuple(sorted([x1, x2]))
      if visitedPair in cache:
        continue
      area = rectArea(x1, height[x1], x2, y2)
      cache[visitedPair] = area

  return max(cache.values())



res = maxArea([1,8,6,2,5,4,8,3,7])
print(res)
