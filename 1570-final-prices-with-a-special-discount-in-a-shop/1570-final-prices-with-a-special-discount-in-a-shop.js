/**
 * @param {number[]} prices
 * @return {number[]}
 */

function finalPrices(prices) {
	let answer = [];

	for (let i = 0; i < prices.length; i++) {
		let smallerExists = false;
		for (let j = i + 1; j < prices.length; j++) {
			if (prices[i] >= prices[j]) {
				answer.push(prices[i] - prices[j]);
				smallerExists = true;
				break;
			}
		}
		if (!smallerExists) answer.push(prices[i]);
	}

	return answer;
}