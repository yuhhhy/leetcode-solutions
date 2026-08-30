// Problem: https://leetcode.cn/problems/linked-list-cycle-ii/
// Accepted at: 2026年8月30日 14:53

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

function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            let node = head;
            while (node !== slow) {
                node = node.next;
                slow = slow.next;
            }
            return node;
        }
    }

    return null;
};
