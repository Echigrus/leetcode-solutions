// 27. Remove Element
// https://leetcode.com/problems/remove-element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums: number[], val: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] != val) {
                    const t = nums[i];
                    nums[i] = nums[j];
                    nums[j] = t;
                }
            }
        }
    }
    let count = 0;
    while(nums[nums.length-1] == val) {
        nums.pop();
        count++;
    }
    return count;
};