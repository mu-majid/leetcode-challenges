var cloneGraphDFS = function (node) {
  let map = {};

  return traverse(node);

  function traverse(node) {
    if (!node) return node;
    if (!map[node.val]) {
      map[node.val] = new Node(node.val);
      map[node.val].neighbors = node.neighbors.map(neighbor => traverse(neighbor))
    }
    return map[node.val]
  }
};

var cloneGraphBFS = function (node) {
  const bfs = (node, queue, visited, i) => {
    visited[node.val] = new Node(node.val)
    while (i < queue.length) {
      const curr = queue[i++];
      curr.neighbors.forEach(neighbor => {
        if (visited[neighbor.val] === undefined) {
          queue.push(neighbor);
          visited[neighbor.val] = new Node(neighbor.val);
        }
        visited[curr.val].neighbors.push(visited[neighbor.val]);
      })
    }
    return visited[node.val];
  }

  return node ? bfs(node, [node], {}, 0) : node;
}