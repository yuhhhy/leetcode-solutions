// Problem: https://leetcode.cn/problems/spiral-matrix/
// Accepted at: 2026年3月24日 14:42

function spiralOrder(matrix: number[][]): number[] {
    const m = matrix.length;
    const n = matrix[0].length;
    const result: number[] = [];
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;
    while (left <= right && top <= bottom) {
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        };
        top++
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        };
        right--;
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;
        }
    }
    return result;
};
