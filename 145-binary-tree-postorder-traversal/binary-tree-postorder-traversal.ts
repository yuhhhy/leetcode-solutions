// Problem: https://leetcode.cn/problems/binary-tree-postorder-traversal/
// Accepted at: 2026年6月12日 16:40

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *  
    val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 左右根，是根右左的反转
function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];

    if (root) stack.push(root);

    while (stack.length > 0) {
        // 拿出
        const node = stack.pop();
        result.push(node.val);
        // 放入
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    // 反转
    return result.reverse();
};
