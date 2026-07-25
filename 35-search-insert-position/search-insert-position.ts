// Problem: https://leetcode.cn/problems/search-insert-position/
// Accepted at: 2026年5月30日 19:14

function searchInsert(nums: number[], target: number): number {
    let left = -1, right = nums.length;
    while (left + 1 !== right) {
        const mid = (left + right) >> 1;
        if (nums[mid] < target) left = mid;
        else right = mid;
    }
    return right;
};
