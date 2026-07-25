// Problem: https://leetcode.cn/problems/trapping-rain-water/
// Accepted at: 2026年7月4日 19:03

function trap(height: number[]): number {
    let sum = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (leftMax < rightMax) {
            sum += leftMax - height[left];
            left++;
        } else {
            sum += rightMax - height[right];
            right--;
        }
    }

    return sum;
};
