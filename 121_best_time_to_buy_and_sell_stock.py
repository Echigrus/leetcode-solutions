# 121. Best Time to Buy and Sell Stock
# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0
        mi = inf
        for v in prices:
            ans = max(ans, v - mi)
            mi = min(mi, v)
        return ans