// Problem: https://leetcode.cn/problems/boats-to-save-people/
// Accepted at: 2026年2月9日 16:03

function numRescueBoats(people: number[], limit: number): number {

    // 从大到小排序
    people.sort((a, b) => b - a)

    let heavy = 0
    let light = people.length - 1
    let res = 0

    while (heavy < light) {
        if (people[heavy] + people[light] <= limit) {
            heavy++
            light--
        } else {
            heavy++
        }
        res++
    }
    if (heavy === light) {
        res++
    }
    return res
};

// 1 2 2 3 
// bad: [1, 2] [2] [3]
// good: [1, 3] [2, 2]
