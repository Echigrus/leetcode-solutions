// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array

function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    if (n <= 1)
        return n;
    let idx = 1; 
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[idx++] = nums[i];
        }
    }

    return idx;
};