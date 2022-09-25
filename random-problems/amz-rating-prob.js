public static long fun(List ratings) {
  long load = 0;
  long ans = 0;
    for (int i = 0; i < ratings.size() ; i++) {
        if (load == 0) {
            load = 1;
        } else {
            if (ratings.get(i - 1) == ratings.get(i) + 1) {
                load++;
            } else {
                ans += sumOfNNaturalNumbers(load);
                load = 1;
            }
        }
    }
    ans += sumOfNNaturalNumbers(load);

    return ans;
}
  
  private static long sumOfNNaturalNumbers(long n) {
    if (n % 2 == 0)
        return ((n / 2) * (n + 1));
    else return n * ((n + 1) / 2);
}

////

def countDecreasingRatings(ratings):
groups, start, end = 0, 0, 1
while end < len(ratings):
    if rating[end-1] - rating[end] == 1:
        groups += end-start
    else:
        start = end
    end += 1
return groups + len(ratings)