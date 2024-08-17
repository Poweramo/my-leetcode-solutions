/**
 * @param {number} n
 * @return {boolean}
 */

function isPowerOfThree(n) {
	function checkPower(power) {
		if (3 ** power === n) return true;
		if (3 ** power > n) return false;

		return checkPower(power + 1);
	}

	return checkPower(0);
}