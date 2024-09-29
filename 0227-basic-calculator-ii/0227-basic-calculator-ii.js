/**
 * @param {string} s
 * @return {number}
 */

function calculate(s) {
    const exp = s.replaceAll(" ", "");
    let result = 0;
    let prevNum = 0;
    let currNum = 0;
    let currOp = "+";
    let i = 0;

    while (i < exp.length) {
        if (!isNaN(Number(exp[i]))) {
            while (i < exp.length && !isNaN(Number(exp[i]))) {
                currNum = currNum * 10 + Number(exp[i]);
                i++;
            }
            i--;

            if (currOp === "+") {
                result += currNum;
                prevNum = currNum;
            } else if (currOp === "-") {
                result -= currNum;
                prevNum = -currNum;
            } else if (currOp === "*") {
                result -= prevNum;
                result += prevNum * currNum;
                prevNum = prevNum * currNum;
            } else {
                result -= prevNum;
                result += divide(prevNum, currNum);
                prevNum = divide(prevNum, currNum);
            }

            currNum = 0
        } else {
            currOp = exp[i];
        }

        i++;
    }

    return result;
};

function divide(x, y) {
    return x / y > 0 ? Math.floor(x / y) : Math.ceil(x / y)
};