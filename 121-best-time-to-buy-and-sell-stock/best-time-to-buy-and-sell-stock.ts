// Problem: https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
// Accepted at: 2026年6月7日 18:39

function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
};
