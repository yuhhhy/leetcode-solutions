// Problem: https://leetcode.cn/problems/longest-substring-without-repeating-characters/
// Accepted at: 2026年9月19日 16:08

function lengthOfLongestSubstring(s: string): number {
    const map = new Map<string, number>();
    let maxLength = 0;
    let left = 0;
    let right = 0;
    while (right < s.length) {
        if (map.has(s[right])) {
            left = Math.max(left, map.get(s[right]) + 1);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
    return maxLength;
};
