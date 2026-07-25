// Problem: https://leetcode.cn/problems/rotate-image/
// Accepted at: 2026年3月7日 15:51

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    // 转置 + 水平翻转
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse()
    }
};
