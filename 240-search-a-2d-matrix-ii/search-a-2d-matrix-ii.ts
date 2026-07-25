// Problem: https://leetcode.cn/problems/search-a-2d-matrix-ii/
// Accepted at: 2026年7月25日 15:25

function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;
    let i = 0;
    let j = n - 1;

    while (i < m && j >= 0) {
        const current = matrix[i][j];
        if(current === target){
            return true;
        }else if (current < target){
            i++;
        }else{
            j--;
        }
    }
    return false;
};
