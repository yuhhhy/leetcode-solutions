// Problem: https://leetcode.cn/problems/add-strings/
// Accepted at: 2026年7月1日 14:53

function addStrings(num1: string, num2: string): string {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    const result: number[] = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? num1.charCodeAt(i) - 48 : 0;
        const digitB = j >= 0 ? num2.charCodeAt(j) - 48 : 0;
        const sum = digitA + digitB + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return result.reverse().join('');
}
