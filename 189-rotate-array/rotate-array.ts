// Problem: https://leetcode.cn/problems/rotate-array/
// Accepted at: 2026年7月16日 11:45

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;
    if (n === 1 || k === 0) return;

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};
