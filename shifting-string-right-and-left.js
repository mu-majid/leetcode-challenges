/**
 * Given a string, number of leftShift, number of rightShift. Return the result
example s=abcd, leftShift=1, rightShift=2
output dabc
 */

const shift = (str, right, left) => {
  return shiftByAmount(shiftByAmount(str, left), -right);
}

// helper function
// negative amount shifts to right
// positive amount shifts to left
const shiftByAmount = (str, leftShifts) => {
  leftShifts = leftShifts % str.length;
  return str.slice(leftShifts) + str.slice(0, leftShifts);
};