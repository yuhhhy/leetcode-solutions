// Problem: https://leetcode.cn/problems/set-matrix-zeroes/
// Accepted at: 2026年7月20日 17:14

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length
    const rows: number[] = new Array(m).fill(1);
    const cols: number[] = new Array(n).fill(1);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(matrix[i][j] === 0){
                rows[i] = 0;
                cols[j] = 0;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(rows[i] === 0 || cols[j] === 0){
                matrix[i][j] = 0;
            }
        }
    }
};
