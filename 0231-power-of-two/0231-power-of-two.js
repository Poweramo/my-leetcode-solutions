/**
 * @param {number} n
 * @return {boolean}
 */

function isPowerOfTwo(n) {
    function checkPower(power) {
        if (2 ** power === n) return true;
        if (2 ** power > n) return false;

        return checkPower(power + 1);
    }

    return checkPower(0);
}