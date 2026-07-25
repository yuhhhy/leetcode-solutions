// Problem: https://leetcode.cn/problems/valid-mountain-array/
// Accepted at: 2026年2月9日 15:37

function validMountainArray(arr: number[]): boolean {
    const n = arr.length
    if (n < 3) return false

    let i = 1
    // 递增遍历
    while (i < n && arr[i] > arr[i - 1]) {
        i++
    }
    if (i === 1 || i === n) return false

    // 递减遍历
    while (i < n && arr[i] < arr[i - 1]) {
        i++
    }
    return i === n
};
