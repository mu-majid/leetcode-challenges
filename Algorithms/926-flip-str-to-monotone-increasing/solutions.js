var minFlipsMonoIncr = function (s) {
  let flips = 0
  let one_nums = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      one_nums++
    } else if (one_nums > 0) {
      flips++
      one_nums--
    }
  }
  return flips
}