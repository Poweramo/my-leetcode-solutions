class MinStack {
    constructor() {
        this.stack = {};
        this.size = 0;
        this.lastElement = null;
    }

    push(val) {
        if (this.stack[this.size - 1]) {
            let last = this.stack[this.size - 1].get(this.lastElement);

            if (last < val) {
                this.stack[this.size] = new Map();
                this.stack[this.size].set(val, last);
            } else {
                this.stack[this.size] = new Map();
                this.stack[this.size].set(val, val);
            }
        } else {
            this.stack[this.size] = new Map();
            this.stack[this.size].set(val, val);
        }

        this.lastElement = val;
        this.size++;
    }

    pop() {
        delete this.stack[this.size - 1];
        this.size--;
        let lastIn = this.stack[this.size - 1];
        if (lastIn) {
            for (const key of lastIn.keys()) {
                this.lastElement = key;
            }
        }
    }

    top() {
        let lastIn = this.stack[this.size - 1];
        for (const key of lastIn.keys()) {
            return key;
        }
    }

    getMin() {
        let lastIn = this.stack[this.size - 1];
        for (const key of lastIn.values()) {
            return key;
        }
    }
}