# 7. Reverse Integer
# https://leetcode.com/problems/reverse-integer/

class Solution:
    def reverse(self, x: int) -> int:
        sign = -1 if x < 0 else 1
        rev_x = str(abs(x))[::-1]
        out = int(rev_x) * sign
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31
        if out < INT_MIN or out > INT_MAX:
            return 0
        else:
            return out