// Problem: https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
// Accepted at: 2026年4月3日 11:17

function removeDuplicates(nums: number[]): number {
    let slow = 1;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
};
