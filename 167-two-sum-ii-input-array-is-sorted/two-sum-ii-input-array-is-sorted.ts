// Problem: https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
// Accepted at: 2026年4月2日 21:32

function twoSum(numbers: number[], target: number): number[] {
    let index1 = 0;
    let index2 = numbers.length - 1;
    while (index1 < index2) {
        const sum = numbers[index1] + numbers[index2];
        if (sum === target) {
            return [index1 + 1, index2 + 1];
        } else if (sum < target) {
            index1++;
        } else {
            index2--;
        }
    }
};
