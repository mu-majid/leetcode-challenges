import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Set;

public class solution {
  public int minKnightMoves(int x, int y) {
    // This makes operate in the top right corner and reduce search space by 3/4
    x = Math.abs(x);
    y = Math.abs(y);

    int [] xDir = {-2,-2,-1,-1,1,1,2,2};
    int [] yDir = {-1,1,-2,2,-2,2,-1,1};

    int moves = 0;
    Queue<Coordinate> q = new LinkedList<>();
    q.add(new Coordinate(0,0));

    Set<String> visited = new HashSet<>();
    visited.add("(0,0)");

    while (!q.isEmpty()) {
      int size = q.size();

      for (int i = 0; i < size; i++) {
        Coordinate p = q.remove();

        if (p.x == x && p.y == y) return moves;

        for (int j = 0; j < xDir.length; j++) {
          int newPx = p.x + xDir[j];
          int newPy = p.y + yDir[j];
          String s = newPx + "," + newPy;
          // -2 gives us the ability to move at least one move into the three other quadrants
          if (!visited.contains(s) && newPx >= -2 && newPy >= -2) {
            q.add(new Coordinate(newPx, newPy));
            visited.add(s);
          }

        }
      }

      moves++;
    }
    return -1;
  }

  class Coordinate {
    int x;
    int y;

    Coordinate(int x, int y) {
      this.x = x;
      this.y = y;
    }
  }
}
