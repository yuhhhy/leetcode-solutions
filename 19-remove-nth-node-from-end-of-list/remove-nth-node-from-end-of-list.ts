// Problem: https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
// Accepted at: 2026年6月12日 16:12

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let sz = 1;
    let currentNode = head;
    let dummyNode = new ListNode(0, head);
    
    // 计算节点数
    while(currentNode.next !== null){
        currentNode = currentNode.next;
        sz++;
    }

    // 删除的前一个节点和删除的节点
    let pre = dummyNode;
    let target = head;
    
    // 正书第 sz - n + 1 个节点
    for(let i = 1; i < sz - n + 1; i++){
        pre = pre.next;
        target = target.next;
    }
    pre.next = target.next;
    
    // 只有一个节点的情况
    return dummyNode.next;
};
