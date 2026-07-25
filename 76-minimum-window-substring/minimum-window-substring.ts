// Problem: https://leetcode.cn/problems/minimum-window-substring/
// Accepted at: 2026年7月11日 16:01

function minWindow(s: string, t: string): string {
    let substring = "";
    let head = 0, tail = 0;
    const map = new Map<string, number>();

    for (const c of t) {
        map.set(c, (map.get(c) ?? 0) + 1);
    }

    while (head < s.length) {
        if (map.has(s[head])) {
            map.set(s[head], map.get(s[head]) - 1);
        }

        // 如果是覆盖子串，找到最小覆盖子串
        while (Array.from(map.values()).every(i => i <= 0)) {
            if (substring === "" || substring.length > head - tail + 1) {
                substring = s.slice(tail, head + 1);
            }
            if (map.has(s[tail])) {
                map.set(s[tail], map.get(s[tail]) + 1);
            }
            tail++;
        }

        head++;
    }

    return substring;
};
