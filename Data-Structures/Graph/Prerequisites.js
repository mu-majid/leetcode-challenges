
function findOrder(numCourses, prerequisites) {

  let adjList = new Map();
  let indegree = new Array(numCourses).fill(0);
  let topologicalOrder = new Array(numCourses);

  // Create the adjacency list representation of the graph
  for (let i = 0; i < prerequisites.length; i++) {
    let dest = prerequisites[i][0];
    let src = prerequisites[i][1];
    let lst = adjList.get(src) || [];
    lst.push(dest);
    adjList.set(src, lst);

    // Record in-degree of each vertex
    indegree[dest] = indegree[dest] + 1;
  }

  // Add all vertices with 0 in-degree to the queue
  let q = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }

  let i = 0;
  console.log(adjList, q, indegree)
  // Process until the Q becomes empty
  while (q.length) {
    let node = q.shift();
    topologicalOrder[i] = node;
    i += 1;
    // Reduce the in-degree of each neighbor by 1
    if (adjList.has(node)) {
      for (neighbor of adjList.get(node)) {
        indegree[neighbor] = indegree[neighbor] - 1;

        // If in-degree of a neighbor becomes 0, add it to the Q
        if (indegree[neighbor] === 0) {
          q.push(neighbor);
        }
      }
    }
  }

  // Check to see if topological sort is possible or not.
  if (i === numCourses) {
    return topologicalOrder;
  }

  console.log(topologicalOrder, i)

  return [];
}


findOrder(2, [[1,0]])