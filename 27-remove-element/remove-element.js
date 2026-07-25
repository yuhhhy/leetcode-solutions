// Problem: https://leetcode.cn/problems/remove-element/
// Accepted at: 2025年4月1日 15:34

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    let hp = 0, tp = nums.length - 1;
    if(tp === -1){
        return 0;
    }
    while(hp !== tp){
        if(nums[hp] === val){
            let tmp = nums[hp];
            nums[hp] = nums[tp];
            nums[tp] = tmp;
            tp--;
        }else{
            k++;
            hp++;
        }
    }
    if(hp === tp && nums[hp] != val){
        k++
    }
    return k;
};
