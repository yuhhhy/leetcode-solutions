// Problem: https://leetcode.cn/problems/search-a-2d-matrix-ii/
// Accepted at: 2026年3月7日 16:10

function searchMatrix(matrix: number[][], target: number): boolean {
    // 从右上角开始遍历
    const m = matrix.length;
    const n = matrix[0].length;
    let i = 0;
    let j = n - 1;
    while (i < m && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return false;
};
