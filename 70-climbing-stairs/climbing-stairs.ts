// Problem: https://leetcode.cn/problems/climbing-stairs/
// Accepted at: 2026年3月7日 17:05

function climbStairs(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;

    const dp: number[] = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};
