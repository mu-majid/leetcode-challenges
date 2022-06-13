from ast import List


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:

        # WE SHALL DO BINARY SEARCH ON THE SMALLER ARRAY, NUMS1
        if len(nums1) > len(nums2):
            return self.findMedianSortedArrays(nums2, nums1)

        # SETUP INT_MIN AND INT_MAX FOR EMPTY LEFT / RIGHT PARTITION
        INT_MIN, INT_MAX = -2**64, 2**64

        # SETUP LO AND HI POINTERS
        lo, hi = 0, len(nums1)
        left_partition_size = (len(nums1) + len(nums2) + 1) // 2
        n = len(nums1) + len(nums2)

        # LOOP TILL OOB
        while lo <= hi:

            # GET THE PARITIONS OF BOTH ARRAYS
            p1 = (lo + hi) // 2
            p2 = left_partition_size - p1

            # print(f"NUMS1 : {nums1[:p1]} | {nums1[p1:]}")
            # print(f"NUMS2 : {nums2[:p2]} | {nums2[p2:]}")

            # GET THE 4 BOUNDARY NUMBERS
            nums1_left = nums1[p1 - 1] if p1 > 0 else INT_MIN
            nums1_right = nums1[p1] if p1 < len(nums1) else INT_MAX

            nums2_left = nums2[p2 - 1] if p2 > 0 else INT_MIN
            nums2_right = nums2[p2] if p2 < len(nums2) else INT_MAX

            # MOVE P1 LEFTWARDS
            if nums1_left > nums2_right:
                hi = p1 - 1

            # MOVE P1 RIGHTWARDS
            elif nums2_left > nums1_right:
                lo = p1 + 1

            # CORRECT PARTITION FOUND
            else:

                # ODD TOTAL LENGTH
                if n & 1:
                    return max(nums1_left, nums2_left)

                # EVEN TOTAL LENGTH
                return (max(nums1_left, nums2_left) + min(nums1_right, nums2_right)) / 2
