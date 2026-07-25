// Problem: https://leetcode.cn/problems/linked-list-cycle/
// Accepted at: 2026年2月6日 16:38

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

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false

    let slow: ListNode | null = head
    let fast: ListNode | null = head.next

    while (fast !== null && fast.next!==null) {
        if (fast === slow) {
            return true
        }
        slow = slow.next
        fast = fast.next.next
    }
    return false
};
