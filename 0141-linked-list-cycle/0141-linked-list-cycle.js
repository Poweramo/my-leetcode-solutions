/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function hasCycle(head) {
    let slow = head;
	let fast = head;

	slow = slow?.next;
	fast = fast?.next?.next;
	
	while (slow !== fast) {
		slow = slow?.next;
		fast = fast?.next?.next;
		
	}
 
	if (!slow && !fast) return false
    if (slow === fast) return true
}