// Problem: https://leetcode.cn/problems/binary-tree-right-side-view/
// Accepted at: 2026年9月6日 13:04

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

function rightSideView(root: TreeNode | null): number[] {
    const queue: TreeNode[] = [];
    const results: number[] = [];

    if (root) queue.push(root);
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = size; i > 0; i--) {
            const node = queue.shift();
            if (i === size) {
                results.push(node.val);
            }
            if (node.right) queue.push(node.right);
            if (node.left) queue.push(node.left);
        }
    }

    return results;
};
