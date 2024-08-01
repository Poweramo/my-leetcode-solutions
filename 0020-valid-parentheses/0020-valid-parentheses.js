/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		const symbol = s[i];

		if (symbol === "(" || symbol === "{" || symbol === "[") {
			stack.push(symbol);
		} else {
			switch (symbol) {
				case ")":
					if (stack.pop() !== "(") return false;
					break;

				case "}":
					if (stack.pop() !== "{") return false;
					break;

				case "]":
					if (stack.pop() !== "[") return false;
					break;
			}
		}
	}

	return stack.length === 0 ? true : false;
};