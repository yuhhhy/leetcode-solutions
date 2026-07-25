// Problem: https://leetcode.cn/problems/count-primes/
// Accepted at: 2026年2月11日 13:42

function countPrimes(n: number): number {
    if (n < 3) return 0
        
    // 既然只需要存布尔值，可以用 Uint8Array 代替普通数组，内存更省，速度更快
    const isPrime = new Uint8Array(n).fill(1);

    isPrime[0] = 0
    isPrime[1] = 0

    for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0
            }
        }
    }

    let count = 0
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++
        }
    }
    return count
};
