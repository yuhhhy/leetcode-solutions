// Problem: https://leetcode.cn/problems/diameter-of-binary-tree/
// Accepted at: 2026年3月8日 15:48

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
    let maxDiameter = 0;
    // 深度定义：节点数
    // 这个函数要递归计算所有节点的深度并返回，并更新maxDiameter
    function depth(node: TreeNode | null): number {
        if (node === null) return 0;
        // 递归计算左右子树的深度
        const left  = depth(node.left);
        const right  = depth(node.right);
        // 当前节点的最大直径 = 左深度 + 右深度
        maxDiameter = Math.max(maxDiameter, left + right );
        // 返回当前节点的深度
        return Math.max(left, right) + 1;
    }
    depth(root);
    return maxDiameter;
};
