// Problem: https://leetcode.cn/problems/min-stack/
// Accepted at: 2026年9月12日 17:09

class MinStack {
    private stack: number[];
    private minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value: number): void {
        this.stack.push(value);
        const currentMin = this.minStack.length === 0
            ? value
            : Math.min(value, this.minStack.at(-1));
        this.minStack.push(currentMin);
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.stack.at(-1);
    }

    getMin(): number {
        return this.minStack.at(-1);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
