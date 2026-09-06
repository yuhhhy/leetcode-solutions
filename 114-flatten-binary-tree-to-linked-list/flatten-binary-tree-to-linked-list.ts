// Problem: https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
// Accepted at: 2026年9月6日 15:13

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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    let nextNode = null;

    function travese(node: TreeNode | null): void {
        if (!node) return;
        travese(node.right);
        travese(node.left);
        node.left = null;
        node.right = nextNode;
        nextNode = node;
    }
    travese(root);
};
