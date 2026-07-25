// Problem: https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
// Accepted at: 2026年5月30日 19:20

function searchRange(nums: number[], target: number): number[] {
    return [findFirst(nums, target), findLast(nums, target)];
};

function findFirst(nums: number[], target: number): number {
    let left = -1, right = nums.length;
    while (left + 1 !== right) {
        const mid = (left + right) >> 1;
        if (nums[mid] < target) left = mid;
        else right = mid;
    }
    return nums[right] === target ? right : -1;
}

function findLast(nums: number[], target: number): number {
    let left = -1, right = nums.length;
    while (left + 1 !== right) {
        const mid = (left + right) >> 1;
        if (nums[mid] <= target) left = mid;
        else right = mid;
    }
    return nums[left] === target ? left : -1;
}
