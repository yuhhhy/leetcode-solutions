// Problem: https://leetcode.cn/problems/group-anagrams/
// Accepted at: 2026年7月1日 23:31

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }

    return Array.from(map.values());
};
