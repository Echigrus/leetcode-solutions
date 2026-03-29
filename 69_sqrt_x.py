# 69. Sqrt(x)
# https://leetcode.com/problems/sqrtx/

class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0:
            return 0
        
        left, right, ans = 1, x, 0

        while left <= right:
            mid = (left + right) // 2

            if mid * mid <= x:
                # If mid^2 <= x, mid could be the answer and we try for larger number
                ans = mid
                left = mid + 1
            else:
                # If mid^2 > x, answer must be smaller than mid
                right = mid - 1
    
        return ans
