# 191. Number of 1 Bits
# https://leetcode.com/problems/number-of-1-bits/description/

class Solution:
    def hammingWeight(self, n: int) -> int:
        binary_str = bin(n)[2:]
        set_bits = sum(c == "1" for c in binary_str)
        return set_bits