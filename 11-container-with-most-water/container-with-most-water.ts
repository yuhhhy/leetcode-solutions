// Problem: https://leetcode.cn/problems/container-with-most-water/
// Accepted at: 2026年7月4日 18:47

function maxArea(height: number[]): number {
    let maxVol = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const current = Math.min(height[left], height[right]) * (right - left);
        maxVol = Math.max(maxVol, current);
        if (height[left] < height[right]) left++;
        else right--;
    }

    return maxVol;
};
