// Problem: https://leetcode.cn/problems/linked-list-cycle-ii/
// Accepted at: 2026年7月28日 10:46

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
    if (!head || !head.next) return null;

    let fast = head;
    let slow = head;
    let hasCycle = false;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            hasCycle = true;
            break;
        }
    }

    if (!hasCycle) return null;

    // a = kc - b
    fast = head;
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }

    return fast;
};
