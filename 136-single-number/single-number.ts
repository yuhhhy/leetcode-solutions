// Problem: https://leetcode.cn/problems/single-number/
// Accepted at: 2026年2月13日 13:40

function singleNumber(nums: number[]): number {
    let result = 0

    for(let num of nums){
        result ^= num
    }

    return result
};
