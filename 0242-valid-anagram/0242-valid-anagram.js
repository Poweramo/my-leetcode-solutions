/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram(s, t) {
	const mapForS = new Map();
	const mapForT = new Map();

	if (s.length !== t.length) return false;

	for (let i = 0; i < s.length; i++) {
		mapForS.has(s[i]) ? mapForS.set(s[i], mapForS.get(s[i]) + 1) : mapForS.set(s[i], 1);
		mapForT.has(t[i]) ? mapForT.set(t[i], mapForT.get(t[i]) + 1) : mapForT.set(t[i], 1);
	}

	for (let i = 0; i < t.length; i++) {
		if (!mapForS.has(t[i]) || mapForT.get(t[i]) !== mapForS.get(t[i])) return false;
	}

	return true;
}