// Problem: https://leetcode.cn/problems/4sum-ii/
// Accepted at: 2026年2月14日 15:26

function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const n = nums1.length
    const map = new Map<number, number>()
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const sum = nums1[i] + nums2[j]
            map.set(sum, (map.get(sum) || 0) + 1)
        }
    }
    let count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const target = -(nums3[i] + nums4[j])
            if (map.has(target)) {
                count += map.get(target)
            }
        }
    }
    return count
};
