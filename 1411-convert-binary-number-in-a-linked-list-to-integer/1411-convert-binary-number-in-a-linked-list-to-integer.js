/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */

function getDecimalValue(head) {
    let prev = null;
	let next = null;
	let i = 0;
	let result = 0;

	while (head) {
		next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	while (prev) {
		result += prev.val * 2 ** i;
		prev = prev.next;
		i++;
	}

	return result;
};