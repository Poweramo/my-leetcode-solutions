/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeTwoLists(list1, list2) {
    let head = new ListNode();
	let trav = head;

	while (list1 && list2) {
		if (list1.val <= list2.val) {
			trav.next = list1;
			list1 = list1.next;
		} else {
			trav.next = list2;
			list2 = list2.next;
		}

		trav = trav.next;
	}

	trav.next = list1 === null ? list2 : list1;
	return head.next;
};