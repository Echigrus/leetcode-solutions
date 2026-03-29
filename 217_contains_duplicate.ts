// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums: number[]): boolean {
    const set = new Set();
    for (const num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
};