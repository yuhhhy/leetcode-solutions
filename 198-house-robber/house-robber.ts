// Problem: https://leetcode.cn/problems/house-robber/
// Accepted at: 2026年3月19日 11:19

function rob(nums: number[]): number {
    const n = nums.length;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);

    const maxSteal = new Array<number>(n).fill(0);
    maxSteal[0] = nums[0];
    maxSteal[1] = nums[1];
    maxSteal[2] = nums[0] + nums[2];

    for (let i = 3; i < n; i++) {
        maxSteal[i] = nums[i] + Math.max(maxSteal[i - 2], maxSteal[i - 3]);
    }

    return Math.max(maxSteal[n - 2], maxSteal[n - 1]);
};
