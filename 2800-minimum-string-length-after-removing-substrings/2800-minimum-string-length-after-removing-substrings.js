/**
 * @param {string} s
 * @return {number}
 */

function minLength(s) {
	while (s.indexOf("AB") !== -1 || s.indexOf("CD") !== -1) {
		s = s.replace("AB", "");
		s = s.replace("CD", "");
	}

	return s.length;
}