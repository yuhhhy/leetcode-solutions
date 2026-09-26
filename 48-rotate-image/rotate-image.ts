// Problem: https://leetcode.cn/problems/rotate-image/
// Accepted at: 2026年9月26日 17:15

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;

    // 顺序很重要
    // 先沿对角线交换，再水平反转是顺时针旋转
    // 先水平反转，再沿对角线交换是逆时针旋转
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        // Array.prototype.reverse()
        matrix[i].reverse();
    }

};
