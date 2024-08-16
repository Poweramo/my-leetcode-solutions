/**
 * @param {string} val
 * @return {Object}
 */

function expect(val) {
    return {
        toBe: function (testValue) {
            if (val === testValue) {
                return true;
            } else {
                throw "Not Equal";
            }
        },
        notToBe: function (testValue) {
            if (val !== testValue) {
                return true;
            } else {
                throw "Equal";
            }
        }
    };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */