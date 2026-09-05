// Problem: https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
// Accepted at: 2026年9月5日 18:34

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

function kthSmallest(root: TreeNode | null, k: number): number {
    const values: number[] = [];

    function inorder(node: TreeNode | null): void {
        if (!node || values.length >= k) return;

        inorder(node.left);
        values.push(node.val);
        inorder(node.right);
    }
    inorder(root);

    return values[k - 1];
};
