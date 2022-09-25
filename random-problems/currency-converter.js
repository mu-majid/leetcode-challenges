/**
 * Build an undirected graph by adding each edge and the inverse of each edge
 * Run a DFS using a queue to find the path from node A to node B. This is done by doing the following:
    Have a record of visited nodes, do not add nodes to the queue that were visited as you traverse the graph
    When you visit a node, mark it as visited, add it's children to the queue, and recurse
    When recursing, ensure you apply the exchange rate to the value
    Here I use final result as -1 and use Math.max to ensure that if the base case does not return the value, then our target currency was not found in this branch.
    This ensure that one DFS branch will hit 'GBP' and return a value over -1.
    If the target currency does not exist or has no available path, the algorithm will return -1
 */

const main = () => {
  findExchangeRate([['USD', 'JPY', 110], ['USD', 'AUD', 1.45], ['JPY', 'GBP', 0.0070]], ['AUD', 'GBP'], 1)
}

const findExchangeRate = (rates, toFrom, value) => {
  const to = toFrom[0];
  const from = toFrom[1];
  // build rate graph using hashmap (or in this JS case, a Record<T, H>)
  const ratesGraph = {}
  rates.map(rate => {
    if (!ratesGraph[rate[0]]) ratesGraph[rate[0]] = {};
    if (!ratesGraph[rate[1]]) ratesGraph[rate[1]] = {};
    ratesGraph[rate[0]][rate[1]] = rate[2];
    ratesGraph[rate[1]][rate[0]] = 1 / rate[2];
  })
  const visited = {}

  return findExchangeRateHelper(from, to, value, visited, ratesGraph);
}

const findExchangeRateHelper = (from, to, value, visited, ratesGraph) => {
  // BFS loop using array.pop and array.unshift as queue
  console.log(from);
  if (from === to) return value;
  if (!ratesGraph[from]) return -1;
  const currentRate = 1;
  const queue = [];
  visited[from] = true;
  // add children to queue
  Object.keys(ratesGraph[from]).forEach(child => {
    if (!visited[child]) queue.unshift(child);
  });
  let finalRate = -1;
  while (queue.length > 0) {
    const currentNode = queue.pop();
    // get rate to currentNode
    const rate = ratesGraph[from][currentNode];
    // recurse
    finalRate = Math.max(finalRate, findExchangeRateHelper(currentNode, to, value * rate, visited, ratesGraph));
  }
  return finalRate;
}