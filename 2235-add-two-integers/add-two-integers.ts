// Problem: https://leetcode.cn/problems/add-two-integers/
// Accepted at: 2026年9月5日 12:48

function sum(num1: number, num2: number): number {
    while (num2 !== 0) {
        // 计算进位
        const carry = (num1 & num2) << 1;

        // 异或得到不考虑进位的结果
        num1 = num1 ^ num2;

        // 下一轮处理进位
        num2 = carry;
    }

    return num1;
}
