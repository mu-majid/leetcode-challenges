class Solution {

  private String ones(int num) {
    switch (num) {
      case 1: return "One";
      case 2: return "Two";
      case 3: return "Three";
      case 4: return "Four";
      case 5: return "Five";
      case 6: return "Six";
      case 7: return "Seven";
      case 8: return "Eight";
      case 9: return "Nine";
    }

    return "";
  }

  private String underTwenty(int num) {
    switch (num) {
      case 10: return "Ten";
      case 11: return "Eleven";
      case 12: return "Twelve";
      case 13: return "Thirteen";
      case 14: return "Fourteen";
      case 15: return "Fifteen";
      case 16: return "Sixteen";
      case 17: return "Seventeen";
      case 18: return "Eighteen";
      case 19: return "Nineteen";

    }

    return "";
  }

  private String tens(int num) {
    switch (num) {
      case 20: return "Twenty";
      case 30: return "Thirty";
      case 40: return "Forty";
      case 50: return "Fifty";
      case 60: return "Sixty";
      case 70: return "Seventy";
      case 80: return "Eighty";
      case 90: return "Ninety";

    }

    return "";
  }

  private String twoDigits (int num) {
    if(num < 10) {
      return ones(num);
    }
    if(num < 20) {
      return underTwenty(num);
    }

    int tensNum = num / 10 * 10;
    int onesNum = num % 10;

    if(onesNum == 0) {
      return tens(tensNum);
    }
    return tens(tensNum) + " " + ones(onesNum);
  }

  private String threeDigits(int num) {
    int hunderdsNum = num / 100;
    int rest = num % 100;

    if(hunderdsNum == 0) { // Case 10012 -> 10 thousand Twelve
      return twoDigits(rest);
    }
    if(rest == 0) {
      return ones(hunderdsNum) + " " + "Hundred";
    }
    return ones(hunderdsNum) + " " + "Hundred " + twoDigits(rest);
  }

  public String numberToWords(int num) {
    if(num == 0) {
      return "Zero";
    }

    int billion = num / 1000000000;
    num -= billion * 1000000000;

    int million = num / 1000000;
    num -= million * 1000000;

    int thousand = num / 1000;
    num -= thousand * 1000;

    String result = "";
    if(billion > 0) {
      result += (threeDigits(billion) + " Billion ");
    }
    if(million > 0) {
      result += (threeDigits(million) + " Million ");
    }
    if(thousand > 0) {
      result += (threeDigits(thousand) + " Thousand ");
    }
    if(num > 0) {
      result += threeDigits(num);
    }

    return result.strip();
  }
}