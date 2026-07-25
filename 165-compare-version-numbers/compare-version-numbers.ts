// Problem: https://leetcode.cn/problems/compare-version-numbers/
// Accepted at: 2026年6月5日 22:57

function compareVersion(version1: string, version2: string): number {
    const v1 = version1.split(".");
    const v2 = version2.split(".");
    let p = 0;
    while(p < v1.length || p < v2.length){
        const n1 = Number(v1[p] ?? 0);
        const n2 = Number(v2[p] ?? 0);
        if(n1 > n2) return 1;
        else if(n1 < n2) return -1;
        p++;
    }
    return 0;
};
