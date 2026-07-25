// Problem: https://leetcode.cn/problems/permutations/
// Accepted at: 2026年4月6日 11:30

function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(index: number): void {
        if (index === nums.length) {
            result.push([...nums]);
            return;
        }
        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            backtrack(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }
    backtrack(0);
    return result;
};
