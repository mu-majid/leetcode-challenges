/**
 *  You are given an List of positions of cars as to where they are parked. You are also given an integer K. 
 The cars needs to be covered with a roof. You have to find the minimum length of roof that takes to cover K cars.
 
 Input : 12,6,5,2      K = 3
 
 Explanation :  There are two possible roofs that can cover K cars. One that covers the car in 2,5,6 parking spots and
 another roof which covers 5,6,12 parking spots. The length of these two roofs are 5 and 8 respectively. Return 5
 since that's the roof with minimum length that covers K cars.

 Output : 5
 */

 // This is a sliding window problem 
function carParkingRoof(cars, k) {
  cars.sort((a, b) => {
    return a - b;
  });
  let length = cars.length;
  let min = cars[k - 1] - cars[0] + 1; // remove this 1 and remove it on line 24
  for (let i = 0; i < length - k + 1; i++) { // 1 here cuz it's zero index
    let temp = cars[i + k - 1] - cars[i];
    if (temp < min) {
      min = temp + 1
    }
  }
  return min;
}