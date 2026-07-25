// Problem: https://leetcode.cn/problems/move-zeroes/
// Accepted at: 2025年9月24日 21:15

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 反复遍历移动所有0到右边 O(n^2)

    //  双指针，如果左侧为0，右侧非0，交换它们位置上的值O(n)
    let pl = 0, pr = 1;
    while(pr < nums.length){
        if(nums[pl] === 0 && nums[pr] !== 0){
            const tmp = nums[pl];
            nums[pl] = nums[pr];
            nums[pr] = tmp;
            pl++;
            pr++;
        } else if(nums[pl] === 0 && nums[pr] === 0){
            // 寻找第一个非0数，进行交换
            while(pr < nums.length){
                if(nums[pr] !== 0){
                    const tmp = nums[pl];
                    nums[pl] = nums[pr];
                    nums[pr] = tmp;
                    // 结束内层while循环
                    break;
                }
                pr++;
            }
            pl++;
            pr = pl + 1;
        } else {
            pl++;
            pr++;
        }
    }
};

[0,0,12]
