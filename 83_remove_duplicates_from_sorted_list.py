# 83. Remove Duplicates from Sorted List
# https://leetcode.com/problems/remove-duplicates-from-sorted-list/

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None or head.next == None:
            return head
        
        new_head = head
        tail = head 
        curr = head.next
        
        while curr is not None:
            if tail.val != curr.val:
                tail.next = curr
                tail = curr

            curr = curr.next
            
        tail.next = None

        return new_head