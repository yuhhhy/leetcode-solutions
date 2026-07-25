// Problem: https://leetcode.cn/problems/minimum-cost-for-tickets/
// Accepted at: 2026年6月5日 23:08

function mincostTickets(days: number[], costs: number[]): number {
    const dp = new Array(366).fill(0)
    const travelDays = new Set(days);
    const lastDay = days[days.length - 1]

    for (let i = 1; i <= lastDay; i++) {
        if (!travelDays.has(i)) {
            dp[i] = dp[i - 1];
        }
        else {
            dp[i] = Math.min(
                dp[i - 1] + costs[0],
                dp[Math.max(0, i - 7)] + costs[1],
                dp[Math.max(0, i - 30)] + costs[2]
            )
        }
    }
    return dp[lastDay];
};
