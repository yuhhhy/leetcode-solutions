// Problem: https://leetcode.cn/problems/symmetric-tree/
// Accepted at: 2026年4月6日 11:55

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    function isMiror(left: TreeNode | null, right: TreeNode | null): boolean{
        if(!left && !right) return true;
        if(!left || !right) return false;
        if(left.val !== right.val) return false;
        return isMiror(left.left, right.right) && isMiror(left.right, right.left);
    }
    return isMiror(root.left, root.right);
};
