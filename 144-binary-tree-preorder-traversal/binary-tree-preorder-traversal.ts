// Problem: https://leetcode.cn/problems/binary-tree-preorder-traversal/
// Accepted at: 2026年6月12日 16:35

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

// 根左右
function preorderTraversal(root: TreeNode | null): number[] {
    // 使用堆栈存放之后返回的节点
    const result: number[] = [];
    const stack: TreeNode[] = [];

    // 循环的条件是堆栈里还有节点
    if(root) stack.push(root);
    while(stack.length > 0){
        const node = stack.pop();
        result.push(node.val);
        // 添加新节点
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return result;
};
