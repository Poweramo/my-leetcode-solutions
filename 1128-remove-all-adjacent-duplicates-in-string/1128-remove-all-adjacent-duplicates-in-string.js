/**
 * @param {string} s
 * @return {string}
 */

function removeDuplicates(s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		const character = s[i];
		stack[stack.length - 1] === character ? stack.pop() : stack.push(character);
	}

	return stack.join("");
}