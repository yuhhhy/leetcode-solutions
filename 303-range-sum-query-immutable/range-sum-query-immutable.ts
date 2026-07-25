// Problem: https://leetcode.cn/problems/range-sum-query-immutable/
// Accepted at: 2026年7月1日 11:40

class NumArray {
    prefix: number[];
    constructor(nums: number[]) {
        this.prefix = [];
        this.prefix[0] = 0;
        for (let i = 0; i < nums.length; i++) {
            this.prefix[i + 1] = this.prefix[i] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        return this.prefix[right + 1] - this.prefix[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
