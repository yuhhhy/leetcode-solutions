// Problem: https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
// Accepted at: 2026年9月6日 13:20

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
    const list: TreeNode[] = [];

    function travese(node: TreeNode | null): void {
        if (!node) return;
        list.push(node);
        travese(node.left);
        travese(node.right)
    }
    travese(root);

    for (let i = 0; i < list.length; i++) {
        if (i > 0) {
            list[i - 1].left = null;
            list[i - 1].right = list[i];
        }
        if (i === list.length - 1) {
            list[i].left = null;
            list[i].right = null;
        }
    }
};
