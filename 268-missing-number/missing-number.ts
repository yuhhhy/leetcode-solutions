// Problem: https://leetcode.cn/problems/missing-number/
// Accepted at: 2026年2月10日 13:52

function missingNumber(nums: number[]): number {
    const n = nums.length

    let intendedSum = n * (n + 1) / 2
    let currentSum = 0
    
    for (let i = 0; i < n; i++) {
        currentSum += nums[i]
    }

    return intendedSum - currentSum
};
