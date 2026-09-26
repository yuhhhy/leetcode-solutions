// Problem: https://leetcode.cn/problems/sliding-window-maximum/
// Accepted at: 2026年9月26日 11:45

function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    // 队列存储下标
    const dequeue: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        // 入队
        while (dequeue.length > 0 && nums[dequeue.at(-1)] <= nums[i]) {
            dequeue.pop();
        }
        dequeue.push(i);

        // 出队
        if (dequeue[0] < i - k + 1) {
            dequeue.shift();
        }

        // 记录最大值
        if (i - k + 1 >= 0) {
            result.push(nums[dequeue[0]]);
        }
    }

    return result;
};
