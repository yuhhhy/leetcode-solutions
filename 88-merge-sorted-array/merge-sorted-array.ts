// Problem: https://leetcode.cn/problems/merge-sorted-array/
// Accepted at: 2026年6月7日 15:16

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while(i >= 0 && j >= 0){
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    while(j >= 0){
        nums1[k--] = nums2[j--];
    }
};
