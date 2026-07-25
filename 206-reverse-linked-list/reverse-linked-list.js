// Problem: https://leetcode.cn/problems/reverse-linked-list/
// Accepted at: 2025年9月25日 11:39

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next; 
    }
    return prev;
};
