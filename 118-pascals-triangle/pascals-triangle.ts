// Problem: https://leetcode.cn/problems/pascals-triangle/
// Accepted at: 2026年3月7日 17:21

function generate(numRows: number): number[][] {
    const result: number[][] = [];
    // 从第一行开始，逐行构建
    for (let i = 0; i < numRows; i++) {
        const row: number[] = new Array(i + 1);
        row[0] = 1;
        row[i] = 1;
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(row);
    }

    return result;
};
