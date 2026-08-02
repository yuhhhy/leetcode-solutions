// Problem: https://leetcode.cn/problems/add-two-numbers/
// Accepted at: 2026年8月2日 20:09

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
    let carry = 0;
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 || l2 || carry) {
        const v1 = l1?.val ?? 0;
        const v2 = l2?.val ?? 0;

        const sum = v1 + v2 + carry;
        const digit = sum % 10;
        carry = Math.floor(sum / 10);

        const node = new ListNode(digit);
        current.next = node;
        current = node;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummy.next;
};
