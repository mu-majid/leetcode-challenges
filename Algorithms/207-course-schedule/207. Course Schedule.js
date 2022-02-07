/**
 * Kahn's Algorithm - Topological Sorting / Detecting a Cycle in DAG
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const buildGraphFromEdges = (vertices, edges) => {
  const adjList = {};
  for (let [src, dest] of edges) {

    if (adjList.hasOwnProperty(src)) {
      adjList[src].push(dest)
    }
    else {
      adjList[src] = [dest]
    }

    if (!adjList.hasOwnProperty(dest)) {
      adjList[dest] = []
    }

  }

  return adjList
}
var canFinish = function (numCourses, edges) {
  const graphAdjList = buildGraphFromEdges(numCourses, edges);
  console.log(graphAdjList)

  // Calcuate the incoming degree of each vertex
  const vertices = Object.keys(graphAdjList);
  const inDegree = {};
  for (const v of vertices) {
    for (neighbor of graphAdjList[v]) {
      inDegree[neighbor] = inDegree[neighbor] + 1 || 1;
    }
  }

  // Create a queue which stores the vertex without dependencies
  const queue = vertices.filter((v) => !inDegree[v]);
  const topNums = {};
  let index = 0;
  console.log('vertices > ',vertices)
  console.log('inDegree > ',inDegree)
  console.log('queue > ',queue)

  while (queue.length) {
    const v = queue.shift();
    console.log('v', v, graphAdjList[v])
    topNums[v] = index++;
    // adjust the incoming degree of its neighbors
    for (const neighbor of graphAdjList[v]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }


  if (index !== vertices.length) {
    console.log("Detect a cycle");
    return false
  }
  return true;
};

console.log(canFinish(2, [[1,0], [0, 1]]));