from ast import List


class Solution:
  def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
    prices = [float("inf")] * n
    prices[src] = 0

    for i in range(k + 1):
      tmpPrices = prices.copy()

      # go through every egde
      for s, d, wt in flights:
        if prices[s] == float("inf"):
          continue
        if prices[s] + wt < tmpPrices[d]:
          tmpPrices[d] = prices[s] + wt

      prices = tmpPrices

    return -1 if prices[dst] == float("inf") else prices[dst]

