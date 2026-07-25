// Problem: https://leetcode.cn/problems/majority-element/
// Accepted at: 2026年2月14日 12:04

function majorityElement(nums: number[]): number {
    // 维护一个候选人 candidate 和一个计数器 count。
    let candidate: number | undefined = undefined
    let count: number = 0
    for (const num of nums) {
        if (count === 0) {
            candidate = num
            count++
        } else if (candidate === num) {
            count++
        } else {
            count--
        }
    }
    return candidate as number
};
