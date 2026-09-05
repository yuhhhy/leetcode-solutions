// Problem: https://leetcode.cn/problems/copy-list-with-random-pointer/
// Accepted at: 2026年9月5日 11:01

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null;

    // 复制节点
    let curr = head;
    while (curr) {
        const copy = new _Node(curr.val, curr.next);
        curr.next = copy;
        curr = copy.next;
    }

    // 复制 random
    curr = head;
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        } else {
            curr.next.random = null;
        }
        curr = curr.next.next;
    }

    // 分离链表
    curr = head;
    const copyHead = head.next;
    while (curr) {
        const copy = curr.next;
        curr.next = copy.next;
        copy.next = curr.next ? curr.next.next : null;
        curr = curr.next;
    }

    return copyHead;
};
