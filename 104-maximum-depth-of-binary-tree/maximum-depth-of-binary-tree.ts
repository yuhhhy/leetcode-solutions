// Problem: https://leetcode.cn/problems/maximum-depth-of-binary-tree/
// Accepted at: 2026年6月9日 11:11

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

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);
    return Math.max(leftMax, rightMax) + 1;
};
