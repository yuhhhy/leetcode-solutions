// Problem: https://leetcode.cn/problems/lru-cache/
// Accepted at: 2026年7月1日 00:07

class LRUCache {
    cache: Map<number, number>;
    capacity: number;
    constructor(capacity: number) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const val = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, val);
            return val;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);

        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
