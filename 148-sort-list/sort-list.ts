// Problem: https://leetcode.cn/problems/sort-list/
// Accepted at: 2026年9月1日 00:46

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

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    // 使用快慢指针找到中点
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    const nextHead = slow.next;
    slow.next = null;

    const left = sortList(head);
    const right = sortList(nextHead);

    // 合并两个有序列表
    return merge(left, right);
};

function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let curr = dummy;

    while (left && right) {
        if (left.val < right.val) {
            curr.next = left;
            left = left.next;
        } else {
            curr.next = right;
            right = right.next;
        }

        curr = curr.next;
    }

    curr.next = left ?? right;

    return dummy.next;
}
