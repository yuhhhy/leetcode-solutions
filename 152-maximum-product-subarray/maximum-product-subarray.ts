// Problem: https://leetcode.cn/problems/maximum-product-subarray/
// Accepted at: 2026年9月14日 23:47

// 对于每个位置 i，以 nums[i] 结尾的子数组，其最大乘积只能来自三种情况：
// nums[i] 本身
// nums[i] × 之前最大乘积
// nums[i] × 之前最小乘积（负数×负数可能变最大）
function maxProduct(nums: number[]): number {
    const n = nums.length;
    let maxProd = nums[0];  // 以当前元素结尾的最大乘积
    let minProd = nums[0];  // 以当前元素结尾的最小乘积
    let result = nums[0];  // 全局最大乘积

    for (let i = 1; i < n; i++) {
        const curr = nums[i];

        if (curr < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(curr, curr * maxProd);
        minProd = Math.min(curr, curr * minProd);
        result = Math.max(result, maxProd);
    }

    return result;
};
