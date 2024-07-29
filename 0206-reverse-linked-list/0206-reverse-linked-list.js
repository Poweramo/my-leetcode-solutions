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

function reverseList(head) {
	let prev = null;
	let trav = head;
	let next = null;

	while (trav) {
		next = trav.next;
		trav.next = prev;
		prev = trav;
		trav = next;
	}

	return prev;
};