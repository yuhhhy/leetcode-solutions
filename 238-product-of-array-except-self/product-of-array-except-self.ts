// Problem: https://leetcode.cn/problems/product-of-array-except-self/
// Accepted at: 2026年7月16日 16:45

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const answer: number[] = [];
    const forward: number[] = new Array(n).fill(1);
    const behind: number[] = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        forward[i] = forward[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        behind[i] = behind[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        answer[i] = forward[i] * behind[i];
    }

    return answer;
};
