function solution(N, S) {
  let totalAvail = N * 2;
  let checkedRows = {}
  let combinations = ['BCDE', 'DEFG', 'FGHJ']
  const seatReserved = S.split(" ");
  if (seatReserved.length !== 0) {
    for (let i = 0; i < seatReserved.length; i++) {
      let [row, col] = getRowAndCol(seatReserved[i]);
      if (checkedRows[row] === undefined) {
        checkedRows[row] = new Set();
      }
      let rowInitSize = checkedRows[row].size
      if (rowInitSize > 2) { // if row cannot host any family any more
        continue;
      }
      if (combinations[0].includes(col)) {
        checkedRows[row].add('l')
      }
      if (combinations[1].includes(col)) {
        checkedRows[row].add('m')
      }
      if (combinations[2].includes(col)) {
        checkedRows[row].add('r')
      }
      if (rowInitSize === 0) { // first time to visit this row
        if (checkedRows[row].size > 0) { // after we added value to row set
          totalAvail -= 1;
        }
      }
      if (rowInitSize > 0) { // if we encountered the row another time
        if (checkedRows[row].size === 3) { // means no 4-person-family can fit anymore in this row
          totalAvail -= 1;
        }
      }
    }
  }
  return totalAvail;
}
function getRowAndCol(str) {
  if (str.length === 3) {
    return [str.substring(0, 2), str[2]]
  }
  return [str[0], str[1]];
}
console.log(solution(1, '1C 1D 1E'))
console.log("-----")
console.log(solution(1, '1B 1C 1D'))
console.log("-----")
console.log(solution(1, '1B 1D 1H'))
console.log('------')
console.log(solution(1, '1A 1D 1H'))
console.log('------')
console.log(solution(11, '1B 1F'))
console.log('------')
console.log(solution(2, '1A 2F 1C'))





"use strict";

function solution(date) {
    const now = new Date();
    const diffInMilliSecs = new Date(date).getTime() - now.getTime(); // milli
    const diffInDays = Math.abs(Math.floor(diffInMilliSecs / (1000 * 60 * 60 * 24)));
    const plural = diffInDays === 1 ? '' : 's';

    return `${diffInDays} day${plural}`;
}
