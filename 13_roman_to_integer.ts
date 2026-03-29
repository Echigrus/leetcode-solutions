// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer

function romanToInt(s: string): number {
    const nums = [
        { v: 1000, l: "M" },
        { v: 900, l: "CM" },
        { v: 500, l: "D" },
        { v: 400, l: "CD" },
        { v: 100, l: "C" },
        { v: 90, l: "XC" },
        { v: 50, l: "L" },
        { v: 40, l: "XL" },
        { v: 10, l: "X" },
        { v: 9, l: "IX" },
        { v: 5, l: "V" },
        { v: 4, l: "IV" },
        { v: 1, l: "I" },
    ];

    let num = 0;
    let curStr = s;
    let numPos = 0;
    while (curStr.length != 0) {
        while (curStr.startsWith(nums[numPos].l)) {
            num += nums[numPos].v;
            curStr = curStr.slice(nums[numPos].l.length);
        }
        numPos++;
    }

    return num;
};