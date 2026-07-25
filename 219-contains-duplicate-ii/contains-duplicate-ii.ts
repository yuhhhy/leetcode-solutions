// Problem: https://leetcode.cn/problems/contains-duplicate-ii/
// Accepted at: 2026年2月14日 01:12

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    if (k === 0) return false
    // 存储一个大小为 k 的滑动窗口，不含重复元素
    const window = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
        if (window.has(nums[i])) {
            return true
        }
        window.add(nums[i])
        // 维护窗口大小
        if (i - k >= 0){
            window.delete(nums[i-k])
        }
    }
    return false
};
