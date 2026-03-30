# 190. Reverse Bits
# https://leetcode.com/problems/reverse-bits/

class Solution:
    def reverseBits(self, n: int) -> int:
        binary_str = bin(n)[2:]
        padded_str = binary_str.rjust(32, "0")
        reversed_str = padded_str[::-1]
        return int("0b" + reversed_str, 0)