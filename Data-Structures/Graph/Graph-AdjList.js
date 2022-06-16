
// create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  // functions to be implemented

  // add vertex to the graph
  addVertex(v) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
  }

  // add edge to the graph
  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
  }

  // Prints the vertex and adjacency list
  printGraph() {
    // get all the vertices
    var get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.AdjList.get(i);
      var conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values)
        conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }

  // function to performs BFS
  // Better for shortest path for unweighted graphs
  // O(Vert + Edges)
  bfs(startingNode) {
    // create a visited object
    var visited = {};

    // Create an object for queue
    // add the starting node to the queue
    var q = [startingNode];
    visited[startingNode] = true;

    // loop until queue is empty
    while (q.length) {
      // get the element from the queue
      var getQueueElement = q.shift();

      // passing the current vertex to callback function
      console.log('>> ',getQueueElement);

      // get the adjacent list for current vertex
      var get_List = this.AdjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (var i in get_List) {
        var neighbour = get_List[i];

        if (!visited[neighbour]) {
          visited[neighbour] = true;
          q.push(neighbour);
        }
      }
    }

    // we could return visited obj
  }


  // Main DFS method
  // 1. Find Minimum spanning tree
  // 2. Detect Cycles in graph.
  // 3. Graph Bipartite
  // 4. find strongly connected components.
  // 5. Topologically sort nodes.
  // 6. find bridges and articulation points.
  // 7. Generate Mazes.
  dfs(startingNode) {

    var visited = {};

    this.DFSUtil(startingNode, visited);
  }

  // Recursive function which process and explore
  // all the adjacent vertex of the vertex with which it is called
  DFSUtil(vert, visited) {
    visited[vert] = true;

    var get_neighbours = this.AdjList.get(vert);

    for (var i in get_neighbours) {
      var get_elem = get_neighbours[i];
      if (!visited[get_elem])
        this.DFSUtil(get_elem, visited);
    }
  }


  // One important observation about BFS is, the path used in BFS always has least number of edges between any two vertices
  breadthFirstShortestPath(startNode, targetNode) {
  // check if startNode & targetNode are identical
  if (startNode === targetNode) {
    return [startNode];
  }

  // visited keeps track of all nodes visited
  const visited = new Set();

  // queue contains the paths to be explored in the future
  const initialPath = [startNode];
  const queue = [initialPath];

  while (queue.length > 0) {
    // start with the queue's first path
    const path = queue.shift();
    const node = path[path.length - 1];

    // explore this node if it hasn't been visited yet
    if (!visited.has(node)) {
      // mark the node as visited
      visited.add(node);

      const neighbors = this.AdjList.get(node);

      // create a new path in the queue for each neighbor
      for (let i = 0; i < neighbors.length; i++) {
        const newPath = path.concat([neighbors[i]]);

        // the first path to contain the target node is the shortest path
        if (neighbors[i] === targetNode) {
          return newPath;
        }

        // queue the new path
        queue.push(newPath);
      }
    }
  }

  // the target node was not reachable
  return [];
}
}

module.exports = { Graph }