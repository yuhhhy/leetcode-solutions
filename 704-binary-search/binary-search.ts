// Problem: https://leetcode.cn/problems/binary-search/
// Accepted at: 2026年5月29日 00:02

function search(nums: number[], target: number): number {
    let left = -1;
    let right = nums.length;
    while (left + 1 !== right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return nums[right] === target ? right : -1;
};
