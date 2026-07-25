// Problem: https://leetcode.cn/problems/contains-duplicate/
// Accepted at: 2026年2月14日 00:43

function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>()
    for (const num of nums) {
        set.add(num)
    }
    return set.size !== nums.length
};
