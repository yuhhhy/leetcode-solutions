// Problem: https://leetcode.cn/problems/binary-tree-right-side-view/
// Accepted at: 2026年9月6日 12:55

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
    const results: number[] = [];
    let maxDepth = 0

    function view(node: TreeNode | null, parentDepth: number): void {
        if (!node) return;
        
        const currDepth = parentDepth + 1;
        if (currDepth > maxDepth) {
            results.push(node.val);
            maxDepth = currDepth;
        }
        view(node.right, currDepth);
        view(node.left, currDepth);
    }
    view(root, 0);

    return results;
};
