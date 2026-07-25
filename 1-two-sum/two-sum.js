// Problem: https://leetcode.cn/problems/two-sum/
// Accepted at: 2025年9月23日 09:13

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const m = new Map();
    let result = []
    for(let [index, n] of nums.entries()){
        const diff = target - n;
        if(m.has(diff)){
            result = [m.get(diff), index];
        } else {
            m.set(n, index);
        }
    }
    return result;
};
