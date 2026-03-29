// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix

function longestCommonPrefix(strs: string[]): string {
    let pref = "";
    while (strs.every(str => str.startsWith(pref))) {
        if (strs[0].length < pref.length+1) {
            pref += " ";
            break;
        }
        pref = strs[0].slice(0, pref.length+1);
    }
    return pref.slice(0, pref.length-1);
};