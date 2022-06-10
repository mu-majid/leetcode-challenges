var maximumUnits = function (boxTypes, truckSize) {
  let unitCount = 0;
  let boxCount = 0;
  boxTypes = boxTypes.sort((a, b) => {
    return a[1] < b[1] ? -1 : 0;
  });

  while (boxTypes.length > 0 && boxCount < truckSize) {
    let current = boxTypes.pop();

    if (boxCount + current[0] < truckSize) { // if we added all these boxes, we still not reach the max truckSize
      unitCount += (current[0] * current[1]); // loadn all these boxes
      boxCount += current[0];
    } 
    else { // we cannot load all these box types, but only some of it
      unitCount += (truckSize - boxCount) * current[1];
      boxCount = truckSize;
    }
  }
  return unitCount;
};