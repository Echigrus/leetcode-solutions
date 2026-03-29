// 3345. Smallest Divisible Digit Product I
// https://leetcode.com/problems/smallest-divisible-digit-product-i/description/

/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n: number, t: number): number {
    for (let i = n; i <= 100; i++) {
        const production = i.toString().split("").reduce((acc, cur) => acc * +cur, 1);
        if (production % t == 0) return i;
    }
    return -1;
};