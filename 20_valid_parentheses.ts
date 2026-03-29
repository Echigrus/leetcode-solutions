// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses

function isValid(s: string): boolean {
    let cur = s, prev = "";
    while (cur != prev) {
        prev = cur;
        cur = cur.replace("()", "");
        cur = cur.replace("[]", "");
        cur = cur.replace("{}", "");
    }
    return cur.length == 0;
};