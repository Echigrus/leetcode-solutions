// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeNumber = function(x: number): boolean {
    const tx = x;
    return tx.toString() == x.toString().split("").reverse().join("");
};