/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

function timeRequiredToBuy(tickets, k) {
	let timeNeededSeconds = 0;
	let index = 0;

	while (tickets[k] !== 0) {
		if (tickets[index] !== 0) {
			tickets[index]--;
			timeNeededSeconds++;
		}

		index++;
		if (index === tickets.length) index = 0;
	}

	return timeNeededSeconds;
}