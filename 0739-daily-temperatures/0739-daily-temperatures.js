/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

function dailyTemperatures(temperatures) {
	const answer = new Array(temperatures.length);
	const stack = [];
	answer.fill(0);

	for (let i = 0; i < temperatures.length; i++) {
		const current = i;

		if (stack.length === 0) {
			stack.push(current);
			continue;
		}

		while (stack.length !== 0) {
			if (temperatures[current] <= temperatures[stack[stack.length - 1]]) break;

			const index = stack.pop();
			answer[index] = current - index;
		}
		stack.push(current);
	}

	return answer;
}