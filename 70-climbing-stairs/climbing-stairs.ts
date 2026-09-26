// Problem: https://leetcode.cn/problems/climbing-stairs/
// Accepted at: 2026年9月14日 23:54

function climbStairs(n: number): number {
    // dp[i] 代表到达第 i 阶的爬法数
    const dp: number[] = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
