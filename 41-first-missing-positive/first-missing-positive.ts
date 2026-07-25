// Problem: https://leetcode.cn/problems/first-missing-positive/
// Accepted at: 2026年7月16日 17:09

function firstMissingPositive(nums: number[]): number {
    // 使用哈希的思想，假设 nums[i] 位置上的数是 i + 1
    const n = nums.length;

    // 影响结果的正数从 1 到 n，让正数 nums[i] 放在 nums[i] - 1 索引
    for (let i = 0; i < n; i++) {
        while (
            nums[i] >= 1 &&
            nums[i] <= n &&
            nums[i] !== nums[nums[i] - 1]
        ) {
            const targetIdx = nums[i] - 1;
            [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
};
