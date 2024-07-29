/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
	let trav1 = head;
	let trav2 = head?.next;

	while (trav2) {
		if (trav2.val === val) {
			trav2 = trav2.next;
			trav1.next = trav2;
		} else {
			if (head.val === val) {
				head = head.next;
			} else {
				trav1 = trav1.next;
				trav2 = trav2.next;
			}
		}
	}

	if (trav2 === null) {
		if (trav1?.val === val) {
			head = null;
		}
	}
    
	return head;
};