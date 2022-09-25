import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Main {

  public static void main(String[] args) {
    int[][] flights = new int[][] {
        { 10, 1, 2, 300 },
        { 15, 3, 2, 410 },
        { 13, 2, 3, 300 },
        { 17, 3, 1, 400 },
        { 21, 2, 1, 500 }
    };
    int[] hotelCost = new int[] { 400, 500, 300 };

    int budget = 50000;

    findLI(flights, hotelCost, budget);
  }

  private static void findLI(int[][] flights, int[] hotelCost, int budget) {
    List<List<Flight>> flightList = new ArrayList<>();
    for (int i = 0; i < hotelCost.length; i++) {
      flightList.add(new ArrayList<Flight>());
    }
    for (int[] flight : flights) {
      flightList.get(flight[1] - 1).add(new Flight(flight[0], flight[1], flight[2], flight[3]));
    }

    getIt(flightList, hotelCost, budget, 0, 1, 1, 10, new ArrayList<Integer>());
  }

  static void getIt(List<List<Flight>> flightList, int[] hotelCost, int budget, int budgetUsed, int src, int dst,
      int dateFrom, List<Integer> stops) {
    if (budgetUsed >= budget) {
      return;
    }

    if (dst == src && stops.size() > 0) {
      System.out.print(budgetUsed + " ");
      System.out.println(stops.stream().map(String::valueOf)
          .collect(Collectors.joining(",")));
      return;
    }

    for (Flight flight : flightList.get(src - 1)) {
      stops.add(src);
      budgetUsed += flight.price;
      if (flight.date - dateFrom > 0) {
        budgetUsed += hotelCost[flight.from - 1] * (flight.date - dateFrom);
      }
      getIt(flightList, hotelCost, budget, budgetUsed, flight.to, dst, flight.date, stops);
      budgetUsed -= flight.price;
      if (flight.date - dateFrom > 0) {
        budgetUsed += hotelCost[flight.from - 1] * (flight.date - dateFrom) * -1;
      }
      stops.remove(stops.size() - 1);
    }
  }

  static class Flight {
    int date;
    int from;
    int to;
    int price;

    public Flight(int date, int from, int to, int price) {
      this.date = date;
      this.from = from;
      this.to = to;
      this.price = price;
    }
  }
}