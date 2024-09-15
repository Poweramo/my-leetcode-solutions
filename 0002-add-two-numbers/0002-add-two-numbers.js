/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoNumbers(l1, l2) {
    let trav1 = l1
    let trav2 = l2
    let resList;
    let resTrav;
    let rest = 0

    while (trav1 || trav2) {
        if (!trav1) trav1 = new ListNode()
        if (!trav2) trav2 = new ListNode()

        const sum = trav1.val + trav2.val
        const sumNode = sum + rest >= 10 ? new ListNode(sum - 10 + rest) : new ListNode(sum + rest)
        rest = sum + rest >= 10 ? 1 : 0
        trav1 = trav1.next
        trav2 = trav2.next

        if (!resList) {
            resList = sumNode
            resTrav = resList
            continue
        }
        resTrav.next = sumNode
        resTrav = resTrav.next
    }

    if (rest === 1) resTrav.next = new ListNode(1)
    return resList
}


