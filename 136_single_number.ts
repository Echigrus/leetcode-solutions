// 136. Single Number
// https://leetcode.com/problems/single-number/description/

function singleNumber(nums: number[]): number {
    let n = 0;
    for (const num of nums) n = n ^ num;
    return n;
};