# 338. Counting Bits
# https://leetcode.com/problems/counting-bits

class Solution:
    def countBits(self, n: int) -> List[int]:
        # Time complexity of O(n)
        # Space complexity of O(1) excluding output
        result = [0] * (n + 1)
        for i in range(1, n+1):
            # Even/Odd: result[i // 2] / result[i - 1] + 1
            result[i] = result[i >> 1] + (i & 1)
        return result