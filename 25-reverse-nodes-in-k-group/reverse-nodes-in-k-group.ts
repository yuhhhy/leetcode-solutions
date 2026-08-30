// Problem: https://leetcode.cn/problems/reverse-nodes-in-k-group/
// Accepted at: 2026年8月31日 00:34

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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (k <= 1) return head;

    const dummy = new ListNode(-1, head);
    let groupPrev = dummy;

    while (true) {
        // 第k个节点
        const kth = getKthNode(groupPrev, k);

        // 剩余节点不足，结束
        if (!kth) break;

        const groupNext = kth.next;
        const groupStart = groupPrev.next;

        // 翻转 [groupStart, kth]
        let prev: ListNode | null = groupNext;
        let curr: ListNode | null = groupStart;
        // 反转 prev -> curr 为 curr -> prev
        // prev = groupNext 是为了让翻转后的最后一个节点自动连接后面的链表
        while (curr !== groupNext) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        groupPrev.next = kth;  // dummy 指向正确节点
        groupPrev = groupStart;  // groupPrev 指向正确的节点
    }

    return dummy.next;
};

function getKthNode(
    start: ListNode,
    k: number
): ListNode | null {
    let curr: ListNode | null = start;

    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }

    return curr;
}
