// Problem: https://leetcode.cn/problems/minimum-size-subarray-sum/
// Accepted at: 2026年4月3日 10:34

function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0, sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};
