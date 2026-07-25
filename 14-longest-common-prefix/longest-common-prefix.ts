// Problem: https://leetcode.cn/problems/longest-common-prefix/
// Accepted at: 2026年6月17日 15:56

function longestCommonPrefix(strs: string[]): string {
    let prefix = "";
    for(let i = 0; i < strs[0].length ; i++){
        const char = strs[0][i];
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== char){
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};
