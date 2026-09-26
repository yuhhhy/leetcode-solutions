// Problem: https://leetcode.cn/problems/product-of-array-except-self/
// Accepted at: 2026年9月26日 17:26

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const prefix: number[] = new Array(n).fill(1);
    const suffix: number[] = new Array(n).fill(1);
    const answer: number[] = new Array(n);

    for (let i = 1; i < n; i++) {
        prefix[i] = nums[i - 1] * prefix[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = nums[i + 1] * suffix[i + 1];
    }
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }
    return answer;
};
