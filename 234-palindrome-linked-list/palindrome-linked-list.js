// Problem: https://leetcode.cn/problems/palindrome-linked-list/
// Accepted at: 2025年9月27日 00:20

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针 + 反转链表
var isPalindrome = function (head) {
    // 处理空链表或只有一个节点的情况
    if (!head || !head.next) return true;

    // 快慢指针找到链表中点
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 反转后半部分链表
    let p2 = reverseList(slow.next);
    let p1 = head;
    while (p2 !== null) {
        if (p1.val !== p2.val) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    return true;
};

function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
