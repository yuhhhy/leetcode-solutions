// Problem: https://leetcode.cn/problems/container-with-most-water/
// Accepted at: 2025年9月26日 20:34

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let pl = 0;
    let pr = height.length - 1;
    while(pl !== pr){
        tmp = (pr - pl)*Math.min(height[pl], height[pr]);     
        max = tmp > max ? tmp : max;
        if(height[pl] < height[pr]){
            pl++;
        }else{
            pr--;
        }
    }
    return max;
};
