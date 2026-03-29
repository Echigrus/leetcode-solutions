// 202. Happy Number
// https://leetcode.com/problems/happy-number/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n: number): boolean {
    let cur = n, prev = null, limit = 0;
    while (cur != prev && limit < 20) {
        limit++;
        prev = cur;
        const split = cur.toString().split("").map(c => +c).map(c => c * c);
        cur = split.reduce((acc, val) => acc + val, 0);
        if (cur == 1) return true;
    }
    return false;
};