// Problem: https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/
// Accepted at: 2026年4月6日 12:02

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    const queue: TreeNode[] = [];
    let leftToRight: boolean = true;

    if(root) queue.push(root);
    while(queue.length > 0){
        const size = queue.length;
        const level: number[] = [];
        for(let i = 0; i < size; i++){
            const index = leftToRight ? i : size - i - 1;
            const node = queue.shift();
            level[index] = node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(level);
        leftToRight = !leftToRight;
    }
    return result;
};
