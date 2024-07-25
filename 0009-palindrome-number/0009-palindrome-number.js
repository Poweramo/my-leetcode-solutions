/**
 * @param {number} x
 * @return {boolean}
 */

function isPalindrome(x) {
    let numAsString = String(x);
	let reversedString = "";
	for (let i = numAsString.length - 1; i >= 0; i--) {
		reversedString += numAsString[i];
	}

	return x === Number(reversedString) ? true : false;
};