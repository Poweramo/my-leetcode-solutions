class RecentCounter {
	constructor() {
		this.requests = [];
	}
}

/** 
 * @param {number} t
 * @return {number}
 */

RecentCounter.prototype.ping = function (t) {
	let min = t - 3000;
	let max = t;
	let requestCount = 0;
	this.requests.push(t);

	for (let i = 0; i < this.requests.length; i++) {
		const request = this.requests[i];
		if (request >= min && request <= max) requestCount++;
	}

	return requestCount;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */