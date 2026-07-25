// Problem: https://leetcode.cn/problems/spiral-matrix/
// Accepted at: 2026年7月25日 12:11

function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];
    const m = matrix.length, n = matrix[0].length
    let left = 0, right = n - 1, top = 0, bottom = m - 1;

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
};
