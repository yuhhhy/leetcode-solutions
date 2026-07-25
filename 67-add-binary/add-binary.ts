// Problem: https://leetcode.cn/problems/add-binary/
// Accepted at: 2026年2月14日 00:22

function addBinary(a: string, b: string): string {
    // 0b 前缀表示二进制
    const A = BigInt("0b" + a)
    const B = BigInt("0b" + b)

    return (A + B).toString(2)
}
