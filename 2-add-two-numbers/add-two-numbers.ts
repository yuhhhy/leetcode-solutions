// Problem: https://leetcode.cn/problems/add-two-numbers/
// Accepted at: 2026年8月30日 16:21

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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let carry = 0;
    let curr = dummy;

    while (l1 || l2 || carry) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const digit = (n1 + n2 + carry) % 10;
        carry = Math.floor((n1 + n2 + carry) / 10);

        curr.next = new ListNode(digit);
        curr = curr.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};
