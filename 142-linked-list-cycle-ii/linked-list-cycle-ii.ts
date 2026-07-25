// Problem: https://leetcode.cn/problems/linked-list-cycle-ii/
// Accepted at: 2026年2月6日 23:30

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return null
    let slow: ListNode | null = head
    let fast: ListNode | null = head
    let hasCycle = false

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) {
            hasCycle = true
            break
        }
    }
    if (!hasCycle) return null
    // 从起点到入口的距离，等于从相遇点到入口的距离
    // 从头节点出发一个指针，从相遇点出发一个指针，它们最终会在入环点相遇
    // 寻找入环点   
    fast = head
    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    return fast
};
