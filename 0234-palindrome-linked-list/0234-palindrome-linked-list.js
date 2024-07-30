/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


function isPalindrome(head) {
    if (head === null || head.next === null) {
		return true;
	}

	let slow = head;
	let fast = head;
	while (fast) {
		fast = fast?.next?.next;
		slow = slow.next;
	}

	let prev = null;
	let trav = slow;
	let next = null;
	while (trav) {
		next = trav.next;
		trav.next = prev;
		prev = trav;
		trav = next;
	}

	while (prev) {
		if (head.val !== prev.val) {
			return false;
		}
		head = head.next;
		prev = prev.next;
	}

	return true;
};