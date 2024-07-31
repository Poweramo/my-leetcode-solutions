/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function getIntersectionNode(headA, headB) {
    let lenTravA = headA;
	let lenTravB = headB;
	let lenA = 0;
	let lenB = 0;

	while (lenTravA) {
		lenA++;
		lenTravA = lenTravA.next;
	}
	while (lenTravB) {
		lenB++;
		lenTravB = lenTravB.next;
	}

	let travA = headA;
	let travB = headB;

	while (lenA !== lenB) {
		if (lenA > lenB) {
			travA = travA.next;
			lenA--;
		} else {
			travB = travB.next;
			lenB--;
		}
	}

	while (travA) {
		if (travA === travB) {
			return travA;
		}

		travA = travA.next;
		travB = travB.next;
	}
};