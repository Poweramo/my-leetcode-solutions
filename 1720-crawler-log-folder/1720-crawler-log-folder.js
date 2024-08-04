/**
 * @param {string[]} logs
 * @return {number}
 */

function minOperations(logs) {
	let count = 0;

	for (let i = 0; i < logs.length; i++) {
		const log = logs[i];

		switch (log.replace("/", "")) {
			case "..":
				if (count !== 0) count--;
				break;
			case ".":
				break;
			default:
				count++;
				break;
		}
	}

	return count;
}