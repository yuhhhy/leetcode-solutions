// Problem: https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Accepted at: 2026年9月12日 16:38

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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const map = new Map<number, number>();
    inorder.forEach((val, i) => map.set(val, i));

    let preIndex = 0;

    // 先序序列的首元素必为当前子树的根
    // 在中序序列中定位该根，其左侧属于左子树、右侧属于右子树
    function build(start: number, end: number): TreeNode | null {
        if (start > end) return null;

        const root = new TreeNode(preorder[preIndex++]);
        const mid = map.get(root.val);

        root.left = build(start, mid - 1);
        root.right = build(mid + 1, end);

        return root;
    }

    return build(0, preorder.length - 1);
};
