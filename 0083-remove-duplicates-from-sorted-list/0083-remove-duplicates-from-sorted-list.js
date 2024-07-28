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
function deleteDuplicates(head) {
    let trav1 = head;
	let trav2 = head?.next;

	while (trav2) {
		if (trav1.val === trav2.val) {
			trav2 = trav2.next;
			trav1.next = trav2;
		} else {
			trav1 = trav1.next;
			trav2 = trav2.next;
		}
	}

	return head;
};