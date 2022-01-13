/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const zigzagBuckets = 2 * (numRows - 1);
  const buckets = {};

  for (let index = 0; index < numRows; index++) {
    buckets[index] = '';
  }


  for (let index = 0; index < s.length; index++) {
    let bucketsObjIdx = 0;
    let charBucket = index % zigzagBuckets;

    if (charBucket == 0) {
      bucketsObjIdx = 0;
    } else if (charBucket != 0 && charBucket >= numRows) {
      bucketsObjIdx = zigzagBuckets - charBucket;
    } else {
      bucketsObjIdx = charBucket;
    }

    buckets[bucketsObjIdx] = buckets[bucketsObjIdx] + s[index];
  }

  return Object.values(buckets).join('')
};

console.log(convert('PAYPALISHIRING', 3))