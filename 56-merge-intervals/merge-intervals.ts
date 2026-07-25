// Problem: https://leetcode.cn/problems/merge-intervals/
// Accepted at: 2026年7月15日 11:48

function merge(intervals: number[][]): number[][] {
    if(intervals.length === 1) return intervals;

    const sorted = [...intervals].sort((a, b) => a[0] - b[0]);

    const result: number[][] = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        const last = result[result.length - 1];
        const current = sorted[i];

        if (last[1] < current[0]) {
            result.push(current);
        } else {
            last[1] = Math.max(last[1], current[1]);
        }
    }

    return result;
};
