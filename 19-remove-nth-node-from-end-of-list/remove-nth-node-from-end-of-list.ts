// Problem: https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
// Accepted at: 2026年7月31日 22:53

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(-1, head);
    let size = 1;
    let currentNode = head;

    // 计算节点数
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
        size++;
    }

    // 删除的前一个节点和删除的节点
    let pre = dummy;
    let target = head;

    // 正数第 size - n + 1 个节点
    for (let i = 0; i < size - n; i++) {
        pre = pre.next;
        target = target.next;
    }
    pre.next = target.next;

    return dummy.next;
};
