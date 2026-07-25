// Problem: https://leetcode.cn/problems/maximum-subarray/
// Accepted at: 2026年7月14日 11:05

function maxSubArray(nums: number[]): number {
    let currentSum = nums[0];
    let maxSum = nums[0];

    // 以 i 为结尾的最大子数组 max[i] = Math.max(max[i - 1] + nums[i], nums[i])
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
