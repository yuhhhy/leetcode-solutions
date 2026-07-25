// Problem: https://leetcode.cn/problems/wtcaE1/
// Accepted at: 2025年9月23日 08:30

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let pl = 0;
    let pr = 0;
    let maxLen = 0;
    let strMap = new Map();
    while(pr < s.length){       
        if(!strMap.has(s[pr])){
            strMap.set(s[pr], pr);
            const curLen = pr - pl + 1;
            maxLen = curLen > maxLen ? curLen : maxLen;
        } else {
            pl = strMap.get(s[pr]) + 1;   
            strMap = new Map();
            // 更新strMap
            for(let i = pl;i <= pr;i++){
                strMap.set(s[i], i)
            }
        }
        pr++;
    }
    return maxLen;
};
