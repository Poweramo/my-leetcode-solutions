/**
 * @param {string[]} operations
 * @return {number}
 */

function calPoints(operations) {
	let stack = [];
	let record = 0;
	
	for (let i = 0; i < operations.length; i++) {
		const operation = operations[i];

		if (!isNaN(operation)) {
			stack.push(Number(operation));
		} else {
			switch (operation) {
				case "+":
					let last1 = stack.pop();
					let beforeLast = stack.pop();
					let sum;
					sum = last1 + beforeLast;
					stack.push(beforeLast, last1, sum);
					break;

				case "D":
					let last2 = stack.pop();
					let double;
					double = last2 * 2;
					stack.push(last2, double);
					break;

				case "C":
					stack.pop();
					break;
			}
		}
	}

	for (let i = 0; i < stack.length; i++) {
		const score = stack[i];
		record += score;
	}

	return record;
}