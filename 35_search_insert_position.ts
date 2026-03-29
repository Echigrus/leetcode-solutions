// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position

function searchInsert(nums: number[], target: number): number {
    if (target > nums[nums.length-1]) return nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return i;
    }
    return -1;
};