// Problem: https://leetcode.cn/problems/longest-substring-without-repeating-characters/
// Accepted at: 2026年6月1日 17:26

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let left = 0, right = 0;
    const map = new Map();
    while (right < s.length) {
        if (map.has(s[right])) {
            left = Math.max(left, map.get(s[right]) + 1);
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }
    return maxLen;
};
