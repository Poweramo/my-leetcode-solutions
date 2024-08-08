class MyStack {
	constructor() {
		this.queue = [];
		this.size = 0;
	}
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.queue.push(x);
	this.size++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    this.size--
	return this.queue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
	return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return this.size === 0;
};

