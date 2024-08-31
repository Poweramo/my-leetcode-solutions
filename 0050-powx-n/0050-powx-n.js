/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

function myPow(x, n) {
    function calculateRes(number, exponent) {
        if (number === 0) return 0;
        if (exponent === 0) return 1;

        let res = calculateRes(number, Math.floor(exponent / 2));
        res = res * res;

        if (exponent % 2 === 1) return res * number;
        return res;
    }

    let ans = calculateRes(x, Math.abs(n));
    return n >= 0 ? ans : 1 / ans;
}