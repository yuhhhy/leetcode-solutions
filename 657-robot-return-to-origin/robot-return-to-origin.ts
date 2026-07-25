// Problem: https://leetcode.cn/problems/robot-return-to-origin/
// Accepted at: 2026年2月13日 13:56

function judgeCircle(moves: string): boolean {
    // L数量 === R数量 && U数量 === D数量
    return (moves.split('L').length === moves.split('R').length
        && moves.split('U').length === moves.split('D').length)
};
