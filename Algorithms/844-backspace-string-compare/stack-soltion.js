var backspaceCompare = function (s, t) {
  let e = [];
  let d = [];
  for (let i of s) {
    if (i == "#") d.pop();
    else d.push(i);
  }

  for (let i of t) {
    if (i == "#") e.pop();
    else e.push(i);
  }

  return d.join("") === e.join("");
};