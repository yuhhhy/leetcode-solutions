// Problem: https://leetcode.cn/problems/sliding-window-maximum/
// Accepted at: 2026年9月19日 19:02

function maxSlidingWindow(nums: number[], k: number): number[] {
    const dequeue: number[] = [];
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        while (dequeue.length > 0 && nums[i] >= nums[dequeue.at(-1)]) {
            dequeue.pop();
        }
        dequeue.push(i);

        if (dequeue[0] < i - k + 1) {
            dequeue.shift();
        }

        if(i - k + 1 >= 0){
            result.push(nums[dequeue[0]]);
        }
    }

    return result;
};
