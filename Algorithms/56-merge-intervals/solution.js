
// Adopting the idea in the Meeting Rooms II problem
const merge = function (intervals) {
  const sortedStartTimes = intervals.sort((a, b) => a[0] - b[0]);
  const res = [sortedStartTimes[0]];

  for (const curr of sortedStartTimes) {
    // NOTE: changes to prev array also changes original res array due to JS object reference
    prev = res[res.length - 1]; 
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(curr[1], prev[1]);
    }
    else {
      res.push(curr);
    }

  }
  return res;
};
