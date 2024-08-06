class Node {
	constructor(data) {
		this.val = data;
		this.next = null;
	}
}

function MyQueue() {
	this.front = null;
	this.back = null;
	this.length = 0;

	return this.front;
}

/**
 * @param {number} x
 * @return {void}
 */

MyQueue.prototype.push = function (x) {
	const node = new Node(x);
	this.length++;

	if (!this.back) {
		this.front = node;
		this.back = node;
	} else {
		this.back.next = node;
		this.back = node;
	}
};

/**
 * @return {number}
 */

MyQueue.prototype.pop = function () {
	if (this.length !== 0) {
		let temp = this.front.val;

		if (this.length === 1) {
			this.front = null;
			this.back = null;
		} else {
			this.front = this.front.next;
		}

		this.length--;
		return temp;
	}
};

/**
 * @return {number}
 */

MyQueue.prototype.peek = function () {
	return this.front.val;
};

/**
 * @return {boolean}
 */

MyQueue.prototype.empty = function () {
	return this.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
*/