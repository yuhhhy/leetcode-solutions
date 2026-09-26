// Problem: https://leetcode.cn/problems/longest-increasing-subsequence/
// Accepted at: 2026年9月14日 23:34

function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    // dp[i] 是以 nums[i] 为结尾的最长子序列长度
    const dp: number[] = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};
