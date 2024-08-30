/**
 * @param {string} s
 * @return {string}
*/

function decodeString(s) {
    const charStack = [];
    const tempString = [];
    const tempNum = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === "]") {
            while (charStack[charStack.length - 1] !== "[") {
                tempString.unshift(charStack.pop());
            }
            charStack.pop();

            while (!isNaN(Number(charStack[charStack.length - 1]))) {
                tempNum.unshift(charStack.pop());
            }

            let k = Number(tempNum.join(""));
            while (k !== 0) {
                charStack.push(tempString.join(""));
                k--;
            }

            tempString.splice(0, tempString.length);
            tempNum.splice(0, tempNum.length);
            continue;
        }

        charStack.push(char);
    }

    return charStack.join("");
}

