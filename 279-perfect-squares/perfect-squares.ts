// Problem: https://leetcode.cn/problems/perfect-squares/
// Accepted at: 2026年3月19日 16:02

// dp[i] = Math.min(dp[i - 1 * 1], dp[i - 2 * 2], ...dp[i - j * j]) + 1

function numSquares(n: number): number {
    const dp: number[] = [];
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        dp[i] = i;
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
};
