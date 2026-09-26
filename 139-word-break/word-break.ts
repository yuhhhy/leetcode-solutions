// Problem: https://leetcode.cn/problems/word-break/
// Accepted at: 2026年9月14日 23:20

function wordBreak(s: string, wordDict: string[]): boolean {
    const n =s.length;
    const wordSet = new Set<string>(wordDict);
    // dp[i] 到第 i 个字符的字串是否可以拼接
    const dp: boolean[] = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            // dp[j] 为 true 且 s[j..i-1] 在字典中
            // substring(start, end) 返回子字符串中第一个要包含/要排除的字符的索引
            if (dp[j] && wordSet.has(s.substring(j, i))){
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
};
