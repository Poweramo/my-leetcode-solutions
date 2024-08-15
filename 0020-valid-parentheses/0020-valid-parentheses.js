/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
	const bracketStack = [];
	const openBracketsSet = new Set();
	const closedBracketsMap = new Map();
	openBracketsSet.add("{");
	openBracketsSet.add("(");
	openBracketsSet.add("[");
	closedBracketsMap.set("}", "{");
	closedBracketsMap.set(")", "(");
	closedBracketsMap.set("]", "[");

	for (let i = 0; i < s.length; i++) {
		const symbol = s[i];

		if (openBracketsSet.has(symbol)) {
			bracketStack.push(symbol);
			continue;
		}
		if (bracketStack.pop() !== closedBracketsMap.get(symbol)) return false;
	}

	return bracketStack.length === 0 ? true : false;
}