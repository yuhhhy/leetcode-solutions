// Problem: https://leetcode.cn/problems/subarray-sum-equals-k/
// Accepted at: 2026年7月11日 15:42

function subarraySum(nums: number[], k: number): number {
    const map = new Map<number, number>([[0, 1]]);
    let count = 0;
    let prefix = 0;

    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];

        if (map.has(prefix - k)) {
            count += map.get(prefix - k);
        }

        map.set(prefix, (map.get(prefix) ?? 0) + 1);
    }

    return count;
};
