// Problem: https://leetcode.cn/problems/decode-string/
// Accepted at: 2026年9月13日 17:55

function decodeString(s: string): string {
    const numStack: number[] = [];
    const strStack: string[] = [];
    let currentNum = 0;
    let currentStr = '';

    for (const char of s) {
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            numStack.push(currentNum);
            strStack.push(currentStr);
            currentNum = 0;
            currentStr = '';
        } else if (char === ']') {
            // 开始拼接
            const repeatTimes = numStack.pop();
            const prevString = strStack.pop();
            currentStr = prevString + currentStr.repeat(repeatTimes);
        } else {
            currentStr += char;
        }
    }

    return currentStr;
};
