// Problem: https://leetcode.cn/problems/generate-parentheses/
// Accepted at: 2026年4月6日 11:50

function generateParenthesis(n: number): string[] {
    const res: string[] = [];
    function backtrack(str: string, left: number, right: number): void {
        if (str.length === n * 2) {
            res.push(str);
            return;
        }
        if (left < n) {
            backtrack(str + "(", left + 1, right);
        }
        if (right < left) {
            backtrack(str + ")", left, right + 1);
        }
    };
    backtrack("", 0, 0);
    return res;
};
