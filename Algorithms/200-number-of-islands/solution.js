/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {

      // Intuition:
      // once we encounter 1, visit all connected ones and convert them all to zeros
      if (grid[i][j] === '1') {
        count += 1;
        callDFS(grid, i, j); 
      }
    }
  }
  
  return count;
};

const callDFS = (grid, i, j) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
    return;
  }

  grid[i][j] = '0';

  callDFS(grid, i, j+1); // right
  callDFS(grid, i, j-1); // left
  callDFS(grid, i+1, j); // down
  callDFS(grid, i-1, j); // up
}