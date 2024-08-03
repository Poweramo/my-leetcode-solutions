/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
	const backspace = "#";
	let stack1 = [];
	let stack2 = [];

	for (let i = 0; i < s.length; i++) {
		const character = s[i];
		character === backspace ? stack1.pop() : stack1.push(character);
	}

	for (let i = 0; i < t.length; i++) {
		const character = t[i];
		character === backspace ? stack2.pop() : stack2.push(character);
	}

    if (stack1.length !== stack2.length) return false;

	for (let i = 0; i < stack1.length; i++) {
		if (stack1[i] !== stack2[i]) {
			return false;
		}
	}

	return true;
};