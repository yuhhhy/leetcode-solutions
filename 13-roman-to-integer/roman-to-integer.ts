// Problem: https://leetcode.cn/problems/roman-to-integer/
// Accepted at: 2026年3月3日 14:00

function romanToInt(s: string): number {
    const map: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]];
        const next = map[s[i + 1]];
        // 如果 i 是最后一个字符，next 是 undefined
        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
};
