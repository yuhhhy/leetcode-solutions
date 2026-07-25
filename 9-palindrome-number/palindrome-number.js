// Problem: https://leetcode.cn/problems/palindrome-number/
// Accepted at: 2024年10月25日 23:25

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let isPalindrome = false;
    if (x >= 0) {
        const xs = x.toString();
        const n = xs.length;
        if (n === 1) {
            isPalindrome = true;
        } else {
            isPalindrome = true;
            for (let i = 0; i < Math.floor(n / 2); i++) {
                if (xs.charAt(i) !== xs.charAt(n - i - 1)) {
                    isPalindrome = false;
                }
            }
        }
    }
    return isPalindrome;
};
