// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
    const a = s.split(" ");
    for (let i = a.length - 1; i >= 0; i--) {
        const ai = a[i].trim();
        if (ai.length != 0) return ai.length;
    }
    return -1;
};