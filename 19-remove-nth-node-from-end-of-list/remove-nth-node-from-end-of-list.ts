// Problem: https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
// Accepted at: 2026年8月30日 16:35

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
    let sz = 0;
    let curr = dummy;

    while (curr.next) {
        curr = curr.next;
        sz++;
    }

    curr = dummy;
    for (let i = 0; i < sz - n; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;

    return dummy.next;
};
