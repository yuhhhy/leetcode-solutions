// Problem: https://leetcode.cn/problems/invert-binary-tree/
// Accepted at: 2026年4月6日 12:08

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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    if (!root.left && !root.right) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    return root;
};
