/**
 * @param {string} s
 * @return {number}
 */

function maxDepth(s) {
	let depths = [];
	let stackClosed = [];
	let stackOpen = [];

	for (let i = 0; i < s.length; i++) {
		const character = s[i];
        
		if (character === "(") stackOpen.push(character);
		if (character === ")") stackClosed.push(character);
		if (character !== "+" || character !== "-" || character !== "*" || character !== "/") {
			let depth = stackOpen.length - stackClosed.length;
			depths.push(depth);
		}
	}

	let sortedDepths = depths.sort((a, b) => b - a);
	return sortedDepths[0];
};