/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = new Graph();
  for (let i = 0; i < equations.length; i++) {
    let [start, end] = equations[i];
    graph.addEdge(start, end, values[i]);
    graph.addEdge(end, start, 1 / values[i]);
  }
  const answer = [];
  for (let [start, end] of queries) {
    let res = graph.findCost(start, end);
    answer.push(res == -Infinity ? -1 : res);
  }
  return answer;
};

class Graph {
  constructor() {
    this.map = new Map();
  }

  addEdge(start, end, weight) {
    if (this.map.has(start)) {
      this.map.get(start).push({ end, weight })
    } else {
      this.map.set(start, [{ end, weight }]);
    }
  }

  findCost(source, destination) {
    let visited = {};

    const inner = start => {
      if (!this.map.has(start)) {
        return -Infinity;
      }
      if (start == destination) {
        return 1;
      }
      visited[start] = 1;
      let answer = -Infinity;
      for (let { end, weight } of this.map.get(start)) {
        if (!visited[end]) {
          answer = Math.max(answer, inner(end) * weight);
        }
      }
      return answer;
    };

    return inner(source);
  }
}