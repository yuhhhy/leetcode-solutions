// Problem: https://leetcode.cn/problems/swap-nodes-in-pairs/
// Accepted at: 2026年8月30日 23:56

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

function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;

    let prev = head;
    let curr = head.next;

    prev.next = swapPairs(curr.next);
    curr.next = prev;

    return curr;
};
