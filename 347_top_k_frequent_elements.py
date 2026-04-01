# 347. Top K Frequent Elements
# https://leetcode.com/problems/top-k-frequent-elements/

import heapq
from typing import Counter, List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = Counter(nums)
        heap = []

        for num, freq in counts.items():
            heapq.heappush(heap, (freq, num))
            if len(heap) > k:
                heapq.heappop(heap)

        return [num for freq, num in heap]