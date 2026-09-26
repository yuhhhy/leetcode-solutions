// Problem: https://leetcode.cn/problems/first-missing-positive/
// Accepted at: 2026年9月26日 12:23

function firstMissingPositive(nums: number[]): number {
    const n = nums.length;

    for (let i = 0; i < nums.length; i++) {
        while (
            nums[i] >= 1 &&
            nums[i] <= n &&
            nums[i] !== nums[nums[i] - 1]
        ) {
            const currentIndex = nums[i] - 1;
            [nums[i], nums[currentIndex]] = [nums[currentIndex], nums[i]];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== i + 1) return i + 1;
    }

    return n + 1;
};
