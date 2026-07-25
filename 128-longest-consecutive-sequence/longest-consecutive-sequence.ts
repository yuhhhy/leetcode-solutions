// Problem: https://leetcode.cn/problems/longest-consecutive-sequence/
// Accepted at: 2026年7月8日 09:46

function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let maxLength = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let currentLength = 1;
            while (set.has(current + 1)) {
                current = current + 1;
                currentLength++;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};
