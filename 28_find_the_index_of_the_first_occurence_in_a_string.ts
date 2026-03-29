// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack[i] == needle[0]){
            let fullEq = true;
            for (let j = i; j < haystack.length && j < i + needle.length; j++) {
                if (haystack[j] != needle[j-i]) {
                    fullEq = false;
                    break;
                }
            }
            if (fullEq) return i;
        }
    }
    return -1;
};