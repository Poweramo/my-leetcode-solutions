/**
 * @param {string[]} tokens
 * @return {number}
 */

function evalRPN(tokens) {
	const resultStack = [];
	let firstOut;
	let secondOut;

	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		switch (token) {
			case "+":
				resultStack.push(resultStack.pop() + resultStack.pop());
				break;

			case "-":
				firstOut = resultStack.pop();
				secondOut = resultStack.pop();
				resultStack.push(secondOut - firstOut);
				break;

			case "*":
				resultStack.push(resultStack.pop() * resultStack.pop());
				break;

			case "/":
				firstOut = resultStack.pop();
				secondOut = resultStack.pop();
				const decimalResult = secondOut / firstOut;
				const intResult =
					decimalResult > 0 ? Math.floor(decimalResult) : Math.ceil(decimalResult);

				resultStack.push(intResult);
				break;

			default:
				resultStack.push(Number(token));
				break;
		}
	}

	return resultStack[0];
}