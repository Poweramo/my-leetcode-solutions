/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if (numRows === 1) return s

    let res = "";
    const lettersRows = {};
    let state = "up";
    let count = 0;

    for (let i = 0; i < numRows; i++) {
        lettersRows[i] = [];
    }

    for (let i = 0; i < s.length; i++) {
        if (count % (numRows - 1) === 0) {
            if (state === "up") {
                state = "down";
            } else {
                state = "up";
            }
        }

        newValue = lettersRows[count];
        newValue?.push(s[i]);
        lettersRows[count] = newValue;
        (state === "down") ? count++ : count--;
    }

    for (let index in lettersRows) {
        if (lettersRows.hasOwnProperty(index)) {
            const arr = lettersRows[index]
            for (let i = 0; i < arr.length; i++) {
                res += arr[i]
            }
        }
    }

    return res
}
