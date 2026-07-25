// Problem: https://leetcode.cn/problems/permutation-in-string/
// Accepted at: 2026年4月3日 15:46

function checkInclusion(s1: string, s2: string): boolean {
    const chars = new Array(26).fill(0);

    for (const char of s1) {
        chars[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s2.length; i++) {
        chars[s2.charCodeAt(i) - 97]--;
        if (i >= s1.length) {
            chars[s2.charCodeAt(i - s1.length) - 97]++;
        }

        if (chars.every(x => x === 0)){
            return true;
        }
    }
    return false;
};
