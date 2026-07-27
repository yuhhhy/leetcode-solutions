// Problem: https://leetcode.cn/problems/palindrome-linked-list/
// Accepted at: 2026年7月27日 23:02

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

function isPalindrome(head: ListNode | null): boolean {
    let fast = head, slow = head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    let half = reverseList(slow);
    let start = head;

    while(start && half){
        if(start.val !== half.val) return false;
        start = start.next;
        half = half.next;
    }

    return true;
};

function reverseList(head: ListNode | null): ListNode | null{
    if(!head || !head.next) return head;

    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}
