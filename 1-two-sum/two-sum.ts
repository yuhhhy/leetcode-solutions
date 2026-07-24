// Problem: https://leetcode.cn/problems/two-sum/
// Accepted at: 2026年7月25日 00:38

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (map.has(target - num)) return [map.get(target - num), i];
        map.set(num, i);
    }

    return [-1, -1];
};
