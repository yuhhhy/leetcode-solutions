// Problem: https://leetcode.cn/problems/diameter-of-binary-tree/
// Accepted at: 2026年9月1日 23:59

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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let ans = 0;

    function depth(node: TreeNode | null): number {
        if (!node) return 0;
        const left = depth(node.left);
        const right = depth(node.right);
        ans = Math.max(ans, left + right);
        return Math.max(left, right) + 1;
    }

    depth(root);

    return ans;
};
