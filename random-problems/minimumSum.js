function minSum(a, n, k) {
  // Implements the MaxHeap
  let maxheap = [];

  // Insert elements into the MaxHeap
  for (let i = 0; i < n; i++)
    maxheap.push(a[i]);

  maxheap.sort(function (a, b) { return a - b; });

  while (maxheap.length > 0 && k > 0) {

    // Remove the maximum
    let max_ele = maxheap.pop();

    // Insert maximum / 2
    maxheap.push(Math.floor(max_ele / 2));
    k -= 1;
    maxheap.sort(function (a, b) { return a - b; });
  }

  // Stores the sum of remaining elements

  let sum = 0;
  while (maxheap.length > 0)
    sum += maxheap.shift();

  return sum;
}