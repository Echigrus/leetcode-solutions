// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/

function isPalindromeString(s: string): boolean {
    let cleared = "";
    s = s.toLocaleLowerCase();
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        if ((c >= 48 && c <= 57) || (c >=97 && c <=122)) {
            cleared += s[i];
        }
    }

    for (let i = 0; i < cleared.length / 2; i++) {
        if (cleared[i] != cleared[cleared.length - i - 1]) return false;
    }
    return true;
};