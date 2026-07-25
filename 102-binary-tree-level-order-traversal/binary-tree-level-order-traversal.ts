// Problem: https://leetcode.cn/problems/binary-tree-level-order-traversal/
// Accepted at: 2026年6月12日 17:17

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
    let result: number[][] = [];
    let queue: TreeNode[] = [];

    if (root) queue.push(root);

    while (queue.length > 0) {
        // 每次队列里的都是同一层的节点，清空
        const size = queue.length;
        // 当前层的结果
        const level: number[] = [];
        // 遍历当前层节点
        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;
            level.push(node.val);
            // 下一层入队
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
};
