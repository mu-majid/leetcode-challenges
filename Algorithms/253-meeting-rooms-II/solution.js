/**
 * Intuition: chronological oredering
 * 
 */
/*
  1. Separate out the start times and the end times in their separate arrays.
  2. Sort the start times and the end times separately. Note that this will mess up the original correspondence of start times and end times. They will be treated individually now.
  3. We consider two pointers: s_ptr and e_ptr which refer to start pointer and end pointer. The start pointer simply iterates over all the meetings and the end pointer helps us track if a meeting has ended and if we can reuse a room.
  4. When considering a specific meeting pointed to by s_ptr, we check if this start timing is greater than the meeting pointed to by e_ptr. If this is the case then that would mean some meeting has ended by the time the meeting at s_ptr had to start. So we can reuse one of the rooms. Otherwise, we have to allocate a new room.
  5. If a meeting has indeed ended i.e. if start[s_ptr] >= end[e_ptr], then we increment e_ptr.
  6. Repeat this process until s_ptr processes all of the meetings.
**/
const minMeetingRooms = function (intervals) {
  const sortedStartTimes = intervals.sort((a, b) => a[0] - b[0]).map(e => e[0]);
  const sortedEndTimes = intervals.sort((a, b) => a[1] - b[1]).map(e => e[1]);

  let rooms = 0;
  let currStartPtr = 0;
  let currEndPtr = 0;

  while (currStartPtr < sortedStartTimes.length) {
    if (sortedStartTimes[currStartPtr] < sortedEndTimes[currEndPtr]) {
      rooms++;
      currStartPtr++;
    }
    else { // meeting starting after 
      currStartPtr++;
      currEndPtr++;
    }
  }

  return rooms;
};



// console.log(minMeetingRooms([[5, 8], [6, 8]]))
// console.log(minMeetingRooms([[6, 15], [13, 20], [6, 17]]))
// console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]))
console.log(minMeetingRooms([[7, 10], [2, 4]]))
// console.log(minMeetingRooms([[13, 15], [1, 13]]))
// console.log(minMeetingRooms([[9, 10], [4, 9], [4, 17]]))
// console.log(minMeetingRooms([[13, 15], [1, 13], [6, 9]]))



