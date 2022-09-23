'''
Given an array of integers, perform some number k of operations. Each operation consists of removing
any element from the array, dividing it by 2 and inserting the ceiling of that result back into the array.
Minimize the sum of the elements in the final array.
Example:
nums = [10, 20, 7]
k = 4
Pick    Pick/2 Ceiling Result
Initial array [10, 20, 7]
7         3.5      4          [ 10, 20, 4]
10         5       5           [5, 20, 4]
20         10      10          [5, 10, 4]
10         5        5          [5, 5, 4]
The sum of the final array is 5 + 5 + 4 = 14, and that sum is minimal.
'''


import math
import heapq


def minSum(num, k):
    heap = [-n for n in num]  # negate values for max-heap
    heapq.heapify(heap)

    for i in range(k):
        max_value = heap[0]
        heapq.heapreplace(heap, math.floor(max_value/2))

    # Calculate minimum sum
    return -sum(heap)


num = [10, 20, 7]
k = 4
print(minSum(num, k))
