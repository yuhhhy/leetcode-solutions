// Problem: https://leetcode.cn/problems/first-bad-version/
// Accepted at: 2026年2月10日 13:00

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let L = -1
        let R = n
        while(L + 1 !== R){
            const mid = Math.floor((L+R)/2)
            if(isBadVersion(mid)){
                R = mid
            }else{
                L = mid
            }
        }
        return R
    };
};
