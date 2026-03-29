// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters

function lengthOfLongestSubstring(s: string): number {
    // Edge case: empty string or null has no valid substring
    if (!s || s.length === 0) {
        return 0;
    }

    // Result variable to store maximum length found
    let maxLength = 0;

    // Use a Set to track characters in current window (for O(1) lookup)
    const charSet = new Set();

    // Left pointer of our sliding window
    let left = 0;

    // Iterate through string with right pointer
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If character already exists in current window,
        // shrink window from left until we remove the duplicate
        while (charSet.has(currentChar)) {
            charSet.delete(s[left]);
            left++;
        }

        // Add current character to our set
        charSet.add(currentChar);

        // Update maximum length if current window is larger
        // Current window size = right - left + 1
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};