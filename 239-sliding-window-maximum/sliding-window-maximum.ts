// Problem: https://leetcode.cn/problems/sliding-window-maximum/
// Accepted at: 2026年7月11日 15:50

function maxSlidingWindow(nums: number[], k: number): number[] {
    const deque: number[] = [];
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop();
        }
        deque.push(i);

        if (deque[0] < i - k + 1) {
            deque.shift();
        }

        // [i - k + 1, i]
        if (i - k + 1 >= 0) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
