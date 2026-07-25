// Problem: https://leetcode.cn/problems/find-all-anagrams-in-a-string/
// Accepted at: 2026年7月10日 15:42

function findAnagrams(s: string, p: string): number[] {
    const chars: number[] = new Array(26).fill(0);
    const result: number[] = new Array();

    for (const char of p) {
        chars[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        // 维护窗口在 [i - p.length + 1, i] 之间
        chars[s.charCodeAt(i) - 97]--;
        if (i >= p.length) {
            chars[s.charCodeAt(i - p.length) - 97]++;
        }
        if (chars.every(c => c === 0)) {
            result.push(i - p.length + 1);
        }
    }

    return result;
};
