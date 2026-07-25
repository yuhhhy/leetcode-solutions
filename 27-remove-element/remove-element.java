// Problem: https://leetcode.cn/problems/remove-element/
// Accepted at: 2026年4月3日 11:01

class Solution {
    public int removeElement(int[] nums, int val) {
        int slow = 0;

        for (int fast = 0; fast < nums.length; fast++) {
            if (nums[fast] != val) {
                nums[slow] = nums[fast];
                slow++;
            } 
        }

        return slow;
    }
}
