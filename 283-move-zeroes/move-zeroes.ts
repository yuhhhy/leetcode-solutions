// Problem: https://leetcode.cn/problems/move-zeroes/
// Accepted at: 2026年7月8日 09:49

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let left = 0, right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
        right++;
    }
};
