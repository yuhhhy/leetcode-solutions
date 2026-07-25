// Problem: https://leetcode.cn/problems/kth-largest-element-in-an-array/
// Accepted at: 2026年6月9日 10:55

function findKthLargest(nums: number[], k: number): number {
    const target = nums.length - k;

    function quickSelect(left: number, right: number): number {
        const pivot = nums[left + Math.floor(Math.random() * (right - left + 1))];

        let lt = left;
        let i = left;
        let gt = right;

        while (i <= gt) {
            if (nums[i] < pivot) {
                [nums[i], nums[lt]] = [nums[lt], nums[i]];
                lt++;
                i++;
            } else if (nums[i] > pivot) {
                [nums[i], nums[gt]] = [nums[gt], nums[i]];
                gt--;
            } else {
                i++;
            }
        }
        /**
        [left, lt)
        [lt, gt]
        (gt, right]
         */


        if (target < lt) {
            return quickSelect(left, lt - 1);
        } else if (target > gt) {
            return quickSelect(gt + 1, right);
        } else {
            return nums[target];
        }
    }
    return quickSelect(0, nums.length - 1);
};
