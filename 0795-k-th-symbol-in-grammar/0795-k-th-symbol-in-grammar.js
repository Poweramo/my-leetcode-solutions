/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function kthGrammar(n, k) {
    let current = 0;
    let right = 2 ** (n - 1);
    let left = 1;
    let count = 0;

    while (count < n - 1) {
        let mid = Math.floor((right + left) / 2);

        if (k > mid) {
            left = mid + 1;
            current = current ? 0 : 1;
        } else {
            right = mid;
        }
        count++;
    }

    return current;
}