// Problem: https://leetcode.cn/problems/binary-tree-level-order-traversal/
// Accepted at: 2026年9月1日 23:54

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

function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = []
    const queue: TreeNode[] = [];

    if (root) queue.push(root);

    while (queue.length > 0) {
        const sz = queue.length;
        const levelResult: number[] = [];
        for (let i = 0; i < sz; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            levelResult.push(node.val);
        }
        result.push(levelResult);
    }
    return result;
};
