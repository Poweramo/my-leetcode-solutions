/**
 * @param {string} s
 * @return {number}
 */
 
function romanToInt(s) {
    let number = 0;
	let i = 1,
		v = 5 * i,
		x = 2 * v,
		l = 5 * x,
		c = 2 * l,
		d = 5 * c,
		m = 2 * d;

	for (let index = 0; index < s.length; index++) {
		switch (s[index]) {
			case "I":
				if (s[index + 1] === "V" || s[index + 1] === "X") {
					switch (s[index + 1]) {
						case "V":
							number += v - i;
							break;
						case "X":
							number += x - i;
							break;
					}
					index++;
				} else {
					number += i;
				}
				break;
			case "V":
				number += v;
				break;
			case "X":
				if (s[index + 1] === "L" || s[index + 1] === "C") {
					switch (s[index + 1]) {
						case "L":
							number += l - x;
							break;
						case "C":
							number += c - x;
							break;
					}
					index++;
				} else {
					number += x;
				}
				break;
			case "L":
				number += l;
				break;
			case "C":
				if (s[index + 1] === "D" || s[index + 1] === "M") {
					switch (s[index + 1]) {
						case "D":
							number += d - c;
							break;
						case "M":
							number += m - c;
							break;
					}
					index++;
				} else {
					number += c;
				}
				break;
			case "D":
				number += d;
				break;
			case "M":
				number += m;
				break;
		}
	}

	return number;
};