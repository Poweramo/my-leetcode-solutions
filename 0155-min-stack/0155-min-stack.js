class MinStack {
	// Stack structure : { index: [val, minVal] }
	constructor() {
		this.stack = {};
		this.size = 0;
	}

	push(val) {
		if (this.stack[this.size - 1]) {
			let minOfLastElement = this.stack[this.size - 1][1];

			if (minOfLastElement < val) {
				this.stack[this.size] = [val, minOfLastElement];
			} else {
				this.stack[this.size] = [val, val];
			}
		} else {
			this.stack[this.size] = [val, val];
		}

		this.size++;
	}

	pop() {
		delete this.stack[this.size - 1];
		this.size--;
	}

	top() {
		const lastIn = this.stack[this.size - 1];
		return lastIn[0];
	}

	getMin() {
		const min = this.stack[this.size - 1][1];
		return min;
	}
}