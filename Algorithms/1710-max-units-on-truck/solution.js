var maximumUnits = function (boxTypes, truckSize) {
  const sortedByUnits = boxTypes.sort((a, b) => b[1] - a[1]);
  let units = {v: 0, b: truckSize};
  for (let i = 0; i < sortedByUnits.length; i++) {
    loadToTruck(sortedByUnits[i], units);
  }

  return units.v;
};

const loadToTruck = (boxes, units) => {

  while (boxes[0] > 0 && units.b > 0) {
    units.v += boxes[1];
    units.b -= 1;
    boxes[0] -= 1;
  }
}

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4))